import * as Debug from 'debug';
const debug = Debug.default('edxcli:helper:screenshot');
import { ErrorObject, serializeError } from 'serialize-error';

import { ScanHelper } from './scan';
import { printHash } from '../global/utils';
import { ScanFacetInterface, scanFacetReport } from './scan-facet';
import { WebsiteMetadata } from './websites-metadata';
import _ from 'lodash';

export class Screenshot implements ScanFacetInterface {
  scanHelper: ScanHelper;
  websiteMetadata: WebsiteMetadata;
  type = '';
  engine = '';
  data: any;
  error: ErrorObject[] = [];

  constructor(
    sh: ScanHelper,
    websiteMetadata: WebsiteMetadata,
    options: Record<string, string> | undefined,
  ) {
    this.scanHelper = sh;
    this.websiteMetadata = websiteMetadata;
    this.type = options?.type === undefined ? '' : options.type;
    this.engine = options?.engine === undefined ? '' : options.engine;
  }

  async run(): Promise<scanFacetReport> {
    const domain = this.websiteMetadata.completeUrl;
    const page = await this.scanHelper.browser.newPage();
    page.on('dialog', async (dialog) => {
      await dialog.accept();
    });

    try {
      for (const device in this.scanHelper.devices) {
        if (
          Object.prototype.hasOwnProperty.call(this.scanHelper.devices, device)
        ) {
          debug('Screenshot using %s', device);
          // eslint-disable-next-line no-await-in-loop
          await page.emulate(this.scanHelper.devices[device]);
          // eslint-disable-next-line no-await-in-loop
          await page
            .goto(domain.toString(), { waitUntil: 'networkidle2' })
            .catch((error) => {
              this.error.push(serializeError(error));
              console.error(
                `Screenshot error when capturing with a ${device} device type. Full error output is captured in the resultant JSON file`,
              );
            });

          // eslint-disable-next-line no-await-in-loop
          const pageHash = await printHash(domain.toString());
          const name =
            domain.protocol === 'https:'
              ? domain.hostname
              : domain.pathname.split('/')[
                  domain.pathname.split('/').length - 1
                ];
          const imgPath = `${this.scanHelper.outputDirectory}/${name}_${device}_${pageHash}.png`;
          // eslint-disable-next-line no-await-in-loop
          await page.screenshot({
            path: imgPath,
          });

          // there is a slight difference in structure between webpage screenshots and searchEngine screenshots, this ternary operator handles the inclusion/ exclusion of the this.engine attribute
          const dataObj =
            this.engine === ''
              ? {
                  [this.type]: {
                    [device]: {
                      domain: domain.hostname,
                      url: domain.toString(),
                      imgPath: imgPath,
                    },
                  },
                }
              : {
                  [this.type]: {
                    [this.engine]: {
                      [device]: {
                        domain: domain.hostname,
                        url: domain.toString(),
                        imgPath: imgPath,
                      },
                    },
                  },
                };
          // on the first iteration, this.data is undefined. After though, lodash's merge function is needed
          this.data =
            this.data === undefined ? dataObj : _.merge(this.data, dataObj);
        }
      }
    } catch (error) {
      debug('Screenshot error took place: %O', error);
      console.error(
        'Screenshots facet threw an error which has been logged to the resultant json file.',
      );
      this.error.push(serializeError(error));
    }

    await page.close();
    return { data: this.data, error: this.error };
  }
}

export type ScreenshotType = {
  domain: string;
  url: string;
  imgPath: string;
};
