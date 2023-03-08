import { CliUx } from '@oclif/core';
import * as fs from 'node:fs';
import puppeteer from 'puppeteer';

import { browser } from '../../browser';
import { cuiBanner } from './cui-banner';
import { printHash, writeJSONFile } from '../global/utils';
import { itPerfMetricReport } from './it-performance-metric';
import { lighthouseReport } from './lighthouse';
import { metadataTags } from './metadata-tags';
import { screenshot } from './screenshot';
import { siteScannerReport } from './site-scanner';
import { uswdsComponentsReport } from './uswds-components';
import { WebsiteMetadata } from './websites-metadata';
import { WebsiteReportType, websiteReport } from './website-report';

export const scan = async (sh: ScanHelper, domain: string): Promise<void> => {
  const websiteMetadata = new WebsiteMetadata(domain);

  // websiteReport forms the shell that all facets fit into
  const report = websiteReport(websiteMetadata.completeUrl, sh);
  const path = `${sh.outputDirectory}/`;

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

  if (pageFound) {
    if (sh.facets.includes(<facetType>'cuiBanner')) {
      report.cuiBanner.data = await cuiBanner(sh, websiteMetadata.completeUrl);
    }

    if (sh.facets.includes(<facetType>'itPerformanceMetric')) {
      report.itPerformanceMetric = await itPerfMetricReport(
        sh,
        websiteMetadata,
      );
    }

    // 'lighthouse desktop',
    if (isWebsite && sh.facets.includes(<facetType>'lighthouseDesktop')) {
      report.lighthouse.desktopData = await lighthouseReport(
        sh,
        websiteMetadata,
        'desktop',
      );
    }

    // 'lighthouse mobile',
    if (isWebsite && sh.facets.includes(<facetType>'lighthouseMobile')) {
      report.lighthouse.mobileData = await lighthouseReport(
        sh,
        websiteMetadata,
        'mobile',
      );
    }

    if (sh.facets.includes(<facetType>'metadataTags')) {
      report.metadataTags.data = await metadataTags(
        sh,
        websiteMetadata.completeUrl,
      );
    }

    if (sh.facets.includes(<facetType>'screenshot')) {
      report.screenCapture.data = [
        ...report.screenCapture.data,
        ...(await screenshot(sh, websiteMetadata.completeUrl, 'webpage')),
      ];
    }

    if (isWebsite && sh.facets.includes(<facetType>'searchEngine')) {
      const searchEngineURLs = [
        'https://google.com/search?q=',
        'https://www.bing.com/search?q=',
        'https://duckduckgo.com/?q=',
      ];

      for (const item of searchEngineURLs) {
        report.screenCapture.data = [
          ...report.screenCapture.data,
          // eslint-disable-next-line no-await-in-loop
          ...(await screenshot(
            sh,
            new URL(`${item}${websiteMetadata.completeUrl.hostname}`),
            'search engine',
          )),
        ];
      }
    }

    if (isWebsite && sh.facets.includes(<facetType>'siteScanner')) {
      const scanReport = await siteScannerReport(websiteMetadata.completeUrl);
      if (scanReport) report.siteScanner.data = scanReport;
    }

    if (sh.facets.includes(<facetType>'uswdsComponents')) {
      report.uswdsComponents = await uswdsComponentsReport(
        sh,
        websiteMetadata.completeUrl,
      );
    }

    // If Site Scanner returns true for DAP but IT Perf metric does not, overwrite the value
    if (report.siteScanner.data.dap_detected_final_url) {
      report.itPerformanceMetric.dap = true;
    }
  }

  // scan complete
  report.endTime = new Date().toISOString();
  // close the browser
  // sh.browser.close();
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
    .catch((error) => {
      console.error('Initial check error:', error);
      scanStatus.pageFound = false;
      scanStatus.message = `Initial check error: ${error}`;
    });
  page.close();
  return scanStatus;
};

const buildOutput = async (
  sh: ScanHelper,
  websiteReport: WebsiteReportType,
) => {
  const pageHash = await printHash(websiteReport.domain);
  await writeJSONFile(
    websiteReport,
    sh.outputDirectory,
    `${websiteReport.domain}_${sh.formattedDate}_${pageHash}`,
  );
};

const constructBasicAuth = async (): Promise<userCredsType> => {
  const username = await CliUx.ux.prompt('Username');
  const password = await CliUx.ux.prompt('Password', {
    type: 'hide',
  });

  return { username, password };
};

/**
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
