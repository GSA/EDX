import { Flags, CliUx } from '@oclif/core';
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
    CliUx.ux.action.start('Comparing records between Airtable and Touchpoints');

    // We want to capture the before/ after state of records and save them as an artifact
    const newWebsiteRecords: any[] = [];
    const preUpdateWebsiteRecords: any[] = [];
    const postUpdateWebsiteRecords: any[] = [];

    // lists of websites to create or update
    const websitesToCreate: Airtable.ATWebsiteFields[] = [];
    const websitesToUpdate: Airtable.ATWebsite[] = [];

    // establishing promises arrays which must be resolved prior to the next step
    const promisesArray: Promise<void>[] = [];
    const upsertPromisesArray: Promise<void>[] = [];

    /* The pattern to follow is creating a function which wraps the loop
     That function returns a promise
     Within the loop though, all Promise-based functions get added to an array that holds the promises "let valuesArray: Promise<any>[] = []"
     At the very end, you Promise.all(valuesArray).then(whatever) to resolve
     */
    for (const item in tpData) {
      if (Object.prototype.hasOwnProperty.call(tpData, item)) {
        promisesArray.push(
          Airtable.retrieveWebsite(tpData[item].Site)
            .then((websiteRecord) => {
              // if a record was found, update it
              if (websiteRecord.records.length > 0) {
                preUpdateWebsiteRecords.push(websiteRecord);
                const updateRecord = {
                  id: websiteRecord.records[0].id,
                  fields: tpData[item],
                };
                websitesToUpdate.push(updateRecord);
              } else if (isCountedSite(tpData[item])) {
                /* Touchpoints contains a lot of information, we don't want to publish all of it to airtable as many records are irrelevant (staging, dev, infrastructure). isCountedSite ensures we don't include bad information. This will add to an array and we can do a mass insert later
                 */
                websitesToCreate.push(tpData[item]);
              }
            })
            .catch((error: any) => {
              console.error(error);
            }),
        );
      }
    }

    Promise.all(promisesArray).then(() => {
      for (const element of websitesToUpdate) {
        upsertPromisesArray.push(
          Airtable.updateWebsites([element])
            .then((updatedWebsiteRecord) => {
              postUpdateWebsiteRecords.push({
                id: updatedWebsiteRecord[0].id,
                Site: updatedWebsiteRecord[0].fields.Site,
                Active: updatedWebsiteRecord[0].fields.Active,
                'Touchpoints URL':
                  updatedWebsiteRecord[0].fields['Touchpoints URL'],
                Office: updatedWebsiteRecord[0].fields.Office,
                'Sub-Office': updatedWebsiteRecord[0].fields['Sub-Office'],
                'Prod Status': updatedWebsiteRecord[0].fields['Prod Status'],
                'Digital Brand Category':
                  updatedWebsiteRecord[0].fields['Digital Brand Category'],
                'Type of Domain':
                  updatedWebsiteRecord[0].fields['Type of Domain'],
              });
            })
            .catch((error: any) => {
              console.error(error);
            }),
        );
      }

      if (websitesToCreate.length > 0) {
        for (const element of websitesToCreate) {
          upsertPromisesArray.push(
            Airtable.createWebsites(element)
              .then((newWebsiteRecord) => {
                newWebsiteRecords.push(newWebsiteRecord);
              })
              .catch((error: any) => {
                console.error(error);
              }),
          );
        }
      }

      // write the before/ after content to files
      Promise.all(upsertPromisesArray).then(() => {
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
          `\nCreated ${newWebsiteRecords.length} records in Airtable\nUpdated ${postUpdateWebsiteRecords.length} records in Airtable.\nDone.`,
        );
      });
    });
  }
}
