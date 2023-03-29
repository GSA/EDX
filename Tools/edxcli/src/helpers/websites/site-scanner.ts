import { ScanFacetInterface, scanFacetReport } from './scan-facet';
import { SiteScannerRecord } from './fetch';
const axios = require('axios').default;
import * as Debug from 'debug';
import { WebsiteMetadata } from './websites-metadata';
import { ScanHelper } from './scan';
import { ErrorObject, serializeError } from 'serialize-error';
const debug = Debug.default('edxcli:site-scanner');

export class SiteScannerReport implements ScanFacetInterface {
  scanHelper: ScanHelper;
  websiteMetadata: WebsiteMetadata;
  data: SiteScannerRecord | Record<string, never> = {};
  error: ErrorObject[] = [];

  constructor(sh: ScanHelper, websiteMetadata: WebsiteMetadata) {
    this.scanHelper = sh;
    this.websiteMetadata = websiteMetadata;
  }

  async run(): Promise<scanFacetReport> {
    debug(
      'Requesting Site Scanner data for: %s',
      this.websiteMetadata.completeUrl.toString(),
    );
    const siteScan = axios.create({
      baseURL: 'https://api.gsa.gov/technology/site-scanning/v1/',
      timeout: 10_000,
      params: { API_KEY: process.env.TOUCHPOINTS_API_KEY },
    });
    const response = await siteScan
      .get(`websites/${this.websiteMetadata.completeUrl.hostname}`)
      .then(function (response: any) {
        return response;
      })
      .catch((error: any) => {
        if (error.response) {
          this.error.push(serializeError(error));
          // report what website, report what was sent
          debug(
            'Site Scanner API Error when requesting: %s',
            this.websiteMetadata.completeUrl.toString(),
          );
          debug(
            'Site Scanner API Error, HTTP Status Code: %s',
            error.response.status,
          );
          debug(
            'Site Scanner API Error, HTTP Response Headers: %O',
            error.response.headers,
          );
          console.error(
            'Site Scanner API Error:\n',
            `>> URL: ${this.websiteMetadata.completeUrl.toString()}\n`,
            `>> HTTP Status Code: ${error.response.status}\n`,
            `>> HTTP Response Headers: ${JSON.stringify(
              error.response.headers,
              null,
              2,
            )}`,
          );
        } else {
          this.error.push(serializeError(error));
          console.error('Site Scanner API Error:', error);
        }
      });

    if (response?.data !== undefined) {
      this.data = response.data;
    }

    return { data: this.data, error: this.error };
  }
}
