import { ScanHelper } from './scan';
import { WebsiteMetadata } from './websites-metadata';
const lighthouse = require('lighthouse');
import * as Debug from 'debug';
import { ScanFacetInterface, scanFacetReport } from './scan-facet';
import { ErrorObject, serializeError } from 'serialize-error';
const debug = Debug.default('edxcli:lighthouse');

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
        console.error('Lighthouse error:', error);
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
      console.error('An error occurred!', error);
      this.error.push(serializeError(error));
    }

    page.close();

    return { data: this.data, error: this.error };
  }
}
