import * as prompt from '@oclif/core/lib/cli-ux/prompt';
import { expect, test } from '@oclif/test';
import { opendir, rm } from 'node:fs/promises';

import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

describe('websites scan...', () => {
  const date = new Date();
  const formattedDate = `${date.getFullYear()}${
    date.getMonth() < 9 ? '0' : ''
  }${date.getMonth() + 1}${date.getDate() < 10 ? '0' : ''}${date.getDate()}`;
  const dummyWebsite = `file://${__dirname}/../../../testsite.html`;

  describe('Default scan against dummy website', () => {
    describe('scan helper scan is called one time', () => {
      test
        .stdout()
        .command(['websites scan', '-d', dummyWebsite])
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
    describe('Passing facets with individual -f params', () => {
      test
        .stdout()
        .command([
          'websites scan',
          '-d',
          dummyWebsite,
          '-f',
          'screenshot',
          '-f',
          'siteScanner',
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

  describe('Authentication Flag', () => {
    describe('Pass --auth flag', () => {
      test
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .stub(prompt, 'prompt', (): string => 'myUserName')
        .stub(prompt, 'prompt', (): string => 'myPassword')
        .stdout()
        .command(['websites scan', '-d', dummyWebsite, '--auth'])
        // done is used since the api requests are Promises, this  ensures the test suite waits for the response
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .it('accepts parameters without error', (done) => {
          (ctx: any) => {
            expect(ctx).to.be.empty;
          };
        });
    });
  });
  after(async () => {
    const promisesArray: Promise<any>[] = [];
    const dataDir = `${__dirname}/../../../../data/scans/${formattedDate}`;
    const dir = await opendir(dataDir);
    for await (const file of dir) {
      if (file.name.startsWith('testsite.html_')) {
        promisesArray.push(rm(`${dataDir}/${file.name}`));
      }
    }

    return Promise.all(promisesArray);
  });
});
