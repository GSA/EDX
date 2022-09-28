import { CliUx } from '@oclif/core';
import BaseCommand from '../../../base';
import {
  auth,
  domainsList,
  facets,
  headless,
  output,
  preset,
} from '../../../flags/flags';
import { scanHelper, scan } from '../../../helpers/websites/scan';

export default class Scan extends BaseCommand<typeof Scan.flags> {
  static description =
    'Scans websites using various facets to capture information about the sites';

  static examples = [
    `$ edxcli websites scan -d gsa.gov -f screenshot`,
    `$ edxcli websites scan -d buy.gsa.gov -f "screenshot,lighthouse mobile,site scanner" -o ~/some/other/directory`,
    `$ edxcli websites scan -d buy.gsa.gov -f screenshot -o ~/some/other/directory`,
    `$ edxcli websites scan -d sftool.gov -p Performance Metric`,
    `$ edxcli websites scan -d "18f.gsa.gov,buy.gsa.gov,gsa.gov" -p "edx scan" --no-headless`,
    `$ edxcli websites scan -d "18f.gsa.gov" -f "screenshot" --loglevel debug`,
    `$ edxcli websites scan -d "18f.gsa.gov" -f "screenshot" --auth`,
  ];

  static flags = {
    ...BaseCommand.flags,
    domains: domainsList(),
    facets: facets(),
    headless: headless,
    output: output(),
    preset: preset(),
    auth: auth,
  };

  async run(): Promise<void> {
    const { flags } = await this.parse(Scan);
    let domainArray: string[] = [];
    if (flags.domains) {
      domainArray = flags.domains.split(',').map((val) => val.trim());
    }

    CliUx.ux.action.start(`Scanning ${domainArray.length} websites`);
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
