import { ScanHelper } from './scan';
import { WebsiteMetadata } from './websites-metadata';
const lighthouse = require('lighthouse');

export const lighthouseReport = async function (
  sh: ScanHelper,
  websiteMetadata: WebsiteMetadata,
  device: 'desktop' | 'mobile',
): Promise<Record<string, any>> {
  const page = await sh.browser.newPage();
  await page.emulate(sh.devices[device]);
  await page
    .goto(websiteMetadata.completeUrl.toString(), { waitUntil: 'networkidle2' })
    .catch((error) => {
      console.error('Lighthouse error:', error);
    });
  const options = {
    port: new URL(sh.browser.wsEndpoint()).port,
    output: 'json',
  };

  const data: Record<string, any> = await lighthouse(
    websiteMetadata.completeUrl,
    options,
  );
  delete data.lhr.stackPacks;
  delete data.lhr.i18n;
  delete data.lhr.timing;
  delete data.lhr.categoryGroups;
  delete data.artifacts;
  delete data.report;
  page.close();
  return data;
};
