import puppeteer from 'puppeteer';

export const browser = (headless: boolean): Promise<puppeteer.Browser> => {
  return puppeteer.launch({ headless: headless });
};
