import * as Debug from 'debug';
const debug = Debug.default('edxcli:helpers:global:utils');

import { ATWebsiteFields } from '../airtable';
import fs from 'node:fs';
import { URL } from 'node:url';
import crypto from 'node:crypto';
const hash = crypto.createHash('md5');

/**
 * Uses GSA Digital Council guidelines to determine whether this is a site that counts towards performance goals
 * @param {ATWebsiteFields} data record for evaluation
 * @returns {boolean} whether the site is included in performance metrics
 */
export function isCountedSite(data: ATWebsiteFields): boolean {
  debug('Checking if %s is a counted website', data.Site);
  return (
    (data['Digital Brand Category'] === 'Hybrid' ||
      data['Digital Brand Category'] === 'GSA Business') &&
    (data['Prod Status'] === 'production' ||
      data['Prod Status'] === 'archived') &&
    (data['Type of Domain'] === 'Informational' ||
      data['Type of Domain'] === 'Application' ||
      data['Type of Domain'] === 'Application Login')
  );
}

/**
 * Given a JSON object, writes contents to a file
 * @param {any[] | any} jsObject valid js object
 * @param {string} path desired output path
 * @param {string} filename description of the data to be written.
 * @param {string} date if provided, prepends todays date to the file name e.g., {todays date}_filename.json
 * @return {void}
 */
export const writeJSONFile = async (
  jsObject: any[] | any,
  path: string,
  filename: string,
  date?: string,
): Promise<void> => {
  debug('Writing json file to %s', path);
  path = path.endsWith('/') ? path : `${path}/`;
  fs.mkdirSync(path, { recursive: true });
  date = date ? `${date}_` : '';
  fs.writeFileSync(`${path}/${date}${filename}.json`, JSON.stringify(jsObject));
};

/**
 * Constructs a url consisting of scheme, subdomain, domain, tld, path, and query string
 * @param {string} domain - a domain name with or without protocol (http,https)
 * @returns {URL} node URL
 */
export const createHttpsUrl = async function (domain: string): Promise<URL> {
  debug('Creating URL with https:// for %s', domain);
  const regex = /(http:\/\/|https:\/\/)/;
  // strip out http/https if it exists
  domain = domain.replace(regex, '');

  return new URL(`https://${domain}`);
};

/**
 * Given text input, returns a MD5 Hexidecimal hash
 * @param {string} text any string to hash
 * @returns {string} as an MD5 Hexidecimal hash
 */
export const printHash = async function (text: string): Promise<string> {
  debug('Constructing a hash for input text: %s', text);
  hash.update(text);
  return hash.copy().digest('hex');
};
