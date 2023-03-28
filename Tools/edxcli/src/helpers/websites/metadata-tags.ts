import { serializeError, ErrorObject } from 'serialize-error';

import { ScanHelper } from './scan';
import { ScanFacetInterface, scanFacetReport } from './scan-facet';
import { WebsiteMetadata } from './websites-metadata';

import * as Debug from 'debug';
const debug = Debug.default('edxcli:helper:websitesmetadata-tags');

export class MetadataTags implements ScanFacetInterface {
  scanHelper: ScanHelper;
  websiteMetadata: WebsiteMetadata;
  data: unknown = {};
  error: ErrorObject[] = [];

  constructor(sh: ScanHelper, websiteMetadata: WebsiteMetadata) {
    this.scanHelper = sh;
    this.websiteMetadata = websiteMetadata;
  }

  async run(): Promise<scanFacetReport> {
    let keywordsArray: string[] = [];
    const page = await this.scanHelper.browser.newPage();
    page.on('dialog', async (dialog) => {
      dialog.message();
      await dialog.accept();
    });

    try {
      await page
        .goto(this.websiteMetadata.completeUrl.toString(), {
          waitUntil: 'networkidle2',
        })
        .catch((error) => {
          debug(error);
          this.error.push(serializeError(error));
          console.error(
            'Metadata Tags facet threw an error which has been logged to the resultant json file.',
          );
        });
      const keywordHandle = await page.$("meta[name='keywords']");
      // some sites don't have keywords set, skip evaluation if that's the case
      if (keywordHandle) {
        keywordsArray = await page
          .evaluate((value) => value.content, keywordHandle)
          .then((keywords) =>
            keywords.split(',').map((item: string) => {
              return item.trim();
            }),
          );
      }

      debug('%d keywords found', keywordsArray.length);

      this.data = { keywords: keywordsArray };
    } catch (error) {
      debug(error);
      this.error.push(serializeError(error));
    }

    await page.close();
    return { data: this.data, error: this.error };
  }
}

export interface IMetadataTags {
  keywords?: string[];
}
