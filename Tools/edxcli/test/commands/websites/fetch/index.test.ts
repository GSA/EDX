import { expect, test } from '@oclif/test';
import BaseCommand from '../../../../src/base';
import { tmpdir } from 'node:os';
import fs, { mkdtempSync } from 'node:fs';
import { sep } from 'node:path';
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const testingDir = mkdtempSync(`${tmpdir()}${sep}`);

describe('websites fetch', () => {
  describe('websites fetch foo', () => {
    test
      .stdout()
      .command(['websites fetch', 'foo'])
      // catch is used to test expected error messages
      .catch(
        'Expected foo to be one of: Site Scanner, Touchpoints\nSee more help with --help',
      )
      .it('Returns an error message', function () {
        /* do nothing */
      });
  });

  describe('websites fetch Touchpoints', () => {
    /* eslint-disable camelcase */ //
    const data = {
      data: [
        {
          id: '29',
          type: 'websites',
          attributes: {
            domain: 'analytics.usa.gov',
            parent_domain: 'usa.gov',
            office: 'FAS',
            sub_office: 'TTS',
            contact_email: 'analytics.usa.gov@gsa.gov',
            site_owner_email: 'timothy.lowden@gsa.gov',
            production_status: 'production',
            type_of_site: 'Informational',
            digital_brand_category: 'GSA Business',
            redirects_to: '',
            status_code: '200',
            cms_platform: 'Cloud.gov',
            required_by_law_or_policy: 'No',
            has_dap: true,
            dap_gtm_code: '',
            analytics_url: '',
            uses_feedback: false,
            feedback_tool: '',
            sitemap_url: '',
            mobile_friendly: true,
            has_search: false,
            uses_tracking_cookies: false,
            has_authenticated_experience: false,
            authentication_tool: '',
            notes: '',
            repository_url: 'https://github.com/18F/analytics.usa.gov',
            hosting_platform: 'cloud.gov',
            uswds_version: '',
            https: true,
            created_at: '2021-04-21T00:09:23.649Z',
            updated_at: '2022-03-07T21:08:04.567Z',
          },
        },
      ],
    };
    /* eslint-enable camelcase */ //
    describe('No flags', () => {
      test
        .nock('https://api.gsa.gov', (api) =>
          api
            .get(
              `/analytics/touchpoints/v1/websites.json?API_KEY=${process.env.TOUCHPOINTS_API_KEY}`,
            )
            // return website list
            .reply(200, data),
        )
        .stdout()
        .command(['websites fetch', 'Touchpoints'])
        // done is used since the api requests are Promises, this ensures the test suite waits for the response
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .it('Saves the list of domains to the default directory', (done) => {
          (ctx: any) => {
            expect(ctx.stdout).to.match(
              new RegExp(
                'Touchpoints data written to /?.*Touchpoints_' +
                  BaseCommand.formattedDate() +
                  '.csv',
              ),
            );
          };
        });
    });

    describe('Custom output flag', function () {
      test
        .nock('https://api.gsa.gov', (api) =>
          api
            .get(
              `/analytics/touchpoints/v1/websites.json?API_KEY=${process.env.TOUCHPOINTS_API_KEY}`,
            )
            // return website list
            .reply(200, data),
        )
        .stdout()
        .command(['websites fetch', 'Touchpoints', '-o', testingDir])

        .it(
          'Saves the list of domains to a specified directory',
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          function (done) {
            (ctx: any) => {
              expect(ctx.stdout).to.match(
                new RegExp(
                  'Touchpoints data written to ' +
                    testingDir +
                    '/Touchpoints_' +
                    BaseCommand.formattedDate() +
                    '.csv',
                ),
              );
              expect(
                fs.readFileSync(
                  `${testingDir}/Touchpoints_${BaseCommand.formattedDate()}.csv`,
                  { encoding: 'utf8' },
                ),
              ).to.equal(JSON.stringify(data));
            };
          },
        );
    });
  });

  describe('websites fetch "Site Scanner"', () => {
    /* eslint-disable camelcase */ //
    const data = {
      items: [
        {
          scan_date: '2022-03-12T00:28:57.671Z',
          not_found_scan_status: 'unknown_error',
          home_scan_status: 'dns_resolution_error',
          robots_txt_scan_status: 'dns_resolution_error',
          sitemap_xml_scan_status: 'dns_resolution_error',
          not_found_scan_status_unknown_details: '',
          home_scan_status_unknown_details: '',
          robots_txt_scan_status_unknown_details: '',
          sitemap_xml_scan_status_unknown_details: '',
          dns_scan_status: 'completed',
          target_url_domain: 'gsa.gov',
          final_url: null,
          final_url_live: null,
          final_url_domain: null,
          final_url_MIMEType: null,
          final_url_same_domain: null,
          final_url_status_code: null,
          final_url_same_website: null,
          target_url_404_test: null,
          target_url_redirects: null,
          uswds_usa_classes: null,
          uswds_string: null,
          uswds_tables: null,
          uswds_inline_css: null,
          uswds_favicon: null,
          uswds_string_in_css: null,
          uswds_favicon_in_css: null,
          uswds_merriweather_font: null,
          uswds_publicsans_font: null,
          uswds_source_sans_font: null,
          uswds_semantic_version: null,
          uswds_version: null,
          uswds_count: null,
          dap_detected_final_url: null,
          dap_parameters_final_url: null,
          og_title_final_url: null,
          og_description_final_url: null,
          og_article_published_final_url: null,
          og_article_modified_final_url: null,
          main_element_present_final_url: null,
          robots_txt_final_url: null,
          robots_txt_final_url_status_code: null,
          robots_txt_final_url_live: null,
          robots_txt_detected: null,
          robots_txt_final_url_MIMETYPE: null,
          robots_txt_target_url_redirects: null,
          robots_txt_final_url_size_in_bytes: null,
          robots_txt_crawl_delay: null,
          robots_txt_sitemap_locations: null,
          sitemap_xml_detected: null,
          sitemap_xml_final_url_status_code: null,
          sitemap_xml_final_url: null,
          sitemap_xml_final_url_live: null,
          sitemap_xml_target_url_redirects: null,
          sitemap_xml_final_url_filesize_in_bytes: null,
          sitemap_xml_final_url_MIMETYPE: null,
          sitemap_xml_count: null,
          sitemap_xml_pdf_count: null,
          third_party_service_domains: null,
          third_party_service_count: null,
          dns_ipv6: false,
          target_url: '155samfrontenduatcomp.apps.prod-iae.bsp.gsa.gov',
          target_url_branch: 'Federal - Executive',
          target_url_agency_owner: 'General Services Administration',
          target_url_agency_code: null,
          target_url_bureau_owner: 'GSA, IDI, ECAS II',
          target_url_bureau_code: null,
        },
      ],
      meta: {
        totalItems: 1029,
        itemCount: 3,
        itemsPerPage: 3,
        totalPages: 343,
        currentPage: 2,
      },
      links: {
        first: '/websites?limit=3',
        previous: '/websites?page=1&limit=3',
        next: '',
        last: '/websites?page=343&limit=3',
      },
    };
    /* eslint-enable camelcase */ //
    describe('no flags"', () => {
      test
        .nock('https://api.gsa.gov', (api) =>
          api
            .get(
              `/technology/site-scanning/v1/websites?page=1&API_KEY=${process.env.TOUCHPOINTS_API_KEY}&limit=100&target_url_agency_owner=General Services Administration`,
            )
            // user is logged in, return their name
            .reply(200, data),
        )
        .stdout()
        .command(['websites fetch', 'Site Scanner'])
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .it('Saves the list of domains to a directory', (done) => {
          (ctx: any) => {
            expect(ctx.stdout).to.match(
              new RegExp(
                'Site Scanner data written to /?.*Site Scanner_' +
                  BaseCommand.formattedDate() +
                  '.csv',
              ),
            );
          };
        });
    });
    describe('custom output flag"', () => {
      test
        .nock('https://api.gsa.gov', (api) =>
          api
            .get(
              `/technology/site-scanning/v1/websites?page=1&API_KEY=${process.env.TOUCHPOINTS_API_KEY}&limit=100&target_url_agency_owner=General Services Administration`,
            )
            // user is logged in, return their name
            .reply(200, data),
        )
        .stdout()
        .command(['websites fetch', 'Site Scanner', '-o', testingDir])
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .it('Saves the list of domains to a directory', (done) => {
          (ctx: any) => {
            expect(ctx.stdout).to.match(
              new RegExp(
                'Site Scanner data written to ' +
                  testingDir +
                  '/Site Scanner_' +
                  BaseCommand.formattedDate() +
                  '.csv',
              ),
            );
          };
        });
    });
  });
  after((done) => {
    fs.rm(testingDir, { recursive: true }, (err) => {
      if (err) throw err;
    });
    /* unlink(
    `${testingDir}/Site Scanner_${BaseCommand.formattedDate()}.csv`,
    (err) => {
      if (err) throw err;
    },
  ); */
    done();
  });
});
