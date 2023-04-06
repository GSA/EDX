import { expect } from '@oclif/test';

import { scanHelper, ScanHelper } from '../../../src/helpers/websites/scan';
import { WebsiteReport } from '../../../src/helpers/websites/website-report';

describe('Website Report', () => {
  let sh: ScanHelper;
  let mergedObject: any;
  let objA: any;
  let objB: any;
  let websiteReport: WebsiteReport;
  beforeEach(async () => {
    sh = await scanHelper('20230406', {
      flags: { facets: ['screenshot'] },
      headless: true,
      preset: '',
    });
    mergedObject = {
      screenshot: {
        data: {
          webpage: {
            desktop: {
              domain: 'www.gsa.gov',
              url: 'https://www.gsa.gov/',
              imgPath:
                'data/scans/20230323/www.gsa.gov_desktop_9c27f0afb30a0d9b6e3f5f6715b8fcd1.png',
            },
            mobile: {
              domain: 'www.gsa.gov',
              url: 'https://www.gsa.gov/',
              imgPath:
                'data/scans/20230323/www.gsa.gov_mobile_9c27f0afb30a0d9b6e3f5f6715b8fcd1.png',
            },
          },
        },
        errors: [],
        description:
          'Holds screenshots taken throughout scan including homepage, search engine, and others.',
      },
    };
    objA = {
      screenshot: {
        data: {
          webpage: {
            desktop: {
              domain: 'www.gsa.gov',
              url: 'https://www.gsa.gov/',
              imgPath:
                'data/scans/20230323/www.gsa.gov_desktop_9c27f0afb30a0d9b6e3f5f6715b8fcd1.png',
            },
          },
        },
        errors: [],
        description:
          'Holds screenshots taken throughout scan including homepage, search engine, and others.',
      },
    };
    objB = {
      screenshot: {
        data: {
          webpage: {
            mobile: {
              domain: 'www.gsa.gov',
              url: 'https://www.gsa.gov/',
              imgPath:
                'data/scans/20230323/www.gsa.gov_mobile_9c27f0afb30a0d9b6e3f5f6715b8fcd1.png',
            },
          },
        },
        errors: [],
        description:
          'Holds screenshots taken throughout scan including homepage, search engine, and others.',
      },
    };
    websiteReport = new WebsiteReport(new URL('https://www.gsa.gov'), sh);
  });
  afterEach(async () => {
    await sh.browser.close();
  });
  /* Created specifically as a part of issue 802 to ensure the Screenshot facet functionality properly merges values */
  it('Facets with multiple child objects can be merged successfully', () => {
    websiteReport.addReport(objA);
    websiteReport.addReport(objB);
    expect(JSON.stringify(mergedObject.screenshot)).to.equal(
      JSON.stringify(websiteReport.reports.screenshot),
    );
  });
});
