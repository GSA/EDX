import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import { ScanHelper } from './scan';
import { ScreenshotType } from './screenshot';
import { PerformanceMetricReport } from './it-performance-metric';
import { ICuiBanner } from './cui-banner';
import { IMetadataTags } from './metadata-tags';
import { UswdsComponentsReport } from './uswds-components';
import { SiteScannerRecord } from './fetch';
const { version: appVersion } = require('../../../package.json');
/**
 * Represents all data elements in a websiteReport
 * @param domain a valid Node URL object for the site that is being scanned
 * @param sh a ScanHelper object
 * @returns WebsiteReportType
 */
export const websiteReport = (
  domain: URL,
  sh: ScanHelper,
): WebsiteReportType => {
  return {
    scanDate: sh.formattedDate,
    startTime: new Date().toISOString(),
    endTime: '',
    /* over time, the contents of scans will change and should follow semantic versioning principles. Pulling from package.json reduces the total number of manual steps when updating the version number */
    scanVersion: appVersion ?? '',
    domain: domain.hostname,
    url: domain.toString(),
    scanStatus: '',
    screenCapture: {
      description:
        'Holds screenshots of website homepage on both desktop and mobile viewport sizes',
      data: [],
    },
    performanceMetric: {
      description: 'Represents GSA IT FY22 performance metrics',
      hsts: false,
      dap: false,
      contact: false,
      banner: false,
      identifier: false,
      identifierAccessibility: false,
      identifierFOIA: false,
      identifierPrivacy: false,
      search: false,
    },
    cuiBanner: {
      description: `Looks for the CUI warning banner on site and returns a fuzzy match ranking between 0 and 1 where a higher score indicates a closer match. Two variants of the CUI warning banner exist and scores are provided for both the internal and external variants. Specific language can be found in source and CIO 2100.1M, https://www.gsa.gov/cdnstatic/CIO_21001M_GSA_Information_Technology_(IT)_Security_Policy_03-26-2021_CC044215.pdf`,
      data: [],
    },
    uswdsComponents: {
      description:
        'listing each of the USWDS components as a boolean to indicate if the component is present',
      accordion: false,
      alert: false,
      banner: false,
      breadcrumb: false,
      button: false,
      buttonGroup: false,
      card: false,
      characterCount: false,
      checkbox: false,
      collection: false,
      comboBox: false,
      dateInput: false,
      datePicker: false,
      dateRangePicker: false,
      dropdown: false,
      fileInput: false,
      footer: false,
      form: false,
      grid: false,
      header: false,
      icon: false,
      iconList: false,
      identifier: false,
      inputPrefix: false,
      inputSuffix: false,
      link: false,
      list: false,
      modal: false,
      pagination: false,
      processList: false,
      prose: false,
      radioButton: false,
      rangeSlider: false,
      search: false,
      sideNavigation: false,
      siteAlert: false,
      stepIndicator: false,
      summaryBox: false,
      table: false,
      tag: false,
      textInput: false,
      timePicker: false,
      tooltip: false,
      validation: false,
    },
    metadataTags: {
      description: ``,
      data: {
        keywords: [],
      },
    },
    siteScanner: {
      description: '',
      data: {
        /* eslint-disable camelcase */
        scan_date: '',
        target_url_domain: '',
        scan_status: '',
        final_url: '',
        final_url_live: false,
        final_url_domain: '',
        final_url_MIMEType: '',
        final_url_same_domain: false,
        final_url_status_code: 0,
        final_url_same_website: false,
        target_url_404_test: false,
        target_url_redirects: false,
        solutions_scan_status: '',
        uswds_usa_classes: 0,
        uswds_string: 0,
        uswds_tables: 0,
        uswds_inline_css: 0,
        uswds_favicon: 0,
        uswds_string_in_css: 0,
        uswds_favicon_in_css: 0,
        uswds_merriweather_font: 0,
        uswds_publicsans_font: 0,
        uswds_source_sans_font: 0,
        uswds_semantic_version: '',
        uswds_version: 0,
        uswds_count: 0,
        dap_detected_final_url: false,
        dap_parameters_final_url: {},
        og_title_final_url: '',
        og_description_final_url: '',
        og_article_published_final_url: '',
        og_article_modified_final_url: '',
        main_element_present_final_url: false,
        robots_txt_final_url: '',
        robots_txt_final_url_status_code: 0,
        robots_txt_final_url_live: false,
        robots_txt_detected: false,
        robots_txt_final_url_MIMETYPE: '',
        robots_txt_target_url_redirects: false,
        robots_txt_final_url_size_in_bytes: 0,
        robots_txt_crawl_delay: '',
        robots_txt_sitemap_locations: '',
        sitemap_xml_detected: false,
        sitemap_xml_final_url_status_code: 0,
        sitemap_xml_final_url: '',
        sitemap_xml_final_url_live: false,
        sitemap_xml_target_url_redirects: false,
        sitemap_xml_final_url_filesize_in_bytes: 0,
        sitemap_xml_final_url_MIMETYPE: '',
        sitemap_xml_count: 0,
        sitemap_xml_pdf_count: 0,
        third_party_service_domains: [],
        third_party_service_count: 0,
        target_url: '',
        target_url_branch: '',
        target_url_agency_owner: '',
        target_url_agency_code: '',
        target_url_bureau_owner: '',
        target_url_bureau_code: '',
        /* eslint-enable camelcase */
      },
    },
    lighthouse: {
      description:
        'Google Lighthouse outputs for both desktop and mobile devices',
      desktopData: {},
      mobileData: {},
    },
  };
};

export type WebsiteReportType = {
  scanDate: string;
  startTime: string;
  endTime: string;
  /* over time, the contents of scans will change and should follow semantic versioning principles. Pulling from package.json reduces the total number of manual steps when updating the version number */
  scanVersion: string;
  domain: string;
  url: string;
  scanStatus: string;
  screenCapture: ScreenshotReport;
  performanceMetric: PerformanceMetricReport;
  cuiBanner: CuiBannerReport;
  metadataTags: MetadataTagsReport;
  uswdsComponents: UswdsComponentsReport;
  siteScanner: {
    description: string;
    data: SiteScannerRecord;
  };
  lighthouse: {
    description: string;
    desktopData: any;
    mobileData: any;
  };
};

export type ScreenshotReport = {
  description: string;
  data: ScreenshotType[];
};

export type CuiBannerReport = {
  description: string;
  data: ICuiBanner[];
};

export type MetadataTagsReport = {
  description: string;
  data: IMetadataTags;
};
