import { SiteScannerRecord } from './fetch';
import { WebsiteMetadata } from './websites-metadata';
const axios = require('axios').default;

export const siteScannerReport = async function (
  websiteMetadata: WebsiteMetadata,
): Promise<SiteScannerRecord | void> {
  const siteScan = axios.create({
    baseURL: 'https://api.gsa.gov/technology/site-scanning/v1/',
    timeout: 10_000,
    params: { API_KEY: process.env.TOUCHPOINTS_API_KEY },
  });
  const response = await siteScan
    .get(`websites/${websiteMetadata.domain}`)
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
  if (response && response.status === 200) return response.data;
};
