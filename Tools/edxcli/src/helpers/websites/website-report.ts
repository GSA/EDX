// @ts-check
require('dotenv').config();
import { ScanHelper } from './scan';
import { ScreenshotType } from './screenshot';

/**
 * Represents all data elements in a websiteReport
 */
export const websiteReport = (
  domain: URL,
  sh: ScanHelper,
): WebsiteReportType => {
  return {
    scanDate: sh.formattedDate,
    startTime: new Date().toISOString(),
    endTime: '',
    /* over time, the contents of scans will change and should follow semantic versioning principles. Pulling from package.json reduces the total number of manual steps when updating the version number */
    scanVersion: process.env.npm_package_version,
    domain: domain.hostname,
    url: domain.toString(),
    scanStatus: '',
    screenCapture: {
      description:
        'Holds screenshots of website homepage on both desktop and mobile viewport sizes',
      data: [],
    }
  };
};

export type WebsiteReportType = {
  scanDate: string;
  startTime: string;
  endTime: string;
  /* over time, the contents of scans will change and should follow semantic versioning principles. Pulling from package.json reduces the total number of manual steps when updating the version number */
  scanVersion: string | undefined;
  domain: string;
  url: string;
  scanStatus: string;
  screenCapture: ScreenshotReport;
};

export type ScreenshotReport = {
  description: string;
  data: ScreenshotType[];
};
