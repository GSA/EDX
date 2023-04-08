import * as Debug from 'debug';
const debug = Debug.default('edxcli:helpers:airtable');

import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
const AIRTABLE_BASE = 'appaxAzqTVnbOf7cm';
const TABLE = 'WEBSITES';

import Airtable from 'airtable';

const base = new Airtable({
  endpointUrl: 'https://api.airtable.com',
  apiKey: `${process.env.AIRTABLE_API_KEY}`,
}).base(AIRTABLE_BASE);

/**
 * Given a domain name, searches Airtable for a record and returns it. Empty result indicates no record.
 * @param {string} domain string containing the full domain name (gsa.gov, fleet.gsa.gov) without protocol or URL path
 * @returns {Promise<ATListResponseType>} promise of an ATListResponseType object
 */
export function retrieveWebsite(domain: string): Promise<ATListResponseType> {
  debug("Retrieving '%s' website from airtable", domain);
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
 * Returns an array of all websites in the "ALL Sites" view
 * @returns {Promise<ATListResponseType>} promise of an ATListResponseType object
 */
export async function retrieveWebsites(): Promise<any> {
  // must return a promise since the "select" function is promise based. https://ckhang.com/blog/2021/javascript-promises-async-await/
  const viewName = 'ALL Sites';
  debug('Retrieving all websites from %s', viewName);
  return new Promise<any>((resolve, reject) => {
    let dataObject: { [key: string]: Record<string, string> } = {};
    base(TABLE)
      .select({
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
        view: viewName,
      })
      // call to firstPage is valid since we are only expecting one record
      .eachPage(
        function (records, fetchNextPage) {
          dataObject = Object.assign(
            dataObject,
            ...records.map((record) => {
              const obj: any = {};
              const domain: any = record.fields.Site;
              obj[domain] = Object.assign(
                { id: record.id },
                { fields: record.fields },
              );
              return obj;
            }),
          );
          fetchNextPage();
        },
        function (err) {
          if (err) {
            console.error(err);
            reject();
          }

          resolve(dataObject);
        },
      );
  });
}

/**
 * Performs an HTTP PATCH (only updates fields included in request) update against a given Airtable record.
 * @param {ATWebsite[]} data array of ATWebsite objects
 * @returns {Promise<ATWebsite[]>} Promise containing ATWebsite object
 */
export function updateWebsites(data: ATWebsite[]): Promise<any> {
  debug('Updating %d websites in Airtable', data.length);
  return new Promise((resolve, reject) => {
    base(TABLE).update(data, function (error, records) {
      if (error) {
        console.error(error);
        reject();
      }

      resolve(records);
    });
  });
}

/**
 * Creates a new Website record in Airtable.
 * @param {Omit<ATWebsite, 'id'|'createdTime'>[]} newWebsites an ATWebsite object array containing at least the Site field.
 * @returns {Promise<ATWebsite[]>} containing information about the new record
 */
export function createWebsites(
  newWebsites: Omit<ATWebsite, 'id' | 'createdTime'>[],
): Promise<ATWebsite[]> {
  debug('Creating %d websites in airtable', newWebsites.length);
  return new Promise((resolve, reject) => {
    base(TABLE).create(newWebsites, function (err: any, records: any) {
      if (err) {
        console.error(err);
        console.error('Error occured while creating websites:', newWebsites);
        reject();
      }

      resolve(records);
    });
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
