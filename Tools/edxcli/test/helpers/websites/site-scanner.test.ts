import { expect, test } from '@oclif/test';
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { WebsiteMetadata } from '../../../src/helpers/websites/websites-metadata';
import { ScanHelper, scanHelper } from '../../../src/helpers/websites/scan';
import {
  createScanFacet,
  scanFacetReport,
} from '../../../src/helpers/websites/scan-facet';
import { SiteScannerReport } from '../../../src/helpers/websites/site-scanner';
dotenv.config();

describe('Site Scanner (single website)', () => {
  const date = new Date();
  const formattedDate = `${date.getFullYear()}${
    date.getMonth() < 9 ? '0' : ''
  }${date.getMonth() + 1}${date.getDate() < 10 ? '0' : ''}${date.getDate()}`;
  let websiteMetadata: WebsiteMetadata;
  let sh: ScanHelper;
  let data: scanFacetReport['data'];
  const validSite = 'fai.gov';
  const invalidSite = 'varkmogelgesang.gov';
  /* eslint-disable camelcase */
  const siteScannerHappy = {
    scan_date: '2023-04-15T01:14:14.385Z',
    not_found_scan_status: 'completed',
    primary_scan_status: 'completed',
    robots_txt_scan_status: 'completed',
    sitemap_xml_scan_status: 'completed',
    dns_scan_status: 'completed',
    target_url_domain: 'fai.gov',
    final_url: 'https://www.fai.gov/',
    final_url_live: true,
    final_url_domain: 'fai.gov',
    final_url_mimetype: 'text/html',
    final_url_same_domain: true,
    final_url_status_code: 200,
    final_url_same_website: false,
    target_url_404_test: true,
    target_url_redirects: true,
    uswds_usa_classes: 60,
    uswds_string: 17,
    uswds_inline_css: 1,
    uswds_favicon: 20,
    uswds_string_in_css: 20,
    uswds_favicon_in_css: 0,
    uswds_publicsans_font: 0,
    uswds_semantic_version: null,
    uswds_version: 0,
    uswds_count: 118,
    dap_detected_final_url: true,
    dap_parameters_final_url: {
      agency: 'GSA',
      subagency: 'GSA/OGP',
    },
    og_title_final_url: null,
    og_description_final_url: null,
    og_article_published_final_url: null,
    og_article_modified_final_url: null,
    main_element_present_final_url: true,
    robots_txt_final_url: 'https://www.fai.gov/robots.txt',
    robots_txt_final_url_status_code: 200,
    robots_txt_final_url_live: true,
    robots_txt_detected: true,
    robots_txt_final_url_mimetype: 'text/plain',
    robots_txt_target_url_redirects: true,
    robots_txt_final_url_filesize_in_bytes: 1706,
    robots_txt_crawl_delay: null,
    robots_txt_sitemap_locations: null,
    sitemap_xml_detected: false,
    sitemap_xml_final_url_status_code: 404,
    sitemap_xml_final_url: 'https://www.fai.gov/sitemap.xml',
    sitemap_xml_final_url_live: false,
    sitemap_xml_target_url_redirects: true,
    sitemap_xml_final_url_filesize_in_bytes: null,
    sitemap_xml_final_url_mimetype: 'text/html',
    sitemap_xml_count: null,
    sitemap_xml_pdf_count: null,
    third_party_service_domains: [
      'dap.digitalgov.gov',
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'googleads.g.doubleclick.net',
      'i.ytimg.com',
      'jnn-pa.googleapis.com',
      'static.doubleclick.net',
      'stats.g.doubleclick.net',
      'www.google-analytics.com',
      'www.google.com',
      'www.googletagmanager.com',
      'www.gstatic.com',
      'www.youtube.com',
      'yt3.ggpht.com',
    ],
    third_party_service_count: 14,
    dns_ipv6: false,
    login_detected: null,
    dns_hostname: null,
    final_url_website: 'www.fai.gov',
    cloud_dot_gov_pages: false,
    canonical_link: 'https://www.fai.gov/home',
    cms: null,
    hsts: true,
    target_url: 'fai.gov',
    target_url_branch: 'Executive',
    target_url_agency_owner: 'General Services Administration',
    target_url_bureau_owner: 'GSA, IC, FAI',
    source_list_federal_domains: true,
    source_list_dap: true,
    source_list_pulse: true,
    source_list_other: false,
  };
  const siteScannerEmpty = {};

  before(async () => {
    sh = await scanHelper(formattedDate, {
      domains: '',
      preset: '',
      headless: true,
      auth: false,
    });
  });
  test
    .nock('https://api.gsa.gov', (api) =>
      api
        .get(
          `/technology/site-scanning/v1/websites/${validSite}?API_KEY=${process.env.TOUCHPOINTS_API_KEY}`,
        )
        .reply(200, siteScannerHappy),
    )
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .it('returns data for a valid site', async (done) => {
      websiteMetadata = new WebsiteMetadata(validSite);
      ({ data } = await createScanFacet(
        SiteScannerReport,
        sh,
        websiteMetadata,
      ).run());
      sh.browser.close();
      expect(data).to.deep.equal(siteScannerHappy);
    });

  test
    .nock('https://api.gsa.gov', (api) =>
      api
        .get(
          `/technology/site-scanning/v1/websites/${invalidSite}?API_KEY=${process.env.TOUCHPOINTS_API_KEY}`,
        )
        .reply(200, siteScannerEmpty),
    )
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .it('returns an empty object for an invalid site', async (done) => {
      websiteMetadata = new WebsiteMetadata(invalidSite);
      ({ data } = await createScanFacet(
        SiteScannerReport,
        sh,
        websiteMetadata,
      ).run());
      sh.browser.close();
      expect(data).to.deep.equal(siteScannerEmpty);
    });
});
