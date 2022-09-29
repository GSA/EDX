import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
const AIRTABLE_BASE = 'appaxAzqTVnbOf7cm';
const TABLE = 'WEBSITES';
const base = require('airtable').base(AIRTABLE_BASE);
const Airtable = require('airtable');
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: `${process.env.AIRTABLE_API_KEY}`,
});

/**
 * Given a domain name, searches Airtable for a record and returns it. Empty result indicates no record.
 * @param {string} domain string containing the full domain name (gsa.gov, fleet.gsa.gov) without protocol or URL path
 * @returns {Promise<ATListResponseType>} promise of an ATListResponseType object
 */
export function retrieveWebsite(domain: string): Promise<ATListResponseType> {
  // must return a promise since the "select" function is promise based. https://ckhang.com/blog/2021/javascript-promises-async-await/
  return new Promise<ATListResponseType>((resolve, reject) => {
    base(TABLE)
      .select({
        filterByFormula: `{Site}="${domain}"`,
        fields: [
          'Touchpoints URL',
          'Site',
          'Office',
          'Sub-Office',
          'Prod Status',
          'Type of Domain',
          'Digital Brand Category',
          'Website Platform',
        ],
        view: 'ALL Sites',
      })
      // call to firstPage is valid since we are only expecting one record
      .firstPage(function (err: any, data: any) {
        if (err) {
          console.error(err);
          console.error('Error occured while searching site', data);
          reject();
        }

        resolve({ records: data });
      });
  });
}

/**
 * Performs an HTTP PATCH (only updates fields included in request) update against a given Airtable record.
 * @param {ATWebsite[]} data array of ATWebsite objects
 * @returns {Promise<ATWebsite[]>} Promise containing ATWebsite object
 */
export function updateWebsites(data: ATWebsite[]): Promise<ATWebsite[]> {
  return new Promise((resolve, reject) => {
    base(TABLE).update(data, function (err: any, records: ATWebsite[]) {
      if (err) {
        console.log(err);
        console.log('Error occured while updating website', data);
        reject();
      }

      resolve(records);
    });
  });
}

/**
 * Creates a new Website record in Airtable.
 * @param {ATWebsiteFields} newWebsite an ATWebsiteFields object containing at least the Site field.
 * @returns {Promise<ATWebsite[]>} containing information about the new record
 */
export function createWebsites(
  newWebsite: ATWebsiteFields,
): Promise<ATWebsite[]> {
  return new Promise((resolve, reject) => {
    base(TABLE).create(
      [{ fields: newWebsite }],
      function (err: any, records: ATWebsite[]) {
        if (err) {
          console.error(err);
          console.error('Error occured while creating website', records);
          reject();
        }

        resolve(records);
      },
    );
  });
}

export type ATListResponseType = {
  records: ATWebsite[];
};

export type ATWebsite = {
  id: string;
  createdTime?: Date;
  fields: ATWebsiteFields;
};

export type ATWebsiteFields = {
  Site: string;
  'USWDS, Performance'?: string[];
  Office?: string;
  'Sub-Office'?: string;
  Active?: boolean;
  'Touchpoints URL'?: string;
  'Prod Status'?: string;
  'Type of Domain'?: string;
  'Digital Brand Category'?: string;
  'Website Platform'?: string[];
  'Statuscard Score - Customer Centricity'?: string | number;
  'Statuscard Score - Mobile Performance Rollup (fromUSWDS, Performance)'?:
    | string
    | number;
  'Statuscard Score - AMP'?: string | number;
  'Statuscard Score - GA data'?: string | number;
  'Statuscard Score - USWDS'?: string | number;
  'Statuscard Score - Required Links'?: string | number;
};
