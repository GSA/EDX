import { CliUx } from '@oclif/core';
import * as fs from 'node:fs';
import puppeteer from 'puppeteer';

import { browser } from '../../browser';
import { CuiBanner } from './cui-banner';
import { printHash, writeJSONFile } from '../global/utils';
import { ItPerfMetricReport } from './it-performance-metric';
import { lighthouseReport } from './lighthouse';
import { MetadataTags } from './metadata-tags';
import { createScanFacet } from './scan-facet';
import { Screenshot } from './screenshot';
import { siteScannerReport } from './site-scanner';
import { UswdsComponentsReport } from './uswds-components';
import { WebsiteMetadata } from './websites-metadata';
import { WebsiteReport } from './website-report';

import * as Debug from 'debug';
const debug = Debug.default('edxcli:scan');

// eslint-disable-next-line complexity
export const scan = async (sh: ScanHelper, domain: string): Promise<void> => {
  debug('Scanning %s', domain);
  const websiteMetadata = new WebsiteMetadata(domain);

  // websiteReport forms the shell that all facets fit into
  const report = new WebsiteReport(websiteMetadata.completeUrl, sh);
  const path = `${sh.outputDirectory}/`;

  debug('Writing output to %s', path);
  // create the directory
  fs.mkdir(path, { recursive: true }, function (dirErr: any) {
    if (dirErr) {
      console.error(dirErr);
    }
  });

  const { pageFound, message } = await initialCheck(
    sh,
    websiteMetadata.completeUrl,
  );
  report.scanStatus = message;
  // certain facets can only be run against websites rather than static files
  const isWebsite = websiteMetadata.completeUrl.protocol === 'https:';

  let data;
  let error;

  if (pageFound) {
    if (sh.facets.includes(<facetType>'cuiBanner')) {
      debug('CUI Banner facet starting');
      ({ data, error } = await createScanFacet(
        CuiBanner,
        sh,
        websiteMetadata,
      ).run());
      report.addReport({
        cuiBanner: {
          description:
            'Produces a confidence score indicating if the CUI warning banner is present on a given page. ',
          data: data,
          errors: error,
        },
      });
      debug('CUI Banner facet completed');
    }

    if (sh.facets.includes(<facetType>'itPerformanceMetric')) {
      debug('itPerformanceMetric facet starting');

      ({ data, error } = await createScanFacet(
        ItPerfMetricReport,
        sh,
        websiteMetadata,
      ).run());
      report.addReport({
        itPerformanceMetric: {
          description: 'Represents GSA IT FY22 performance metrics',
          data: data,
          errors: error,
        },
      });
      debug('itPerformanceMetric facet completed');
    }

    // 'lighthouse desktop',
    if (isWebsite && sh.facets.includes(<facetType>'lighthouseDesktop')) {
      report.addReport({
        lighthouseDesktop: {
          data: await lighthouseReport(sh, websiteMetadata, 'desktop'),
          description: 'Google Lighthouse outputs for desktop.',
          errors: [],
        },
      });
    }

    // 'lighthouse mobile',
    if (isWebsite && sh.facets.includes(<facetType>'lighthouseMobile')) {
      debug('lighthouseMobile facet executing');
      report.addReport({
        lighthouseMobile: {
          data: await lighthouseReport(sh, websiteMetadata, 'mobile'),
          description: 'Google Lighthouse outputs for mobile devices',
          errors: [],
        },
      });
      debug('lighthouseMobile facet completed');
    }

    if (isWebsite && sh.facets.includes(<facetType>'metadataTags')) {
      debug('metadataTags facet executing');
      ({ data, error } = await createScanFacet(
        MetadataTags,
        sh,
        websiteMetadata,
      ).run());
      report.addReport({
        metadataTags: {
          description: '',
          errors: error,
          data: data,
        },
      });
      debug('metadataTags facet completed');
    }

    if (sh.facets.includes(<facetType>'screenshot')) {
      debug('screenshot facet executing');
      ({ data, error } = await createScanFacet(
        Screenshot,
        sh,
        websiteMetadata,
        { type: 'webpage' },
      ).run());
      report.addReport({
        screenshot: {
          data: data,
          errors: error,
          description:
            'Holds screenshots taken throughout scan including homepage, search engine, and others.',
        },
      });

      debug('screenshot facet completed');
    }

    if (isWebsite && sh.facets.includes(<facetType>'searchEngine')) {
      debug('searchEngine facet executing');

      const searchEngineURLs = [
        'https://google.com/search?q=',
        'https://www.bing.com/search?q=',
        'https://duckduckgo.com/?q=',
      ];

      for (const item of searchEngineURLs) {
        // eslint-disable-next-line no-await-in-loop
        ({ data, error } = await createScanFacet(
          Screenshot,
          sh,
          new WebsiteMetadata(`${item}${websiteMetadata.completeUrl.hostname}`),
          { type: 'searchEngine' },
        ).run());

        report.addReport({
          screenshot: {
            data:
              // eslint-disable-next-line no-await-in-loop
              Array.isArray(data) ? [...data] : [],
            description:
              'Holds screenshots taken throughout scan including homepage, search engine, and others.',
            errors: [],
          },
        });
      }

      debug('searchEngine facet completed');
    }

    if (isWebsite && sh.facets.includes(<facetType>'siteScanner')) {
      debug('siteScanner facet executing');
      const scanReport = await siteScannerReport(websiteMetadata.completeUrl);
      if (scanReport)
        report.addReport({
          siteScanner: { data: scanReport, errors: [], description: '' },
        });
      debug('siteScanner facet completed');
    }

    if (sh.facets.includes(<facetType>'uswdsComponents')) {
      debug('uswdsComponents facet executing');
      ({ data, error } = await createScanFacet(
        UswdsComponentsReport,
        sh,
        websiteMetadata,
      ).run());
      report.addReport({
        uswdsComponents: {
          data: data,
          description:
            'Listing each of the USWDS components as a boolean to indicate if the component is present',
          errors: error,
        },
      });
      debug('uswdsComponents facet completed');
    }

    // If Site Scanner returns true for DAP but IT Perf metric does not, overwrite the value.
    if (
      report.reports?.itPerformanceMetric !== undefined &&
      report.reports.siteScanner?.data.dap_detected_final_url
    ) {
      debug('overwriting DAP value with siteScanner data');
      report.reports.itPerformanceMetric.data.dap = true;
    }
  }

  // scan complete
  report.endTime = new Date().toISOString();
  debug('Scan for %s complete at %s', domain, report.endTime);
  // close the browser
  // sh.browser.close();
  // debug('%j', JSON.stringify(report));
  // write the report
  await buildOutput(sh, report);
};

export const scanHelper = async (
  formattedDate: string,
  flags: any,
): Promise<ScanHelper> => {
  const cleanedFacets =
    flags.facets === undefined
      ? []
      : flags.facets.flatMap((element: string) =>
          element.split(',').map((val: string) => val.trim()),
        );
  return {
    formattedDate: formattedDate,
    outputDirectory: flags.output || `data/scans/${formattedDate}`,
    headless: flags.headless,
    // need function to expand preset into list of facets
    facets: [...cleanedFacets, ...presets(<presetType>flags.preset)],
    preset: flags.preset,
    devices: {
      mobile: puppeteer.devices['iPhone 11 Pro'],
      desktop: {
        name: 'Windows Desktop',
        viewport: {
          width: 1920,
          height: 940,
          deviceScaleFactor: 1,
          isMobile: false,
          hasTouch: false,
          isLandscape: true,
        },
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
      },
    },
    browser: await browser(flags.headless),
    authentication: flags.auth,
  };
};

const presets = (preset: presetType): facetType[] => {
  // this can be tightented up to refer to lists of facetTypes
  const presetMap: Record<presetType, facetType[]> = {
    '': [],
    all: [
      'cuiBanner',
      'itPerformanceMetric',
      'lighthouseDesktop',
      'lighthouseMobile',
      'metadataTags',
      'screenshot',
      'searchEngine',
      'siteScanner',
      'uswdsComponents',
    ],
    'edx scan': [
      'itPerformanceMetric',
      'lighthouseDesktop',
      'lighthouseMobile',
      'metadataTags',
      'screenshot',
      'searchEngine',
      'siteScanner',
      'uswdsComponents',
    ],
  };

  return presetMap[preset];
};

const constructBasicAuth = async (): Promise<userCredsType> => {
  const username = await CliUx.ux.prompt('Username');
  const password = await CliUx.ux.prompt('Password', {
    type: 'hide',
  });

  return { username, password };
};

const initialCheck = async function (sh: ScanHelper, url: URL) {
  const scanStatus = { pageFound: true, message: 'Page loaded successfully' };
  const page = await sh.browser.newPage();
  if (sh.authentication) {
    const authCreds = await constructBasicAuth();
    await page.authenticate({
      username: authCreds.username,
      password: authCreds.password,
    });
  }

  await page
    .goto(url.toString(), { waitUntil: 'networkidle2' })
    .catch((error: any) => {
      console.error('Initial check error:', error);
      scanStatus.pageFound = false;
      scanStatus.message = `Initial check error: ${error}`;
    });
  page.close();
  return scanStatus;
};

const buildOutput = async (sh: ScanHelper, websiteReport: WebsiteReport) => {
  const pageHash = await printHash(websiteReport.domain);
  await writeJSONFile(
    websiteReport,
    sh.outputDirectory,
    `${websiteReport.domain}_${sh.formattedDate}_${pageHash}`,
  );
}; /**
 * function accepts any string and transforms to lowercase. The lowercase value is validated against the facetType type.
 * https://stackoverflow.com/questions/43677527/typescript-type-ignore-case#answer-64932909
 * @param {facetType} facet facetType in mixed case
 * @returns {facetType} in lowercase

function acceptAnyCaseFacetType<T extends string>(
  facet: Lowercase<T> extends facetType ? T : facetType,
): facetType {
  return facet.toLowerCase() as facetType;
}
 */

export type ScanHelper = {
  formattedDate: string;
  outputDirectory: string;
  headless: boolean;
  // need function to expand preset into list of facets
  facets: facetType[];
  preset: presetType;
  devices: Record<string, puppeteer.Device>;
  browser: puppeteer.Browser;
  authentication: boolean;
};

export type presetType = '' | 'all' | 'edx scan';

export type facetType =
  | 'cuiBanner'
  | 'itPerformanceMetric'
  | 'lighthouseDesktop'
  | 'lighthouseMobile'
  | 'metadataTags'
  | 'searchEngine'
  | 'screenshot'
  | 'siteScanner'
  | 'uswdsComponents';

export type userCredsType = {
  username: string;
  password: string;
};
