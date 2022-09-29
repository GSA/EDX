import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
const axios = require('axios').default;

/**
 * Provides access to Touchpoints and Site Scanner functions
 */
export class FetchHelper {
  formattedDate: string;
  outputDirectory: string;
  touchpoints: any;
  siteScanner: any;

  /// REWORK THIS SO THAT THE SOURCE GETS PASSED AND INSTANTIATES THE CORRECT AND GENERIC 'GETTER'. THIS WILL ENSURE THERE IS A SINGLE FUNCTION TO LOOP THROUGH RESULTS.
  constructor(formattedDate: string, flags: any) {
    this.formattedDate = formattedDate;
    this.outputDirectory = flags.output || '.';
    this.touchpoints = axios.create({
      baseURL: 'https://api.gsa.gov/analytics/touchpoints/v1',
      timeout: 10_000,
      params: {
        API_KEY: process.env.TOUCHPOINTS_API_KEY,
      },
    });
    this.siteScanner = axios.create({
      baseURL: 'https://api.gsa.gov/technology/site-scanning/v1',
      timeout: 10_000,
      params: {
        API_KEY: process.env.TOUCHPOINTS_API_KEY,
        limit: 100,
        // eslint-disable-next-line camelcase
        target_url_agency_owner: 'General Services Administration',
      },
    });
  }

  /**
   * @return {Promise<TouchpointsRecord[]>} Promise containing an array of TouchpointsRecord objects
   * */
  async getTouchpointsWebsites(): Promise<never | TouchpointsRecord[]> {
    const data = this.touchpoints
      .get(`/websites.json?`)
      .then(function (response: any): TouchpointsRecord[] {
        return response.data.data;
      })
      .catch(function (error: any) {
        console.error(error);
      });

    return data;
  }

  /**
   * Iterates through and returns siteScanner results. Can start at a later page number provided a pageNo param
   * @param {number} pageNo - Starting page number of site scanner results. Defaults to 1
   * @return {Promise<TouchpointsRecord[]>} - Promise containing an array of TouchpointsRecord objects
   * */
  async getSiteScannerWebsites(pageNo = 1): Promise<SiteScannerRecord[]> {
    const promisesArray: Promise<SiteScannerRecord>[] = [];
    let next = '';

    do {
      promisesArray.push(
        this.siteScanner
          .get(`/websites?page=${pageNo}`)
          .then(function (this: FetchHelper, response: any) {
            next = response.data.links.next;
            pageNo += 1;
            return response.data.items;
          })
          .catch(function (error: any) {
            console.error(error);
          }),
      );
    } while (next !== '');

    return Promise.all(promisesArray).then((data) => {
      return data;
    });
  }
}

/* eslint-disable camelcase */ //
export type SiteScannerRecord = {
  scan_date: string;
  target_url_domain: string;
  scan_status: string;
  final_url: string;
  final_url_live: boolean;
  final_url_domain: string;
  final_url_MIMEType: string;
  final_url_same_domain: boolean;
  final_url_status_code: number;
  final_url_same_website: boolean;
  target_url_404_test: boolean;
  target_url_redirects: boolean;
  solutions_scan_status: string;
  uswds_usa_classes: number;
  uswds_string: number;
  uswds_tables: number;
  uswds_inline_css: number;
  uswds_favicon: number;
  uswds_string_in_css: number;
  uswds_favicon_in_css: number;
  uswds_merriweather_font: number;
  uswds_publicsans_font: number;
  uswds_source_sans_font: number;
  uswds_semantic_version: string;
  uswds_version: number;
  uswds_count: number;
  dap_detected_final_url: boolean;
  dap_parameters_final_url: Record<string, string>;
  og_title_final_url: string;
  og_description_final_url: string;
  og_article_published_final_url: string;
  og_article_modified_final_url: string;
  main_element_present_final_url: boolean;
  robots_txt_final_url: string;
  robots_txt_final_url_status_code: number;
  robots_txt_final_url_live: boolean;
  robots_txt_detected: boolean;
  robots_txt_final_url_MIMETYPE: string;
  robots_txt_target_url_redirects: boolean;
  robots_txt_final_url_size_in_bytes: number;
  robots_txt_crawl_delay: string;
  robots_txt_sitemap_locations: string;
  sitemap_xml_detected: boolean;
  sitemap_xml_final_url_status_code: number;
  sitemap_xml_final_url: string;
  sitemap_xml_final_url_live: boolean;
  sitemap_xml_target_url_redirects: boolean;
  sitemap_xml_final_url_filesize_in_bytes: number;
  sitemap_xml_final_url_MIMETYPE: string;
  sitemap_xml_count: number;
  sitemap_xml_pdf_count: number;
  third_party_service_domains: string[];
  third_party_service_count: number;
  target_url: string;
  target_url_branch: string;
  target_url_agency_owner: string;
  target_url_agency_code: string;
  target_url_bureau_owner: string;
  target_url_bureau_code: string;
};
/* eslint-enable camelcase */ //
/**
 * @typedef {object} TouchpointsRecord
 * @param {string} id - a unique identifier for the touchpoints website record
 * @param {string} type - record type, will always be website
 * @param {TouchpointsAttributes} attributes - other information about the record.
 */
export type TouchpointsRecord = {
  id: string;
  type: string;
  attributes: TouchpointsAttributes;
};

/* eslint-disable camelcase */ //
export type TouchpointsAttributes = {
  domain: string;
  parent_domain: string;
  office: string;
  sub_office: string;
  contact_email: string;
  site_owner_email: string;
  production_status: string;
  type_of_site: string;
  digital_brand_category: string;
  redirects_to: string;
  status_code: string;
  cms_platform: string;
  required_by_law_or_policy: string;
  has_dap: boolean;
  dap_gtm_code: string;
  analytics_url: string;
  uses_feedback: boolean;
  feedback_tool: string;
  sitemap_url: string;
  mobile_friendly: boolean;
  has_search: boolean;
  uses_tracking_cookies: boolean;
  has_authenticated_experience: boolean;
  authentication_tool: string;
  notes: string;
  repository_url: string;
  hosting_platform: string;
  uswds_version: string;
  https: boolean;
  created_at: string;
  updated_at: string;
};
/* eslint-enable camelcase */ //
