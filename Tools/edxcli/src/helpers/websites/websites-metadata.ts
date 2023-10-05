import { URL } from 'node:url';

export type IWebsiteAttributes = {
  completeUrl?: URL;
  cookies: Cookies;
  customFOIA: boolean;
  customPrivacyPolicy: boolean;
  notes: string;
  queryString: string;
  searchNotReq: boolean;
  urlPath: string;
  wwwPrefix: string;
};

export interface Cookies {
  name: string;
  domain: string;
  path: string;
  value: string;
}

export class WebsiteMetadata {
  completeUrl: URL;
  cookies: Cookies;
  customFOIA: boolean;
  customPrivacyPolicy: boolean;
  private input: string;
  notes: string;
  private protocol: string;
  private protocollessInput: string;
  searchNotReq: boolean;

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
          `${this.protocol}${md.wwwPrefix}${this.protocollessInput}${md.urlPath}${md.queryString}`,
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
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '?abc=123',
    searchNotReq: true,
    urlPath: '/a/b/c/d',
    wwwPrefix: 'www.',
  },
  '1.usa.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: true,
    urlPath: '',
    wwwPrefix: '',
  },
  '10x.gsa.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: true,
    notes: '',
    queryString: '',
    searchNotReq: false,
    urlPath: '',
    wwwPrefix: '',
  },
  'amp.fas.gsa.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: true,
    urlPath: '',
    wwwPrefix: '',
  },
  'apps.ocfo.gsa.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '?warning=0',
    searchNotReq: true,
    urlPath: '',
    wwwPrefix: '',
  },
  'arm.fas.gsa.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: true,
    urlPath: '',
    wwwPrefix: '',
  },
  'autochoice.fas.gsa.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: true,
    urlPath: '',
    wwwPrefix: '',
  },
  'autovendor.fas.gsa.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: true,
    urlPath: '',
    wwwPrefix: '',
  },
  'cars.fas.gsa.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: true,
    urlPath: '',
    wwwPrefix: '',
  },
  'challenge.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: true,
    notes: '',
    queryString: '',
    searchNotReq: false,
    urlPath: '',
    wwwPrefix: '',
  },
  'cm-jira.usa.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: true,
    urlPath: '',
    wwwPrefix: '',
  },
  'code.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: true,
    notes: '',
    queryString: '',
    searchNotReq: false,
    urlPath: '',
    wwwPrefix: '',
  },
  'extportal.pbs.gsa.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: true,
    urlPath: '',
    wwwPrefix: '',
  },
  'fairs.reporting.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: true,
    urlPath: '',
    wwwPrefix: '',
  },
  'fdms.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: true,
    urlPath: '',
    wwwPrefix: '',
  },
  'federalistapp.18f.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: true,
    urlPath: '',
    wwwPrefix: '',
  },
  'fedpay.gsa.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: true,
    urlPath: '',
    wwwPrefix: '',
  },
  'finance.ocfo.gsa.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '?token=PI001',
    searchNotReq: false,
    urlPath: '/piinotice.aspx',
    wwwPrefix: '',
  },
  'financeweb.gsa.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: true,
    urlPath: '',
    wwwPrefix: '',
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
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: true,
    urlPath: '',
    wwwPrefix: '',
  },
  'fleeteur.fas.gsa.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: true,
    urlPath: '',
    wwwPrefix: '',
  },
  'fms.fas.gsa.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: true,
    urlPath: '',
    wwwPrefix: '',
  },
  'fmseec.fas.gsa.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: false,
    urlPath: '',
    wwwPrefix: '',
  },
  'frpg.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: true,
    urlPath: '',
    wwwPrefix: '',
  },
  'gsa.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: false,
    urlPath: '',
    wwwPrefix: 'www.',
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
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: true,
    urlPath: 'LP=303',
    wwwPrefix: '',
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
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: true,
    urlPath: '',
    wwwPrefix: '',
  },
  'mobile.reginfo.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: true,
    customPrivacyPolicy: true,
    notes: '',
    queryString: '',
    searchNotReq: false,
    urlPath: '/public/',
    wwwPrefix: '',
  },
  'mysales.fas.gsa.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: "It's a login page but with a lot of public content.",
    queryString: '',
    searchNotReq: false,
    urlPath: '',
    wwwPrefix: '',
  },
  'pbs-billing.gsa.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: false,
    urlPath: '/ROW/users/CheckIfUserExists.aspx',
    wwwPrefix: 'www.',
  },
  'phdc-pub.gsa.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: false,
    urlPath: '/vcssregistration/Default.aspx',
    wwwPrefix: '',
  },
  'portal.eos.gsa.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: true,
    urlPath: '',
    wwwPrefix: '',
  },
  'property.reporting.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: true,
    urlPath: '/PPRT/s/',
    wwwPrefix: 'www.',
  },
  'realpropertyprofile.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: true,
    urlPath: '',
    wwwPrefix: '',
  },
  'reginfo.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: true,
    customPrivacyPolicy: true,
    notes: '',
    queryString: '',
    searchNotReq: false,
    urlPath: '/public/',
    wwwPrefix: 'www.',
  },
  'reporting.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: true,
    urlPath: '',
    wwwPrefix: '',
  },
  'rocis.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: true,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: true,
    urlPath: '/rocis/',
    wwwPrefix: 'www.',
  },
  'sat.reginfo.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: false,
    urlPath: '',
    wwwPrefix: '',
  },
  'scopereview.gsa.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: true,
    urlPath: '',
    wwwPrefix: '',
  },
  'secure.login.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: true,
    urlPath: '',
    wwwPrefix: '',
  },
  'sftool.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: true,
    notes: '',
    queryString: '',
    searchNotReq: false,
    urlPath: '',
    wwwPrefix: '',
  },
  'slc.gsa.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: false,
    urlPath: '',
    wwwPrefix: 'www.',
  },
  'str.gsa.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: true,
    urlPath: '',
    wwwPrefix: '',
  },
  'travel.reporting.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: true,
    urlPath: '',
    wwwPrefix: '',
  },
  'tscportal.fas.gsa.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: false,
    urlPath: '',
    wwwPrefix: '',
  },
  'usaccess-alp.gsa.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: true,
    urlPath: '',
    wwwPrefix: '',
  },
  'vec.gsa.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: true,
    urlPath: '',
    wwwPrefix: '',
  },
  'vehicledispatch.fas.gsa.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: true,
    urlPath: '',
    wwwPrefix: '',
  },
  'vote.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: true,
    notes: '',
    queryString: '',
    searchNotReq: false,
    urlPath: '',
    wwwPrefix: '',
  },
  'vltp.gsa.gov': {
    cookies: {
      domain: '',
      name: '',
      path: '',
      value: '',
    },
    customFOIA: false,
    customPrivacyPolicy: false,
    notes: '',
    queryString: '',
    searchNotReq: true,
    urlPath: '',
    wwwPrefix: '',
  },
};

export * from './websites-metadata';
