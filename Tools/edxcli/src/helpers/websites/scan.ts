import puppeteer from 'puppeteer';
import * as fs from 'node:fs';
import { browser } from '../../browser';
import { printHash, writeJSONFile } from '../global/utils';
import { WebsiteReportType, websiteReport } from './website-report';
import { screenshot } from './screenshot';

export const scan = async (sh: ScanHelper, domain: URL): Promise<void> => {
  // websiteReport forms the shell that all facets fit into
  const report = websiteReport(domain, sh);
  const path = `${sh.outputDirectory}/`;

  // create the directory
  fs.mkdir(path, { recursive: true }, function (dirErr: any) {
    if (dirErr) {
      console.error(dirErr);
    }
  });
  if (sh.facets.includes(<facetType>'screenshot')) {
    report.screenCapture.data = await screenshot(sh, domain);
  }

  // scan complete
  report.endTime = new Date().toISOString();
  // write the report
  await buildOutput(sh, report);
};

export const scanHelper = async (
  formattedDate: string,
  flags: any,
): Promise<ScanHelper> => {
  const cleanedFacets = flags.facets === '' ? [] : flags.facets.split(',');
  return {
    formattedDate: formattedDate,
    outputDirectory: flags.output || `data/${formattedDate}`,
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
  };
};

const presets = (preset: presetType): facetType[] => {
  // this can be tightented up to refer to lists of facetTypes
  const presetMap: Record<presetType, facetType[]> = {
    '': [],
    all: [
      'screenshot',
      'lighthouse desktop',
      'lighthouse mobile',
      'it performance metric',
      'site scanner',
      'uswds components',
    ],
    'edx scan': [
      'screenshot',
      'lighthouse desktop',
      'lighthouse mobile',
      'it performance metric',
      'site scanner',
      'uswds components',
    ],
  };

  return presetMap[preset];
};

const buildOutput = async (
  sh: ScanHelper,
  websiteReport: WebsiteReportType,
) => {
  const pageHash = await printHash(websiteReport.url);
  await writeJSONFile(
    websiteReport,
    sh.outputDirectory,
    `${websiteReport.domain}_${sh.formattedDate}_${pageHash}`,
  );
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
};

export type presetType = '' | 'all' | 'edx scan';

export type facetType =
  | 'screenshot'
  | 'lighthouse desktop'
  | 'lighthouse mobile'
  | 'it performance metric'
  | 'site scanner'
  | 'uswds components';
