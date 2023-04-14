import { expect, test } from '@oclif/test'; // should be your first require

import { WebsiteMetadata } from '../../../src/helpers/websites/websites-metadata';
import { ScanHelper, scanHelper } from '../../../src/helpers/websites/scan';
import {
  ItPerfMetricReport,
  IPerformanceMetricReport,
} from '../../../src/helpers/websites/it-performance-metric';
import {
  createScanFacet,
  scanFacetReport,
} from '../../../src/helpers/websites/scan-facet';

describe('IT Performance Metric', () => {
  const sneakyWebsite = `file://${__dirname}/../../data/sneakysite.html`;
  const testWebsite = `file://${__dirname}/../../data/testsite.html`;
  const date = new Date();
  const formattedDate = `${date.getFullYear()}${
    date.getMonth() < 9 ? '0' : ''
  }${date.getMonth() + 1}${date.getDate() < 10 ? '0' : ''}${date.getDate()}`;
  let websiteMetadata: WebsiteMetadata;
  let sh: ScanHelper;
  let data: scanFacetReport['data'];
  describe('negative regex results', () => {
    before(async () => {
      websiteMetadata = new WebsiteMetadata(sneakyWebsite);
      sh = await scanHelper(formattedDate, {
        domains: '',
        preset: '',
        headless: true,
        auth: false,
      });
      ({ data } = await createScanFacet(
        ItPerfMetricReport,
        sh,
        websiteMetadata,
      ).run());
      sh.browser.close();
    });
    test.it(
      `should return false for IT Performance 'Contact' attribute`,
      async (ctx, done) => {
        expect((data as IPerformanceMetricReport).contact).to.equal(false);
        done();
      },
    );
    test.it(
      `should return false for IT Performance 'dap' attribute`,
      async (ctx, done) => {
        expect((data as IPerformanceMetricReport).dap).to.equal(false);
        done();
      },
    );
    test.it(
      `should return false for IT Performance 'banner' attribute`,
      async (ctx, done) => {
        expect((data as IPerformanceMetricReport).banner).to.equal(false);
        done();
      },
    );
    test.it(
      `should return false for IT Performance 'identifier' attribute`,
      async (ctx, done) => {
        expect((data as IPerformanceMetricReport).identifier).to.equal(false);
        done();
      },
    );
    test.it(
      `should return false for IT Performance 'identifierPrivacy' attribute`,
      async (ctx, done) => {
        expect((data as IPerformanceMetricReport).identifierPrivacy).to.equal(
          false,
        );
        done();
      },
    );
    test.it(
      `should return false for IT Performance 'identifierAccessibility' attribute`,
      async (ctx, done) => {
        expect(
          (data as IPerformanceMetricReport).identifierAccessibility,
        ).to.equal(false);
        done();
      },
    );
    test.it(
      `should return false for IT Performance 'identifierFOIA' attribute`,
      async (ctx, done) => {
        expect((data as IPerformanceMetricReport).identifierFOIA).to.equal(
          false,
        );
        done();
      },
    );
    test.it(
      `should return false for IT Performance 'search' attribute`,
      async (ctx, done) => {
        expect((data as IPerformanceMetricReport).search).to.equal(false);
        done();
      },
    );
  });
  describe('positive regex results', () => {
    before(async () => {
      websiteMetadata = new WebsiteMetadata(testWebsite);
      sh = await scanHelper(formattedDate, {
        domains: '',
        preset: '',
        headless: true,
        auth: false,
      });
      ({ data } = await createScanFacet(
        ItPerfMetricReport,
        sh,
        websiteMetadata,
      ).run());
      sh.browser.close();
    });
    test.it(
      `should return true for IT Performance 'Contact' attribute`,
      async (ctx, done) => {
        expect((data as IPerformanceMetricReport).contact).to.equal(true);
        done();
      },
    );
    test.it(
      `should return true for IT Performance 'dap' attribute`,
      async (ctx, done) => {
        expect((data as IPerformanceMetricReport).dap).to.equal(true);
        done();
      },
    );
    test.it(
      `should return true for IT Performance 'banner' attribute`,
      async (ctx, done) => {
        expect((data as IPerformanceMetricReport).banner).to.equal(true);
        done();
      },
    );
    test.it(
      `should return true for IT Performance 'identifier' attribute`,
      async (ctx, done) => {
        expect((data as IPerformanceMetricReport).identifier).to.equal(true);
        done();
      },
    );
    test.it(
      `should return true for IT Performance 'identifierPrivacy' attribute`,
      async (ctx, done) => {
        expect((data as IPerformanceMetricReport).identifierPrivacy).to.equal(
          true,
        );
        done();
      },
    );
    test.it(
      `should return true for IT Performance 'identifierAccessibility' attribute`,
      async (ctx, done) => {
        expect(
          (data as IPerformanceMetricReport).identifierAccessibility,
        ).to.equal(true);
        done();
      },
    );
    test.it(
      `should return true for IT Performance 'identifierFOIA' attribute`,
      async (ctx, done) => {
        expect((data as IPerformanceMetricReport).identifierFOIA).to.equal(
          true,
        );
        done();
      },
    );
    test.it(
      `should return true for IT Performance 'search' attribute`,
      async (ctx, done) => {
        expect((data as IPerformanceMetricReport).search).to.equal(true);
        done();
      },
    );
  });
});
