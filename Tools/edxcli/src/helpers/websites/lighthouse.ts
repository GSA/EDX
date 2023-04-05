const lighthouse = require('lighthouse');
import { ErrorObject, serializeError } from 'serialize-error';
import * as Debug from 'debug';
const debug = Debug.default('edxcli:helper:lighthouse');

import { ScanHelper } from './scan';
import { WebsiteMetadata } from './websites-metadata';
import { ScanFacetInterface, scanFacetReport } from './scan-facet';

export class LighthouseReport implements ScanFacetInterface {
  scanHelper: ScanHelper;
  websiteMetadata: WebsiteMetadata;
  data: Record<string, any> = {};
  error: ErrorObject[] = [];
  device = 'desktop';

  constructor(
    sh: ScanHelper,
    websiteMetadata: WebsiteMetadata,
    options: Record<string, string> | undefined,
  ) {
    this.scanHelper = sh;
    this.websiteMetadata = websiteMetadata;
    this.device = options?.device === undefined ? '' : options.device;
  }

  async run(): Promise<scanFacetReport> {
    debug('Device Type: ', this.device);
    const page = await this.scanHelper.browser.newPage();
    await page.emulate(this.scanHelper.devices[this.device]);
    await page
      .goto(this.websiteMetadata.completeUrl.toString(), {
        waitUntil: 'networkidle2',
      })
      .catch((error) => {
        console.error(
          `Lighthouse facet error using ${this.device} device. Data logged to the resultant json file.`,
        );
        this.error.push(serializeError(error));
      });
    const options = {
      port: new URL(this.scanHelper.browser.wsEndpoint()).port,
      output: 'json',
      disableStorageReset: true,
    };
    debug('Options:', options);
    debug('Pages open:', (await this.scanHelper.browser.pages()).length);

    try {
      this.data = await lighthouse(
        this.websiteMetadata.completeUrl.toString(),
        options,
      );
      delete this.data.lhr.stackPacks;
      delete this.data.lhr.i18n;
      delete this.data.lhr.timing;
      delete this.data.lhr.categoryGroups;
      delete this.data.artifacts;
      delete this.data.report;
    } catch (error) {
      console.error(
        'Lighthouse facet threw an error which has been logged to the resultant json file.',
      );
      this.error.push(serializeError(error));
    }

    page.close();

    return { data: this.data, error: this.error };
  }
}
