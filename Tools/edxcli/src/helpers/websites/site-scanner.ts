import { SiteScannerRecord } from './fetch';
const axios = require('axios').default;
import * as Debug from 'debug';
const debug = Debug.default('edxcli:site-scanner');

export const siteScannerReport = async function (
  url: URL,
): Promise<SiteScannerRecord | void> {
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
        console.error(
          'Site Scanner API Error:\n',
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
  debug('%j', response.data);
  if (response && response.status === 200) return response.data;
};
