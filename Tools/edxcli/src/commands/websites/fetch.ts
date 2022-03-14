import { Flags, CliUx, Config } from '@oclif/core';
import BaseCommand from '../../base';
import FetchHelper from '../../helpers/websites/fetch';
import CSV from '../../helpers/global/csv';
import { config } from 'dotenv';

export default class Fetch extends BaseCommand<typeof Fetch.flags> {
  static description =
    'Retrieves a list of websites from one or more data sources.';

  static examples = [
    `$ oex websites fetch "Site Scanner" 
    Fetching Site Scanner data... complete
    Site Scanner data written to Site Scanner_20220312.csv`,
    `$ oex websites fetch Touchpoints -o ~/mydirectory`,
    `$ oex websites fetch Touchpoints -o ~/another/directory -l 5`,
  ];

  static flags = {
    ...BaseCommand.flags,
    output: Flags.string({
      char: 'o',
      description: 'Output directory. Defualts to current directory',
      default: '.',
      required: false,
    }),
  };

  // update args, someone should be able to provide the name of the service from which to fetch
  static args = [
    {
      name: 'source',
      description: 'Website list source',
      required: true,
      options: ['Site Scanner', 'Touchpoints'],
    },
  ];

  async run(): Promise<void> {
    const { args, flags } = await this.parse(Fetch);
    CliUx.ux.action.start(`Fetching ${args.source} data`);
    const fh = new FetchHelper(BaseCommand.formattedDate(), flags);
    // fh > input > file location, number of rows
    let data;
    switch (args.source) {
      case 'Touchpoints':
        data = await fh.getTouchpointsWebsites().then((result) => {
          return result.map((obj) => {
            return { domain: obj.attributes.domain };
          });
        });
        break;
      case 'Site Scanner':
        data = await fh.getSiteScannerWebsites().then((result) => {
          return result.map((obj) => {
            return { domain: obj.target_url };
          });
        });
        break;
      default:
        this.log(
          'Invalid option provided. "Site Scanner" or "Touchpoints" expected.',
          'info',
        );
        throw this.error;
    }

    const csv = new CSV(
      BaseCommand.formattedDate(),
      flags.output,
      args.source,
      [{ id: 'domain', title: 'Domain' }],
    );
    csv.write(data).then((msg) => this.log(msg, 'info'));
    CliUx.ux.action.stop(' complete');
  }
}
