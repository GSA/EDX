import * as Debug from 'debug';
const debug = Debug.default('edxcli:browser');
import puppeteer from 'puppeteer';

export const browser = (headless: boolean): Promise<puppeteer.Browser> => {
  debug('Headless mode: %s', headless);
  return puppeteer.launch({ headless: headless });
};
