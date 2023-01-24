import { URL } from 'node:url';

export type IWebsiteAttributes = {
  cookies: Cookies;
  customFOIA: boolean;
  customPrivacyPolicy: boolean;
  searchNotReq: boolean;
  wwwPrefix: string;
  queryString: string;
  urlPath: string;
  notes: string;
  completeUrl?: URL;
};

export interface Cookies {
  name: string;
  value: string;
  domain: string;
  path: string;
}

export class WebsiteMetadata {
  cookies: Cookies;
  customFOIA: boolean;
  customPrivacyPolicy: boolean;
  searchNotReq: boolean;
  private protocol: string;
  private protocollessInput: string;
  notes: string;
  private input: string;
  completeUrl: URL;

  constructor(input: string) {
    // eval if file/https
    // lookup metadata
    // construct URL

    this.protocol = input.startsWith('file://') ? 'file://' : 'https://';
    this.input = input;
    this.protocollessInput = input.replace(
      /(http:\/\/|https:\/\/|file:\/\/)/,
      '',
    );
    const md = this.getWebsiteMetadata();
    this.cookies = md.cookies;
    this.customFOIA = md.customFOIA;
    this.customPrivacyPolicy = md.customPrivacyPolicy;
    this.searchNotReq = md.searchNotReq;
    this.notes = md.notes;
    this.completeUrl = this.constructUrl(md);
  }

  /**
   * Given a domain name, returns a fully constructed URL with any necessary subdomain prefixes, url paths, or query strings
   * @param md {W}
   * @returns url {URL}
   */
  constructUrl(md: IWebsiteAttributes): URL {
    return this.protocol === 'file://'
      ? new URL(`${this.protocol}${this.protocollessInput}`)
      : new URL(
          `${this.protocol}${md.wwwPrefix}${this.input}${md.urlPath}${md.queryString}`,
        );
  }

  /**
   * Given a list of websites and a domain name, returns a WebsiteMetadata object. If no record was found, an empty object is returned.
   * @param domain {string} a bare domain such as "gsa.gov" or "something.gsa.gov". Protocol (http) or url path (/do/something) are not applicable.
   * @returns {WebsiteMetadata} object
   */
  getWebsiteMetadata(): IWebsiteAttributes {
    return Object.prototype.hasOwnProperty.call(data, this.input)
      ? data[this.input]
      : emptyWebsiteMetadata();
  }
}

/**
 * Returns an empty WebsiteMetadata object
 * @returns {IWebsiteAttributes} with blank and false values
 */
const emptyWebsiteMetadata = function (): IWebsiteAttributes {
  return {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: false,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  };
};

const data: Record<string, IWebsiteAttributes> = {
  TEMPLATE: {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: 'www.',
    queryString: '?abc=123',
    urlPath: '/a/b/c/d',
    notes: '',
  },
  '1.usa.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  '10x.gsa.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: true,
    searchNotReq: false,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'amp.fas.gsa.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'apps.ocfo.gsa.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '?warning=0',
    urlPath: '',
    notes: '',
  },
  'arm.fas.gsa.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'autochoice.fas.gsa.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'autovendor.fas.gsa.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'cars.fas.gsa.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'cm-jira.usa.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'code.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: true,
    searchNotReq: false,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'extportal.pbs.gsa.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'fairs.reporting.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'fdms.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'federalistapp.18f.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'fedpay.gsa.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'financeweb.gsa.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'find.search.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '?utf8=✓&affiliate=usasearch&query=example',
    urlPath: '/search',
    notes:
      'find.search.gov/ redirects to search.gov while /search+querystring yeilds results',
  },
  'fleet.fas.gsa.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'fleeteur.fas.gsa.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'fms.fas.gsa.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'fmseec.fas.gsa.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: false,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'frpg.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'gsa.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: false,
    wwwPrefix: 'www.',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'gsaadvantage.gov': {
    cookies: {
      name: 'QSI_SI_bxYHdkLDIHcniGp_intercept',
      value: 'true',
      domain: 'www.gsaadvantage.gov',
      path: '/',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: false,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'gsasolutionssecure.gsa.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '',
    urlPath: 'LP=303',
    notes: '',
  },
  'inventory.data.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes:
      'A number of internal links appear on home but all require login before navigating',
  },
  'login.fr.cloud.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'mobile.reginfo.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: true,
    customPrivacyPolicy: true,
    searchNotReq: false,
    wwwPrefix: '',
    queryString: '',
    urlPath: '/public/',
    notes: '',
  },
  'mysales.fas.gsa.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: false,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: "It's a login page but with a lot of public content.",
  },
  'pbs-billing.gsa.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: false,
    wwwPrefix: 'www.',
    queryString: '',
    urlPath: '/users/CheckIfUserExists.aspx',
    notes: '',
  },
  'phdc-pub.gsa.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: false,
    wwwPrefix: '',
    queryString: '',
    urlPath: '/vcssregistration/Default.aspx',
    notes: '',
  },
  'portal.eos.gsa.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'property.reporting.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: 'www.',
    queryString: '',
    urlPath: '/PPRT/s/',
    notes: '',
  },
  'realpropertyprofile.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'reginfo.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: true,
    customPrivacyPolicy: true,
    searchNotReq: false,
    wwwPrefix: 'www.',
    queryString: '',
    urlPath: '/public/',
    notes: '',
  },
  'reporting.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'rocis.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: true,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: 'www.',
    queryString: '',
    urlPath: '/rocis/',
    notes: '',
  },
  'sat.reginfo.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: false,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'scopereview.gsa.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'secure.login.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'sftool.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: true,
    searchNotReq: false,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'slc.gsa.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: false,
    wwwPrefix: 'www.',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'str.gsa.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'travel.reporting.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'tscportal.fas.gsa.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: false,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'usaccess-alp.gsa.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'vec.gsa.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'vehicledispatch.fas.gsa.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'vote.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: true,
    searchNotReq: false,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
  'vltp.gsa.gov': {
    cookies: { name: '', value: '', domain: '', path: '' },
    customFOIA: false,
    customPrivacyPolicy: false,
    searchNotReq: true,
    wwwPrefix: '',
    queryString: '',
    urlPath: '',
    notes: '',
  },
};

export * from './websites-metadata';
