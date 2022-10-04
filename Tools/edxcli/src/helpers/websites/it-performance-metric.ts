import { ScanHelper } from './scan';
import { WebsiteMetadata } from './websites-metadata';

export const itPerfMetricReport = async (
  sh: ScanHelper,
  websiteMetadata: WebsiteMetadata,
): Promise<PerformanceMetricReport> => {
  type PerformanceMetricRegexs = Omit<
    PerformanceMetricReport,
    'description' | 'hsts'
  >;
  const regexs: Record<keyof PerformanceMetricRegexs, RegExDescriptorType> = {
    identifier: {
      regex: /usa-identifier/,
      type: 'other',
    },
    identifierPrivacy: {
      regex:
        /website-information\/website-policies|website-information\/privacy-and-security-notice|portal\/content\/116609/i,
      type: 'link',
      titleRegex: 'Privacy',
    },
    identifierAccessibility: {
      regex:
        /website-information\/accessibility-aids|website-information\/website-policies|portal\/content\/116609/i,
      type: 'link',
    },
    identifierFOIA: {
      regex: /reference\/freedom-of-information-act-foia|\/node\80729/i,
      type: 'link',
    },
    dap: {
      regex: /dap\.digitalgov\.gov\/universal-federated-analytics.*?\.js/i,
      type: 'other',
    },
    search: {
      regex:
        /https:\/\/search.usa.gov\/search|https:\/\/search.gsa.gov\/search|<label.*?>.*?search.*?<\/label>|placeholder=('|")search|aria-label="search.*"|type="search"/i,
      type: 'other',
    },
    banner: {
      regex: /usa-banner/,
      type: 'other',
    },
    contact: {
      regex:
        /contact us|contact|get in touch|email us|email|get support|help desk|send us an email|d+(s|-)d+(s|-)d+|(d+)sd+-d+/i,
      type: 'other',
    },
  };

  const data: PerformanceMetricReport = new PerformanceMetricReport();
  const page = await sh.browser.newPage();
  await page.setCacheEnabled(false);

  if (websiteMetadata.cookies.name !== '') {
    await page.setCookie(websiteMetadata.cookies);
  }

  const response = await page
    .goto(websiteMetadata.completeUrl.toString(), {
      waitUntil: 'networkidle2',
    })
    .catch((error) => {
      console.error('IT Metric error:', error);
    });

  if (response) {
    data.hsts = Object.prototype.hasOwnProperty.call(
      response.headers(),
      'strict-transport-security',
    );
  }

  const content = await page.content();

  // some pages load the content of the identifier at the end, give the page a grace period to see if it all loads
  try {
    await page.waitForSelector('a.usa-identifier__required-link.usa-link', {
      timeout: 10_000,
    });
  } catch (error) {
    console.error(
      'timeout exceeded while waiting for usa-identifier selector - it may not exist',
      error,
    );
  }

  let reqdLinks;
  // loop through the list of regex patterns
  // this needs refactoring, looping through the list of regexs and sending off to the reqdLinkEvaluation is wonky
  for (const regex in regexs) {
    if (Object.prototype.hasOwnProperty.call(regexs, regex)) {
      // test if regex pattern matches page content
      if (regexs[regex as keyof PerformanceMetricRegexs].regex.test(content)) {
        data[regex as keyof PerformanceMetricRegexs] = true;
      } else if (
        regexs[regex as keyof PerformanceMetricRegexs].type === 'link'
      ) {
        console.log(`regex, ${regex} did not find a match`);
        // is there a reqd links array available
        if (typeof reqdLinks === 'undefined') {
          // if not, get it
          // eslint-disable-next-line no-await-in-loop
          reqdLinks = await reqdLinkEvaluation(sh, websiteMetadata.completeUrl);
        }

        // now that you have the array, start looping through it to look for matches
        for (const link in reqdLinks) {
          // eslint-disable-next-line max-depth
          if (
            regexs[regex as keyof PerformanceMetricRegexs].regex.test(
              reqdLinks[link].url,
            )
          ) {
            data[regex as keyof PerformanceMetricRegexs] = true;
            break;
          }
        }
      }

      if (regex === 'search' && !data[regex]) {
        // some websites do not require search per digital council recommendation. Check for sites in websitemetadata to see if searchNotReq is true
        data[regex] = websiteMetadata.searchNotReq;
      }

      // some sites require a custom privacy policy, in that case check to see if a customPrivacyPolicy flag is listed
      if (regex === 'identifierPrivacy' && !data[regex]) {
        // Check for sites in websitemetadata to see if customPrivacyPolicy is true
        data[regex] = websiteMetadata.customPrivacyPolicy;
      }

      // some sites link to a FOIA policy other than the GSA standard, in that case check to see if a customFOIA flag is set
      if (regex === 'identifierFOIA' && !data[regex]) {
        data[regex] = websiteMetadata.customFOIA;
      }
    }
  }

  page.close();
  return data;
};

/**
 * function looks for the identifier on the page and produces a list of links in the identifier. From there, each link is clicked and the resulting page url is reviewed for a match against the required links. This helps address single page applications which do not have hrefs but have onclick()
 *
 * @param {ScanHelper} sh - an instance of the ScanHelper class
 * @param {URL} url - a URL object containing the full url path to test
 * @returns {Promise} linkDestinations - Promise which ultimately returns an array of objects containing {title:"link title", url: "desination page url" }
 */
const reqdLinkEvaluation = async function (sh: ScanHelper, url: URL) {
  /* console.log(
      "...Double checking links to cover single page applications which do not use hrefs"
    ); */
  let i = 0;
  const linkDestinations: Record<string, string>[] = [];
  let reqdLinks = [];
  const page = await sh.browser.newPage();

  await page.setCacheEnabled(false);
  do {
    // eslint-disable-next-line no-await-in-loop
    const beforeClickTabCount = await sh.browser
      .pages()
      .then((value) => value.length);
    const linkDestination = { title: '', url: '' };
    // page navigation has to occur- running this async would interrupt the flow
    // eslint-disable-next-line no-await-in-loop
    await page
      .goto(url.toString(), {
        waitUntil: 'networkidle2',
      })
      .catch((error) => {
        console.error('reqd links error:', error);
      });
    // this list of ElementHandles are auto-disposed when the underlying page gets navigated. https://devdocs.io/puppeteer/#class-elementhandle. For this reason, the ElementHandles have to be re-gathered each time.
    // eslint-disable-next-line no-await-in-loop
    reqdLinks = await page.$$('a.usa-identifier__required-link.usa-link');
    if (reqdLinks.length === 0) {
      return linkDestinations;
    }

    // eslint-disable-next-line no-await-in-loop
    linkDestination.title = await reqdLinks[i].evaluate((node) =>
      node.textContent ? node.textContent : '',
    );

    // eslint-disable-next-line no-await-in-loop
    await Promise.all([
      // page.waitForNavigation({ waitUntil: "domcontentloaded" }),
      // the onclick opens a new page
      reqdLinks[i].click(),
      page.waitForTimeout(1000),
    ]);
    // if the click creates a new tab, identify that here and fetch url from the new tab. Otherwise, fetch from current
    // eslint-disable-next-line no-await-in-loop
    const pages = await sh.browser.pages(); // get all pages
    const page2 = pages[pages.length - 1]; // get the new page
    // this shows the current URL- compare it with the list
    linkDestination.url = page2.url();
    if (pages.length > beforeClickTabCount) {
      // eslint-disable-next-line no-await-in-loop
      await page2.close();
    }

    linkDestinations.push(linkDestination);
    i++;
  } while (i < reqdLinks.length);

  page.close();
  return linkDestinations;
};

export class PerformanceMetricReport implements IPerformanceMetricReport {
  description: string;
  hsts: boolean;
  dap: boolean;
  contact: boolean;
  banner: boolean;
  identifier: boolean;
  identifierAccessibility: boolean;
  identifierFOIA: boolean;
  identifierPrivacy: boolean;
  search: boolean;
  constructor() {
    this.description = 'Represents GSA IT FY22 performance metrics';
    this.hsts = false;
    this.dap = false;
    this.contact = false;
    this.banner = false;
    this.identifier = false;
    this.identifierAccessibility = false;
    this.identifierFOIA = false;
    this.identifierPrivacy = false;
    this.search = false;
  }
}

export interface IPerformanceMetricReport {
  description: string;
  hsts: boolean;
  dap: boolean;
  contact: boolean;
  banner: boolean;
  identifier: boolean;
  identifierAccessibility: boolean;
  identifierFOIA: boolean;
  identifierPrivacy: boolean;
  search: boolean;
}
export type RegExDescriptorType = {
  regex: RegExp;
  type: string;
  titleRegex?: string;
};
