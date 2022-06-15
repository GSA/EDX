import { ScanHelper } from './scan';
import { printHash } from '../global/utils';

export const screenshot = async (
  sh: ScanHelper,
  domain: URL,
): Promise<ScreenshotType[]> => {
  const screenshotArray: ScreenshotType[] = [];
  const page = await sh.browser.newPage();
  page.on('dialog', async (dialog) => {
    await dialog.accept();
  });
  for (const device in sh.devices) {
    if (Object.prototype.hasOwnProperty.call(sh.devices, device)) {
      // eslint-disable-next-line no-await-in-loop
      await page.emulate(sh.devices[device]);
      // eslint-disable-next-line no-await-in-loop
      await page.goto(domain.toString());
      // eslint-disable-next-line no-await-in-loop
      const pageHash = await printHash(domain.toString());
      const imgPath = `${sh.outputDirectory}/${domain.hostname}_${device}_${pageHash}.png`;
      // eslint-disable-next-line no-await-in-loop
      await page.screenshot({
        path: imgPath,
      });

      screenshotArray.push({
        domain: domain.hostname,
        url: domain.toString(),
        imgPath: imgPath,
        device: device,
      });
    }
  }

  await page.close();
  return screenshotArray;
};

export type ScreenshotType = {
  domain: string;
  url: string;
  imgPath: string;
  device: string;
};
