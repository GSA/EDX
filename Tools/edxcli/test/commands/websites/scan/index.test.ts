import { expect, test } from '@oclif/test';
require('dotenv').config();

describe('websites scan -d gsa.gov', () => {
  describe('scan helper scan is called one time', () => {
    test
      .stdout()
      .command(['websites scan', '-d', 'gsa.gov'])
      // done is used since the api requests are Promises, this  ensures the test suite waits for the response
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .it('Reports that one URL was passed', (done) => {
        (ctx: any) => {
          expect(ctx.stdout).to.equal(
            'Scanning 1 websites...Scan complete, results written to data/',
          );
        };
      });
  });
});
