import * as Debug from 'debug';
const debug = Debug.default('edxcli:data:condense');
import { Flags, CliUx } from '@oclif/core';
import BaseCommand from '../../../base';
import { output } from '../../../flags/flags';
import { CondenseHelper } from '../../../helpers/data/condense';

export default class Condense extends BaseCommand<typeof Condense.flags> {
  static description =
    'Consolidates json output from website scans into CSV files';

  static examples = [
    `$ edxcli data condense`,
    `$ edxcli data condense -f "20220719,20220720"`,
    `$ edxcli data condense -o customDirectory`,
    `$ edxcli data condense -c "lighthouseAccessibility"`,
  ];

  static flags = {
    ...BaseCommand.flags,
    folders: Flags.string({
      char: 'f',
      description:
        'List of comma-separated folders within the /data/scans directory.',
      required: false,
    }),
    output: output({ default: '/data/condensedData' }),
    collection: Flags.string({
      char: 'c',
      description: 'A pre-defined set of fields to extract into CSV',
      default: 'default',
      options: ['default', 'gearScans', 'lighthouseAccessibility', 'uswds'],
      required: false,
    }),
  };

  static args = [];

  async run(): Promise<void> {
    const { flags } = await this.parse(Condense);
    debug('Flags: %O', flags);

    const ch = new CondenseHelper(BaseCommand.formattedDate(), flags);
    CliUx.ux.action.start(
      `Consolidating data from the following folders ${flags.folders} into ${flags.output}.`,
    );
    await ch.run();
    CliUx.ux.action.stop(' complete');
  }
}
