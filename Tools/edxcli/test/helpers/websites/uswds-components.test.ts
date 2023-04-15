import { expect, test } from '@oclif/test'; // should be your first require

import { WebsiteMetadata } from '../../../src/helpers/websites/websites-metadata';
import { ScanHelper, scanHelper } from '../../../src/helpers/websites/scan';
import {
  createScanFacet,
  scanFacetReport,
} from '../../../src/helpers/websites/scan-facet';
import {
  UswdsComponents,
  UswdsComponentsReport,
} from '../../../src/helpers/websites/uswds-components';

describe('USWDS Components Helper', () => {
  const sneakyWebsite = `file://${__dirname}/../../data/sneakysite.html`;
  const testWebsite = `file://${__dirname}/../../data/testsite.html`;
  const date = new Date();
  const formattedDate = `${date.getFullYear()}${
    date.getMonth() < 9 ? '0' : ''
  }${date.getMonth() + 1}${date.getDate() < 10 ? '0' : ''}${date.getDate()}`;
  let websiteMetadata: WebsiteMetadata;
  let sh: ScanHelper;
  let data: scanFacetReport['data'];
  describe('Site containing all components', () => {
    before(async () => {
      websiteMetadata = new WebsiteMetadata(testWebsite);
      sh = await scanHelper(formattedDate, {
        domains: '',
        preset: '',
        headless: true,
        auth: false,
      });
      ({ data } = await createScanFacet(
        UswdsComponentsReport,
        sh,
        websiteMetadata,
      ).run());
      sh.browser.close();
    });
    test.it(
      `should return true for all USWDS attributes`,
      async (ctx, done) => {
        for (const key of Object.keys(data as UswdsComponents)) {
          const x = data as UswdsComponents;
          expect(x[key as keyof UswdsComponents], key).to.equal(true);
          
        }

        done();
      },
    );
  });
  describe('Site containing no components', () => {
    before(async () => {
      websiteMetadata = new WebsiteMetadata(sneakyWebsite);
      sh = await scanHelper(formattedDate, {
        domains: '',
        preset: '',
        headless: true,
        auth: false,
      });
      ({ data } = await createScanFacet(
        UswdsComponentsReport,
        sh,
        websiteMetadata,
      ).run());
      sh.browser.close();
    });
    test.it(
      `should return false for all USWDS attributes`,
      async (ctx, done) => {
        for (const key of Object.keys(data as UswdsComponents)) {
          const x = data as UswdsComponents;
          expect(x[key as keyof UswdsComponents], key).to.equal(false);
        }

        done();
      },
    );
  });
});
