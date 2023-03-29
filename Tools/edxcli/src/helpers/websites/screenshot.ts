import { ScanHelper } from './scan';
import { printHash } from '../global/utils';
import { ScanFacetInterface, scanFacetReport } from './scan-facet';
import { WebsiteMetadata } from './websites-metadata';
import { ErrorObject, serializeError } from 'serialize-error';
import * as Debug from 'debug';
const debug = Debug.default('edxcli:helper:screenshot');

export class Screenshot implements ScanFacetInterface {
  scanHelper: ScanHelper;
  websiteMetadata: WebsiteMetadata;
  type = '';
  data: ScreenshotType[] = [];
  error: ErrorObject[] = [];

  constructor(
    sh: ScanHelper,
    websiteMetadata: WebsiteMetadata,
    options: Record<string, string> | undefined,
  ) {
    this.scanHelper = sh;
    this.websiteMetadata = websiteMetadata;
    this.type = options?.type === undefined ? '' : options.type;
  }

  async run(): Promise<scanFacetReport> {
    const screenshotArray: ScreenshotType[] = [];
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

          screenshotArray.push({
            screenshotType: this.type,
            domain: domain.hostname,
            url: domain.toString(),
            imgPath: imgPath,
            device: device,
          });
        }
      }

      this.data = screenshotArray;
    } catch (error) {
      debug('Screenshot error took place: %O', error);
      console.error(
        'Metadata Tags facet threw an error which has been logged to the resultant json file.',
      );
      this.error.push(serializeError(error));
    }

    await page.close();
    return { data: this.data, error: this.error };
  }
}

export type ScreenshotType = {
  screenshotType: string;
  domain: string;
  url: string;
  imgPath: string;
  device: string;
};
