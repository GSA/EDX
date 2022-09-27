import { expect, test } from '@oclif/test';
require('dotenv').config();

describe('Default scan against gsa.gov', () => {
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

describe('Facets Flag', () => {
  describe('Passing a comma-separated list of facets', () => {
    test
      .stdout()
      .command([
        'websites scan',
        '-d',
        'gsa.gov',
        '-f',
        'screenshot,site scanner',
      ])
      // done is used since the api requests are Promises, this  ensures the test suite waits for the response
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .it('is consumed correctly', (done) => {
        (ctx: any) => {
          expect(ctx.stdout).to.equal(
            `Performing scans with the following facets:
            > screenshot
            > site scanner`,
          );
        };
      });
  });
  describe('Passing facets with individual -f params', () => {
    test
      .stdout()
      .command([
        'websites scan',
        '-d',
        'gsa.gov',
        '-f',
        'screenshot',
        '-f',
        'site scanner',
      ])
      // done is used since the api requests are Promises, this  ensures the test suite waits for the response
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .it('is consumed correctly', (done) => {
        (ctx: any) => {
          expect(ctx.stdout).to.equal(
            `Performing scans with the following facets:
            > screenshot
            > site scanner`,
          );
        };
      });
  });
});
