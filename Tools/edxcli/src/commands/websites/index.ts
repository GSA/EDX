import BaseCommand from '../../base';

export default class Websites extends BaseCommand<typeof Websites.flags> {
  static description =
    'Performs a number of operations against lists of websites published by Touchpoints https://github.com/GSA/touchpoints/wiki/API#available-api-endpoints and Site Scanner https://open.gsa.gov/api/site-scanning-api/';

  static examples = [
    `$ edxcli websites fetch Touchpoints`,
    `$ edxcli websites fetch "Site Scanner"`,
  ];

  static flags = {
    ...BaseCommand.flags,
  };

  static args = [];

  async run(): Promise<void> {}
}
