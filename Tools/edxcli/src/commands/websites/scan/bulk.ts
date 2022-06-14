import { CliUx } from '@oclif/core';
import BaseCommand from '../../../base';
import {
  domainsSource,
  facets,
  headless,
  output,
  preset,
} from '../../../flags/scan';
// import { ScanHelper } from '../../helpers/websites/scan';

export default class Bulk extends BaseCommand<typeof Bulk.flags> {
  static description =
    'Scans websites using various modules to capture information about the sites';

  static examples = [`$ edxcli websites scan bulk `];

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
    let domainArray = [];
    if (flags.domains) {
      domainArray = flags.domains.split(',');
    }

    CliUx.ux.action.start(`Bulk Scanning ${domainArray.length} websites`);
    // const sh = new ScanHelper(BaseCommand.formattedDate(), flags);
    CliUx.ux.action.stop(`Hey, we did the thing`);
    // fh > input > file location, number of rows
  }
}
