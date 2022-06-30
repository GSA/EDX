import { CliUx } from '@oclif/core';
import BaseCommand from '../../../base';
import {
  domainsSource,
  facets,
  headless,
  output,
  preset,
} from '../../../flags/scan';
import { isCountedSite } from '../../../helpers/global/utils';
import { FetchHelper } from '../../../helpers/websites/fetch';
import { scanHelper, scan } from '../../../helpers/websites/scan';

export default class Bulk extends BaseCommand<typeof Bulk.flags> {
  static description =
    'Scans websites using various modules to capture information about the sites';

  static examples = [`$ edxcli websites scan bulk -d Touchpoints`];

  static flags = {
    ...BaseCommand.flags,
    domains: domainsSource(),
    facets: facets(),
    headless: headless,
    output: output(),
    preset: preset(),
  };

  async run(): Promise<void> {
    const { flags } = await this.parse(Bulk);
    let domainArray: string[] = [];
    const fh = new FetchHelper(BaseCommand.formattedDate(), flags);
    if (flags.domains === 'Touchpoints') {
      const tpData = await fh.getTouchpointsWebsites();

      // eslint-disable-next-line unicorn/no-array-reduce
      domainArray = tpData.reduce((filteredList, tpItem) => {
        if (
          isCountedSite({
            'Touchpoints URL': `https://touchpoints.app.cloud.gov/admin/websites/${tpItem.id}`,
            Site: tpItem.attributes.domain,
            Office: tpItem.attributes.office,
            'Sub-Office': tpItem.attributes.sub_office,
            'Prod Status': tpItem.attributes.production_status,
            'Type of Domain': tpItem.attributes.type_of_site,
            'Digital Brand Category': tpItem.attributes.digital_brand_category,
          })
        ) {
          const domainToAdd = tpItem.attributes.domain;
          filteredList.push(domainToAdd);
        }

        return filteredList;
      }, [] as string[]);
    }

    CliUx.ux.action.start(`Bulk Scanning ${domainArray.length} websites`);
    const sh = await scanHelper(BaseCommand.formattedDate(), flags);
    this.log('Performing scans with the following facets:', 'debug');
    for (const item of sh.facets) {
      this.log(` > ${item}`, 'debug');
    }

    this.log('\nScanning websites: ', 'debug');
    // iterate over list of domains
    for (const item of domainArray) {
      this.log(` > ${item}`, 'debug');
      // eslint-disable-next-line no-await-in-loop
      await scan(sh, item);
    }

    sh.browser.close();
    // write results
    CliUx.ux.action.stop(
      `Scan complete, results written to ${sh.outputDirectory}`,
    );
  }
}
