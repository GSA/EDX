import { ScanHelper } from './scan';
import { fuzzy } from 'fast-fuzzy';

export const cuiBanner = async (
  sh: ScanHelper,
  domain: URL,
): Promise<ICuiBanner[]> => {
  const warningBannerInternalMessage = `*****WARNING*****
    This is a U.S. General Services Administration Federal Government computer system
    that is "FOR OFFICIAL USE ONLY." This system is subject to monitoring. Therefore,
    no expectation of privacy is to be assumed. Individuals found performing unauthorized
    activities may be subject to disciplinary action including criminal prosecution.`;
  const warninBannerExternalMessage = `*******************************************WARNING********************************************
  This is a U.S. General Services Administration Federal Government computer system
  that is "FOR OFFICIAL USE ONLY." This system is subject to monitoring. Individuals found performing unauthorized
  activities may be subject to disciplinary action including criminal prosecution.`;
  const warningBanner: ICuiBanner[] = [];

  const page = await sh.browser.newPage();
  // tell puppeteer to listen for any JS dialog (alert) messages. If any appear, store the message and accept them
  let bodyContent = '';
  page.on('dialog', async (dialog) => {
    bodyContent = dialog.message();
    await dialog.accept();
  });
  await page.goto(domain.toString());
  const bodyHandle = await page.$('body');
  bodyContent += await page.evaluate((body) => body.textContent, bodyHandle);
  // perform fuzzy search on textcontent
  warningBanner.push({
    url: domain.toString(),
    external: fuzzy(warninBannerExternalMessage, bodyContent),
    internal: fuzzy(warningBannerInternalMessage, bodyContent),
  });
  await page.close();
  return warningBanner;
};

export interface ICuiBanner {
  url?: URL | string;
  external?: number;
  internal?: number;
}
