import { SiteScannerRecord } from './fetch';
const axios = require('axios').default;
import * as Debug from 'debug';
const debug = Debug.default('edxcli:site-scanner');

export const siteScannerReport = async function (
  url: URL,
): Promise<SiteScannerRecord | void> {
  debug('Requesting Site Scanner data for: %s', url.toString());
  const siteScan = axios.create({
    baseURL: 'https://api.gsa.gov/technology/site-scanning/v1/',
    timeout: 10_000,
    params: { API_KEY: process.env.TOUCHPOINTS_API_KEY },
  });
  const response = await siteScan
    .get(`websites/${url.hostname}`)
    .then(function (response: any) {
      return response;
    })
    .catch(function (error: any) {
      if (error.response) {
        // report what website, report what was sent
        debug('Site Scanner API Error when requesting: %s', url.toString());
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
          `>> URL: ${url.toString()}\n`,
          `>> HTTP Status Code: ${error.response.status}\n`,
          `>> HTTP Response Headers: ${JSON.stringify(
            error.response.headers,
            null,
            2,
          )}`,
        );
      } else {
        console.error('Site Scanner API Error:', error);
      }
    });
  debug('Site Scanner API response data: %j', response.data);
  if (response && response.status === 200) return response.data;
};
