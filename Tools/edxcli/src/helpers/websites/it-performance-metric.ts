import { serializeError, ErrorObject } from 'serialize-error';
import * as Debug from 'debug';
const debug = Debug.default('edxcli:helper:it-performance-metric');

import { ScanHelper } from './scan';
import { WebsiteMetadata } from './websites-metadata';
import { ScanFacetInterface, scanFacetReport } from './scan-facet';
type PerformanceMetricRegexs = Omit<
  PerformanceMetricReport,
  'description' | 'hsts'
>;

export class ItPerfMetricReport implements ScanFacetInterface {
  scanHelper: ScanHelper;
  websiteMetadata: WebsiteMetadata;
  data: PerformanceMetricReport;
  error: ErrorObject[] = [];
  regexs: Record<keyof PerformanceMetricRegexs, RegExDescriptorType> = {
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
        /([^"#'-.]|^)contact|feedback|get in touch|email us|email|get support|help desk|send us an email|d+(s|-)d+(s|-)d+|(d+)sd+-d+/i,
      type: 'other',
    },
  };

  constructor(sh: ScanHelper, websiteMetadata: WebsiteMetadata) {
    this.scanHelper = sh;
    this.websiteMetadata = websiteMetadata;
    this.data = new PerformanceMetricReport();
  }

  async run(): Promise<scanFacetReport> {
    const page = await this.scanHelper.browser.newPage();
    debug(
      'Number pages open: %s',
      (await this.scanHelper.browser.pages()).length,
    );
    await page.setCacheEnabled(false);

    if (this.websiteMetadata.cookies.name !== '') {
      await page.setCookie(this.websiteMetadata.cookies);
    }

    const response = await page
      .goto(this.websiteMetadata.completeUrl.toString(), {
        waitUntil: 'networkidle2',
      })
      .catch((error) => {
        this.error.push(serializeError(error));
        debug(
          'Error trying to go to: %s',
          this.websiteMetadata.completeUrl.toString(),
        );
        debug('IT Metric error: %O', error);
        console.error(
          'IT Performance Metric facet threw an error which has been logged to the resultant json file.',
        );
      });
    debug('Response status %s', response?.status);
    debug('Response headers %O', response?.headers);
    debug('Request headers %O', response?.request);
    if (response) {
      this.data.hsts = Object.prototype.hasOwnProperty.call(
        response.headers(),
        'strict-transport-security',
      );
    }

    const content = await page.content();

    // some pages load the content of the identifier at the end, give the page a grace period to see if it all loads
    try {
      await page.waitForSelector('a.usa-identifier__required-link.usa-link', {
        timeout: 5000,
      });
    } catch {
      console.log(
        'timeout exceeded while waiting for usa-identifier selector - it may not exist',
      );
    }

    let reqdLinks;
    // loop through the list of regex patterns
    // this needs refactoring, looping through the list of regexs and sending off to the reqdLinkEvaluation is wonky
    for (const regex in this.regexs) {
      if (Object.prototype.hasOwnProperty.call(this.regexs, regex)) {
        // test if regex pattern matches page content
        if (
          this.regexs[regex as keyof PerformanceMetricRegexs].regex.test(
            content,
          )
        ) {
          this.data[regex as keyof PerformanceMetricRegexs] = true;
        } else if (
          this.regexs[regex as keyof PerformanceMetricRegexs].type === 'link'
        ) {
          debug('regex, %s did not find a match', regex);
          // is there a reqd links array available
          if (typeof reqdLinks === 'undefined') {
            // if not, get it
            // eslint-disable-next-line no-await-in-loop
            reqdLinks = await this.reqdLinkEvaluation(
              this.scanHelper,
              this.websiteMetadata.completeUrl,
            );
          }

          // now that you have the array, start looping through it to look for matches
          for (const link in reqdLinks) {
            // eslint-disable-next-line max-depth
            if (
              this.regexs[regex as keyof PerformanceMetricRegexs].regex.test(
                reqdLinks[link].url,
              )
            ) {
              this.data[regex as keyof PerformanceMetricRegexs] = true;
              break;
            }
          }
        }

        if (regex === 'search' && !this.data[regex]) {
          // some websites do not require search per digital council recommendation. Check for sites in websitemetadata to see if searchNotReq is true
          this.data[regex] = this.websiteMetadata.searchNotReq;
        }

        // some sites require a custom privacy policy, in that case check to see if a customPrivacyPolicy flag is listed
        if (regex === 'identifierPrivacy' && !this.data[regex]) {
          // Check for sites in websitemetadata to see if customPrivacyPolicy is true
          this.data[regex] = this.websiteMetadata.customPrivacyPolicy;
        }

        // some sites link to a FOIA policy other than the GSA standard, in that case check to see if a customFOIA flag is set
        if (regex === 'identifierFOIA' && !this.data[regex]) {
          this.data[regex] = this.websiteMetadata.customFOIA;
        }
      }
    }

    debug('IT Perf Metric data: %O', this.data);
    page.close();
    return { data: this.data, error: this.error };
  }

  /**
   * function looks for the identifier on the page and produces a list of links in the identifier. From there, each link is clicked and the resulting page url is reviewed for a match against the required links. This helps address single page applications which do not have hrefs but have onclick()
   *
   * @param {ScanHelper} sh - an instance of the ScanHelper class
   * @param {URL} url - a URL object containing the full url path to test
   * @returns {Promise} linkDestinations - Promise which ultimately returns an array of objects containing {title:"link title", url: "desination page url" }
   */
  reqdLinkEvaluation = async function (
    sh: ScanHelper,
    url: URL,
  ): Promise<Record<string, string>[]> {
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
      // eslint-disable-next-line no-await-in-loop
      debug('%s%', 'Pages open (in loop):', (await sh.browser.pages()).length);
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

    debug('%s%', 'Pages open end of loop:', (await sh.browser.pages()).length);
    page.close();
    return linkDestinations;
  };
}

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
