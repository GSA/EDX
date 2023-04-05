import * as Debug from 'debug';
const debug = Debug.default('edxcli:helper:cui-banner');
import { fuzzy } from 'fast-fuzzy';
import { Page } from 'puppeteer';
import { serializeError, ErrorObject } from 'serialize-error';

import { ScanHelper } from './scan';
import { ScanFacetInterface, scanFacetReport } from './scan-facet';
import { WebsiteMetadata } from './websites-metadata';

export class CuiBanner implements ScanFacetInterface {
  scanHelper: ScanHelper;
  websiteMetadata: WebsiteMetadata;
  data: ICuiBanner[] = [];
  error: ErrorObject[] = [];
  bodyContent = '';
  warningBannerInternalMessage = `*****WARNING*****
    This is a U.S. General Services Administration Federal Government computer system
    that is "FOR OFFICIAL USE ONLY." This system is subject to monitoring. Therefore,
    no expectation of privacy is to be assumed. Individuals found performing unauthorized
    activities may be subject to disciplinary action including criminal prosecution.`;

  warninBannerExternalMessage = `*******************************************WARNING********************************************
  This is a U.S. General Services Administration Federal Government computer system
  that is "FOR OFFICIAL USE ONLY." This system is subject to monitoring. Individuals found performing unauthorized
  activities may be subject to disciplinary action including criminal prosecution.`;

  constructor(sh: ScanHelper, websiteMetadata: WebsiteMetadata) {
    this.scanHelper = sh;
    this.websiteMetadata = websiteMetadata;
  }

  async run(): Promise<scanFacetReport> {
    const page = await this.scanHelper.browser.newPage();
    // tell puppeteer to listen for any JS dialog (alert) messages. If any appear, store the message and accept them
    page.on('dialog', async (dialog) => {
      this.bodyContent = dialog.message();
      await dialog.accept();
    });

    // go to the home page
    debug('Navigating to %s', this.websiteMetadata.completeUrl.toString());
    await page.goto(this.websiteMetadata.completeUrl.toString());
    // evaluate for text
    await this.evaluatePage(page, 'home');
    // build an array of links and buttons on the page
    const linkList = await page.$$('a,button');
    const loginTerms = /sign in|login|log in/gi;
    // loop the list of buttons and links to find any containing the regex above
    for (const element of linkList) {
      // eslint-disable-next-line no-await-in-loop
      const valueHandle = await element.getProperty('innerText');

      // when a match is found, click on that element then evaluate the page for warning banner content
      if (loginTerms.test(valueHandle.toString())) {
        // eslint-disable-next-line no-await-in-loop
        await Promise.all([element.click(), page.waitForTimeout(4000)]);

        // eslint-disable-next-line no-await-in-loop
        await this.evaluatePage(page, 'login');
        // once the first page has been evaluated, we break out of the loop
        break;
      }
    }

    await page.close();
    return { data: this.data, error: this.error };
  }

  async evaluatePage(page: Page, pageType: string): Promise<void> {
    try {
      debug('Evaluating url: %s', page.url());
      const bodyHandle = await page.$('body');
      this.bodyContent += await page.evaluate(
        (body) => body.textContent,
        bodyHandle,
      );
      // perform fuzzy search on textcontent
      this.data.push({
        url: page.url(),
        external: fuzzy(this.warninBannerExternalMessage, this.bodyContent),
        internal: fuzzy(this.warningBannerInternalMessage, this.bodyContent),
        pageType: pageType,
      });
    } catch (error) {
      debug('CUI Banner error has occurred %O', error);
      this.error.push(serializeError(error));
    }
  }
}

export interface ICuiBanner {
  url?: URL | string;
  pageType?: string;
  external?: number;
  internal?: number;
}
