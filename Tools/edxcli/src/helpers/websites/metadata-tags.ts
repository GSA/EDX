import { ScanHelper } from './scan';

export const metadataTags = async (
  sh: ScanHelper,
  domain: URL,
): Promise<IMetadataTags> => {
  let keywordsArray: string[] = [];
  const page = await sh.browser.newPage();
  page.on('dialog', async (dialog) => {
    dialog.message();
    await dialog.accept();
  });

  await page.goto(domain.toString(), {
    waitUntil: 'networkidle2',
  });
  const keywordHandle = await page.$("meta[name='keywords']");
  // some sites don't have keywords set, skip evaluation if that's the case
  if (keywordHandle) {
    keywordsArray = await page
      .evaluate((value) => value.content, keywordHandle)
      .then((keywords) => keywords.split(','));
  }

  page.close();
  return { keywords: keywordsArray };
};

export interface IMetadataTags {
  keywords?: string[];
}
