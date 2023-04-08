import { Flags, CliUx } from '@oclif/core';
import * as Debug from 'debug';
const debug = Debug.default('edxcli:websites:push');

import BaseCommand from '../../base';
import { FetchHelper, TouchpointsRecord } from '../../helpers/websites/fetch';
import * as Airtable from '../../helpers/airtable/index';
import { isCountedSite, writeJSONFile } from '../../helpers/global/utils';

/**
 * Grabs an extract of Touchpoitns data and updates/ inserts it into the Airtable Websites table.
 */
export default class Push extends BaseCommand<typeof Push.flags> {
  static description =
    'Grabs an extract of Touchpoints data and updates or inserts it into Airtable. If the data in Touchpoints matches Airtable, the script will record that an "update" was made but Airtable will not show an updated modified date.';

  static examples = [
    `$ edxcli websites push`,
    `$ edxcli websites push -o ~/mydirectory`,
  ];

  static flags = {
    ...BaseCommand.flags,
    output: Flags.string({
      char: 'o',
      description: 'Output directory. Defualts to /edxcli/data/push directory',
      default: 'data/push',
      required: false,
    }),
  };

  /* retrieves a list of domains from touchpoints, checks airtable for a record with the same domain, if it exists, issues a PATCH (only update fields specified), if not exists, creates record */
  async run(): Promise<void> {
    const { flags } = await this.parse(Push);
    debug('Flags: %O', flags);

    CliUx.ux.action.start(`Fetching Touchpoints data`);
    const fh = new FetchHelper(BaseCommand.formattedDate(), flags);
    // fh > input > file location, number of rows
    const tpData = await fh
      .getTouchpointsWebsites()
      .then((result: TouchpointsRecord[]) => {
        return result.map((obj: TouchpointsRecord) => {
          return {
            'Touchpoints URL': `https://touchpoints.app.cloud.gov/admin/websites/${obj.id}`,
            Site: obj.attributes.domain,
            Office: obj.attributes.office,
            'Sub-Office': obj.attributes.sub_office,
            'Prod Status': obj.attributes.production_status,
            'Type of Domain': obj.attributes.type_of_site,
            'Digital Brand Category': obj.attributes.digital_brand_category,
          };
        });
      });

    CliUx.ux.action.stop(`Fetched ${tpData.length} records from Touchpoints`);
    CliUx.ux.action.start('Fetching records from Airtable');

    const atData: { [key: string]: Record<string, string> } =
      await Airtable.retrieveWebsites();
    CliUx.ux.action.stop(
      `Fetched ${Object.keys(atData).length} records from Airtable`,
    );
    CliUx.ux.action.start('Comparing records between Airtable and Touchpoints');

    // We want to capture the before/ after state of records and save them as an artifact
    const newWebsiteRecords: any[] = [];
    const preUpdateWebsiteRecords: any[] = [];
    const postUpdateWebsiteRecords: any[] = [];

    // lists of websites to create or update
    const websitesToCreate: Omit<Airtable.ATWebsite, 'id' | 'createdTime'>[] =
      [];
    const websitesToUpdate: Airtable.ATWebsite[] = [];

    // establishing promises arrays which must be resolved prior to the next step
    const upsertPromisesArray: Promise<void>[] = [];

    /* iterate through touchpoints data and determine what needs to be updated */
    debug('Iterating through Touchpoints data');
    for (const item in tpData) {
      if (Object.prototype.hasOwnProperty.call(tpData, item)) {
        debug('Reviewing %s', tpData[item].Site);
        const tpDomain: string = tpData[item].Site;
        /* if the touchpoints site (domain) exists in atData, start comparing values */
        if (Object.prototype.hasOwnProperty.call(atData, tpDomain)) {
          // save a copy of the record before update
          preUpdateWebsiteRecords.push(atData[tpDomain]);
          // add website to list of sites to update
          websitesToUpdate.push({
            id: atData[tpDomain].id,
            fields: tpData[item],
          });
        } else if (isCountedSite(tpData[item])) {
          /* Touchpoints contains a lot of information, we don't want to publish all of it to airtable as // records are irrelevant (staging, dev, infrastructure). isCountedSite ensures we don't include bad // mation. This will add to an array and we can do a mass insert later
           */
          websitesToCreate.push({ fields: tpData[item] });
        }
      }
    }

    /* Update websites - airtable api allows for 10 records per call */
    while (websitesToUpdate.length > 0) {
      debug('Airtable update loop');
      upsertPromisesArray.push(
        Airtable.updateWebsites(websitesToUpdate.splice(0, 10))
          .then((updatedWebsiteRecords) => {
            postUpdateWebsiteRecords.push(
              ...updatedWebsiteRecords.map((record: any) => {
                return {
                  id: record.id,
                  Site: record.fields.Site,
                  Active: record.fields.Active,
                  'Touchpoints URL': record.fields['Touchpoints URL'],
                  Office: record.fields.Office,
                  'Sub-Office': record.fields['Sub-Office'],
                  'Prod Status': record.fields['Prod Status'],
                  'Digital Brand Category':
                    record.fields['Digital Brand Category'],
                  'Type of Domain': record.fields['Type of Domain'],
                };
              }),
            );
          })
          .catch((error: any) => {
            console.error('ERROR UPDATE', error);
          }),
      );
    }

    while (websitesToCreate.length > 0) {
      debug('Airtable create loop');
      upsertPromisesArray.push(
        Airtable.createWebsites(websitesToCreate.splice(0, 10))
          .then((newWebsiteRecord) => {
            newWebsiteRecords.push(newWebsiteRecord);
          })
          .catch((error: any) => {
            console.error('CREATE ERROR', error);
          }),
      );
    }

    // write the before/ after content to files
    debug('Writing before/after snapshots');
    Promise.all(upsertPromisesArray).then(() => {
      writeJSONFile(
        tpData,
        flags.output,
        'touchpoints',
        BaseCommand.formattedDate(),
      );
      writeJSONFile(
        postUpdateWebsiteRecords,
        flags.output,
        'airtablePostUpdate',
        BaseCommand.formattedDate(),
      );

      writeJSONFile(
        preUpdateWebsiteRecords,
        flags.output,
        'airtablePreUpdateWebsiteRecords',
        BaseCommand.formattedDate(),
      );
      writeJSONFile(
        newWebsiteRecords,
        flags.output,
        'airtableNewWebsiteRecords',
        BaseCommand.formattedDate(),
      );

      CliUx.ux.action.stop(
        `\nCreated ${newWebsiteRecords.length} records in Airtable\nUpdated ${postUpdateWebsiteRecords.length} records in Airtable.\n\nData backups available in ${flags.output}.\nDone.`,
      );
    });
  }
}
