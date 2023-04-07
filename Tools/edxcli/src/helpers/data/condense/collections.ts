import { compare } from 'compare-versions';
import * as Debug from 'debug';
const debug = Debug.default('edxcli:helper:condense:collections');

export type CollectionType = {
  [presetName: string]: Version;
};

export type Version = {
  [version: string]: CsvHeaderType[];
};

export type CsvHeaderType = {
  id: string;
  jsonPath: string;
  title: string;
};

// The version numbers follow NPM packaging version number specifications. See https://github.com/omichelsen/compare-versions for more examples of valid versions which may include: <, >, ~, ^ etc
export const collections: CollectionType = {
  default: {
    '0.0.1': [
      { id: 'domain', jsonPath: 'domain', title: 'Domain' },
      { id: 'url', jsonPath: 'url', title: 'URL' },
      { id: 'scanDate', jsonPath: 'scanDate', title: 'Scan Date' },
      { id: 'scanVersion', jsonPath: 'scanVersion', title: 'Scan Version' },
      { id: 'scanStatus', jsonPath: 'scanStatus', title: 'Scan Status' },
      {
        id: 'pmHsts',
        jsonPath: 'performanceMetric.hsts',
        title: 'HSTS',
      },
      {
        id: 'pmDap',
        jsonPath: 'performanceMetric.dap',
        title: 'Digital Analytics (DAP)',
      },
      {
        id: 'pmContact',
        jsonPath: 'performanceMetric.contact',
        title: 'Contact',
      },
      {
        id: 'pmBanner',
        jsonPath: 'performanceMetric.banner',
        title: 'USA Banner',
      },
      {
        id: 'pmIdentifier',
        jsonPath: 'performanceMetric.identifier',
        title: 'Identifier',
      },
      {
        id: 'pmIdentifierAccessibility',
        jsonPath: 'performanceMetric.identifierAccessibility',
        title: 'Accessibility Link',
      },
      {
        id: 'pmIdentifierFOIA',
        jsonPath: 'performanceMetric.identifierFOIA',
        title: 'FOIA Link',
      },
      {
        id: 'pmIdentifierPrivacy',
        jsonPath: 'performanceMetric.identifierPrivacy',
        title: 'Privacy Policy Link',
      },
      {
        id: 'pmSearch',
        jsonPath: 'performanceMetric.search',
        title: 'Search',
      },
      {
        id: 'siteScannerScanDate',
        jsonPath: 'siteScanner.data.scan_date',
        title: 'Site Scanner Date',
      },
      {
        id: 'siteScannerUSWDSClasses',
        jsonPath: 'siteScanner.data.uswds_usa_classes',
        title: 'USA Class Count',
      },
      {
        id: 'siteScannerUSWDSSemVer',
        jsonPath: 'siteScanner.data.uswds_semantic_version',
        title: 'USWDS Version',
      },
      {
        id: 'siteScannerUSWDSAccordion',
        jsonPath: 'uswdsComponents.accordion',
        title: 'USWDS Accordion',
      },
      {
        id: 'siteScannerUSWDSAlert',
        jsonPath: 'uswdsComponents.alert',
        title: 'USWDS Alert',
      },
      {
        id: 'siteScannerUSWDSButton',
        jsonPath: 'uswdsComponents.button',
        title: 'USWDS Button',
      },
      {
        id: 'siteScannerUSWDSCard',
        jsonPath: 'uswdsComponents.card',
        title: 'USWDS Card',
      },
      {
        id: 'siteScannerUSWDSFooter',
        jsonPath: 'uswdsComponents.footer',
        title: 'USWDS Footer',
      },
      {
        id: 'siteScannerUSWDSHeader',
        jsonPath: 'uswdsComponents.header',
        title: 'USWDS Header',
      },
      {
        id: 'lighthouse.desktopData.lhr.categories.performance.score',
        jsonPath: 'lighthouse.desktopData.lhr.categories.performance.score',
        title: '(D) Performance Score',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['speed-index'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['speed-index'].score",
        title: '(D) Speed Index',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['content-width'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['content-width'].score",
        title: '(D) Content Width Score',
      },
      {
        id: 'lighthouse.desktopData.lhr.categories.seo.score',
        jsonPath: 'lighthouse.desktopData.lhr.categories.seo.score',
        title: '(D) SEO Score',
      },
      {
        id: 'lighthouse.mobileData.lhr.categories.performance.score',
        jsonPath: 'lighthouse.mobileData.lhr.categories.performance.score',
        title: '(M) Performance Score',
      },
      {
        id: "lighthouse.mobileData.lhr.audits['speed-index'].score",
        jsonPath: "lighthouse.mobileData.lhr.audits['speed-index'].score",

        title: '(M) Speed Index Score',
      },
      {
        id: "lighthouse.mobileData.lhr.audits['content-width'].score",
        jsonPath: "lighthouse.mobileData.lhr.audits['content-width'].score",
        title: '(M) Content Width Score',
      },
      {
        id: 'lighthouse.mobileData.lhr.categories.seo.score',
        jsonPath: 'lighthouse.mobileData.lhr.categories.seo.score',
        title: '(M) SEO Score',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['content-width'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['content-width'].score",

        title: 'Page Content Width Set',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['meta-viewport'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['meta-viewport'].score",

        title: 'Meta Viewport Set',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['meta-description'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['meta-description'].score",

        title: 'Meta Description Set',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['document-title'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['document-title'].score",

        title: 'Document Title Set',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['html-has-lang'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['html-has-lang'].score",

        title: 'HTML Language Set',
      },
    ],
    '1.0.0': [
      { id: 'domain', jsonPath: 'domain', title: 'Domain' },
      { id: 'url', jsonPath: 'url', title: 'URL' },
      { id: 'scanDate', jsonPath: 'scanDate', title: 'Scan Date' },
      { id: 'scanVersion', jsonPath: 'scanVersion', title: 'Scan Version' },
      { id: 'scanStatus', jsonPath: 'scanStatus', title: 'Scan Status' },
      {
        id: 'pmHsts',
        jsonPath: 'performanceMetric.hsts',
        title: 'HSTS',
      },
      {
        id: 'pmDap',
        jsonPath: 'performanceMetric.dap',
        title: 'Digital Analytics (DAP)',
      },
      {
        id: 'pmContact',
        jsonPath: 'performanceMetric.contact',
        title: 'Contact',
      },
      {
        id: 'pmBanner',
        jsonPath: 'performanceMetric.banner',
        title: 'USA Banner',
      },
      {
        id: 'pmIdentifier',
        jsonPath: 'performanceMetric.identifier',
        title: 'Identifier',
      },
      {
        id: 'pmIdentifierAccessibility',
        jsonPath: 'performanceMetric.identifierAccessibility',
        title: 'Accessibility Link',
      },
      {
        id: 'pmIdentifierFOIA',
        jsonPath: 'performanceMetric.identifierFOIA',
        title: 'FOIA Link',
      },
      {
        id: 'pmIdentifierPrivacy',
        jsonPath: 'performanceMetric.identifierPrivacy',
        title: 'Privacy Policy Link',
      },
      {
        id: 'pmSearch',
        jsonPath: 'performanceMetric.search',
        title: 'Search',
      },
      {
        id: 'siteScannerScanDate',
        jsonPath: 'siteScanner.data.scan_date',
        title: 'Site Scanner Date',
      },
      {
        id: 'siteScannerUSWDSClasses',
        jsonPath: 'siteScanner.data.uswds_usa_classes',
        title: 'USA Class Count',
      },
      {
        id: 'siteScannerUSWDSSemVer',
        jsonPath: 'siteScanner.data.uswds_semantic_version',
        title: 'USWDS Version',
      },
      {
        id: 'siteScannerUSWDSAccordion',
        jsonPath: 'uswdsComponents.accordion',
        title: 'USWDS Accordion',
      },
      {
        id: 'siteScannerUSWDSAlert',
        jsonPath: 'uswdsComponents.alert',
        title: 'USWDS Alert',
      },
      {
        id: 'siteScannerUSWDSButton',
        jsonPath: 'uswdsComponents.button',
        title: 'USWDS Button',
      },
      {
        id: 'siteScannerUSWDSCard',
        jsonPath: 'uswdsComponents.card',
        title: 'USWDS Card',
      },
      {
        id: 'siteScannerUSWDSFooter',
        jsonPath: 'uswdsComponents.footer',
        title: 'USWDS Footer',
      },
      {
        id: 'siteScannerUSWDSHeader',
        jsonPath: 'uswdsComponents.header',
        title: 'USWDS Header',
      },
      {
        id: 'lighthouse.desktopData.lhr.categories.performance.score',
        jsonPath: 'lighthouse.desktopData.lhr.categories.performance.score',
        title: '(D) Performance Score',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['speed-index'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['speed-index'].score",
        title: '(D) Speed Index',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['content-width'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['content-width'].score",
        title: '(D) Content Width Score',
      },
      {
        id: 'lighthouse.desktopData.lhr.categories.seo.score',
        jsonPath: 'lighthouse.desktopData.lhr.categories.seo.score',
        title: '(D) SEO Score',
      },
      {
        id: 'lighthouse.mobileData.lhr.categories.performance.score',
        jsonPath: 'lighthouse.mobileData.lhr.categories.performance.score',
        title: '(M) Performance Score',
      },
      {
        id: "lighthouse.mobileData.lhr.audits['speed-index'].score",
        jsonPath: "lighthouse.mobileData.lhr.audits['speed-index'].score",

        title: '(M) Speed Index Score',
      },
      {
        id: "lighthouse.mobileData.lhr.audits['content-width'].score",
        jsonPath: "lighthouse.mobileData.lhr.audits['content-width'].score",
        title: '(M) Content Width Score',
      },
      {
        id: 'lighthouse.mobileData.lhr.categories.seo.score',
        jsonPath: 'lighthouse.mobileData.lhr.categories.seo.score',
        title: '(M) SEO Score',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['content-width'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['content-width'].score",

        title: 'Page Content Width Set',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['meta-viewport'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['meta-viewport'].score",

        title: 'Meta Viewport Set',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['meta-description'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['meta-description'].score",

        title: 'Meta Description Set',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['document-title'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['document-title'].score",

        title: 'Document Title Set',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['html-has-lang'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['html-has-lang'].score",

        title: 'HTML Language Set',
      },
    ],
  },
  gearScans: {
    '0.0.1': [
      { id: 'domain', jsonPath: 'domain', title: 'Domain' },
      { id: 'scanDate', jsonPath: 'scanDate', title: 'Scan Date' },
      { id: 'scanVersion', jsonPath: 'scanVersion', title: 'Scan Version' },
      {
        id: 'screenshotDesktopImgPath',
        jsonPath: 'screenCapture.data[1].imgPath',
        title: 'Desktop Image',
      },
      {
        id: 'screenshotMobileImgPath',
        jsonPath: 'screenCapture.data[0].imgPath',
        title: 'image',
      },
    ],
    '1.0.0': [
      { id: 'domain', jsonPath: 'domain', title: 'Domain' },
      { id: 'scanDate', jsonPath: 'scanDate', title: 'Scan Date' },
      { id: 'scanVersion', jsonPath: 'scanVersion', title: 'Scan Version' },
      {
        id: 'screenshotDesktopImgPath',
        jsonPath: 'reports.screenshot.data.webpage.desktop.imgPath',
        title: 'Desktop Image',
      },

      {
        id: 'screenshotMobileImgPath',
        jsonPath: 'reports.screenshot.data.webpage.mobile.imgPath',
        title: 'Mobile Image',
      },
    ],
  },
  lighthouseAccessibility: {
    '0.0.1': [
      { id: 'domain', jsonPath: 'domain', title: 'Domain' },
      { id: 'url', jsonPath: 'url', title: 'URL' },
      { id: 'scanDate', jsonPath: 'scanDate', title: 'Scan Date' },
      { id: 'scanVersion', jsonPath: 'scanVersion', title: 'Scan Version' },
      { id: 'scanStatus', jsonPath: 'scanStatus', title: 'Scan Status' },
      {
        id: 'pmHsts',
        jsonPath: 'performanceMetric.hsts',
        title: 'HSTS',
      },
      {
        id: 'pmDap',
        jsonPath: 'performanceMetric.dap',
        title: 'Digital Analytics (DAP)',
      },
      {
        id: 'pmContact',
        jsonPath: 'performanceMetric.contact',
        title: 'Contact',
      },
      {
        id: 'pmBanner',
        jsonPath: 'performanceMetric.banner',
        title: 'USA Banner',
      },
      {
        id: 'pmIdentifier',
        jsonPath: 'performanceMetric.identifier',
        title: 'Identifier',
      },
      {
        id: 'pmIdentifierAccessibility',
        jsonPath: 'performanceMetric.identifierAccessibility',
        title: 'Accessibility Link',
      },
      {
        id: 'pmIdentifierFOIA',
        jsonPath: 'performanceMetric.identifierFOIA',
        title: 'FOIA Link',
      },
      {
        id: 'pmIdentifierPrivacy',
        jsonPath: 'performanceMetric.identifierPrivacy',
        title: 'Privacy Policy Link',
      },
      {
        id: 'pmSearch',
        jsonPath: 'performanceMetric.search',
        title: 'Search',
      },
      {
        id: 'siteScannerScanDate',
        jsonPath: 'siteScanner.data.scan_date',
        title: 'Site Scanner Date',
      },
      {
        id: 'siteScannerUSWDSClasses',
        jsonPath: 'siteScanner.data.uswds_usa_classes',
        title: 'USA Class Count',
      },
      {
        id: 'siteScannerUSWDSSemVer',
        jsonPath: 'siteScanner.data.uswds_semantic_version',
        title: 'USWDS Version',
      },
      {
        id: 'siteScannerUSWDSAccordion',
        jsonPath: 'uswdsComponents.accordion',
        title: 'USWDS Accordion',
      },
      {
        id: 'siteScannerUSWDSAlert',
        jsonPath: 'uswdsComponents.alert',
        title: 'USWDS Alert',
      },
      {
        id: 'siteScannerUSWDSButton',
        jsonPath: 'uswdsComponents.button',
        title: 'USWDS Button',
      },
      {
        id: 'siteScannerUSWDSCard',
        jsonPath: 'uswdsComponents.card',
        title: 'USWDS Card',
      },
      {
        id: 'siteScannerUSWDSFooter',
        jsonPath: 'uswdsComponents.footer',
        title: 'USWDS Footer',
      },
      {
        id: 'siteScannerUSWDSHeader',
        jsonPath: 'uswdsComponents.header',
        title: 'USWDS Header',
      },
      {
        id: 'lighthouse.desktopData.lhr.categories.performance.score',
        jsonPath: 'lighthouse.desktopData.lhr.categories.performance.score',
        title: '(D) Performance Score',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['speed-index'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['speed-index'].score",
        title: '(D) Speed Index',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['content-width'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['content-width'].score",
        title: '(D) Content Width Score',
      },
      {
        id: 'lighthouse.desktopData.lhr.categories.seo.score',
        jsonPath: 'lighthouse.desktopData.lhr.categories.seo.score',
        title: '(D) SEO Score',
      },
      {
        id: 'lighthouse.mobileData.lhr.categories.performance.score',
        jsonPath: 'lighthouse.mobileData.lhr.categories.performance.score',
        title: '(M) Performance Score',
      },
      {
        id: "lighthouse.mobileData.lhr.audits['speed-index'].score",
        jsonPath: "lighthouse.mobileData.lhr.audits['speed-index'].score",
        title: '(M) Speed Index Score',
      },
      {
        id: "lighthouse.mobileData.lhr.audits['content-width'].score",
        jsonPath: "lighthouse.mobileData.lhr.audits['content-width'].score",
        title: '(M) Content Width Score',
      },
      {
        id: 'lighthouse.mobileData.lhr.categories.seo.score',
        jsonPath: 'lighthouse.mobileData.lhr.categories.seo.score',
        title: '(M) SEO Score',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['content-width'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['content-width'].score",
        title: 'Page Content Width Set',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['meta-viewport'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['meta-viewport'].score",
        title: 'Meta Viewport Set',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['meta-description'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['meta-description'].score",
        title: 'Meta Description Set',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['document-title'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['document-title'].score",
        title: 'Document Title Set',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['html-has-lang'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['html-has-lang'].score",
        title: 'HTML Language Set',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['aria-allowed-attr'].score",
        jsonPath:
          "lighthouse.desktopData.lhr.audits['aria-allowed-attr'].score",
        title: 'LH Cat Aria Allowed Attr',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['aria-hidden-body'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['aria-hidden-body'].score",
        title: 'LH Cat Aria Hidden Body',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['aria-hidden-focus'].score",
        jsonPath:
          "lighthouse.desktopData.lhr.audits['aria-hidden-focus'].score",
        title: 'LH Cat Aria Hidden Focus',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['aria-required-attr'].score",
        jsonPath:
          "lighthouse.desktopData.lhr.audits['aria-required-attr'].score",
        title: 'LH Cat Aria Required Attr',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['aria-roles'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['aria-roles'].score",
        title: 'LH Cat Aria Roles',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['aria-valid-attr-value'].score",
        jsonPath:
          "lighthouse.desktopData.lhr.audits['aria-valid-attr-value'].score",
        title: 'LH Cat Aria Valid Attr Value',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['aria-valid-attr'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['aria-valid-attr'].score",
        title: 'LH Cat Aria Valid Attr',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['button-name'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['button-name'].score",
        title: 'LH Cat Button Name',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['bypass'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['bypass'].score",
        title: 'LH Cat Bypass',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['color-contrast'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['color-contrast'].score",
        title: 'LH Cat Color Contrast',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['document-title'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['document-title'].score",
        title: 'LH Cat Document Title',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['duplicate-id-aria'].score",
        jsonPath:
          "lighthouse.desktopData.lhr.audits['duplicate-id-aria'].score",
        title: 'LH Cat Duplicate ID Aria',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['heading-order'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['heading-order'].score",
        title: 'LH Cat Heading Order',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['html-has-lang'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['html-has-lang'].score",
        title: 'LH Cat HTML Has Lang',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['html-lang-valid'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['html-lang-valid'].score",
        title: 'LH Cat HTML Lang Valid',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['image-alt'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['image-alt'].score",
        title: 'LH Cat Image Alt',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['link-name'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['link-name'].score",
        title: 'LH Cat Link Name',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['list'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['list'].score",
        title: 'LH Cat List',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['listitem'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['listitem'].score",
        title: 'LH Cat Listitem',
      },
      {
        id: "lighthouse.desktopData.lhr.audits['meta-viewport'].score",
        jsonPath: "lighthouse.desktopData.lhr.audits['meta-viewport'].score",
        title: 'LH Cat Meta Viewport',
      },
    ],
  },
  uswds: {
    '0.0.1': [
      { id: 'domain', jsonPath: 'domain', title: 'Domain' },
      { id: 'url', jsonPath: 'url', title: 'URL' },
      { id: 'scanDate', jsonPath: 'scanDate', title: 'Scan Date' },
      { id: 'scanVersion', jsonPath: 'scanVersion', title: 'Scan Version' },
      { id: 'scanStatus', jsonPath: 'scanStatus', title: 'Scan Status' },
      {
        id: 'uswdsComponentsAccordion',
        jsonPath: 'uswdsComponents.accordion',
        title: 'accordion',
      },
      {
        id: 'uswdsComponentsAlert',
        jsonPath: 'uswdsComponents.alert',
        title: 'alert',
      },
      {
        id: 'uswdsComponentsBanner',
        jsonPath: 'uswdsComponents.banner',
        title: 'banner',
      },
      {
        id: 'uswdsComponentsBreadcrumb',
        jsonPath: 'uswdsComponents.breadcrumb',
        title: 'breadcrumb',
      },
      {
        id: 'uswdsComponentsButton',
        jsonPath: 'uswdsComponents.button',
        title: 'button',
      },
      {
        id: 'uswdsComponentsButtonGroup',
        jsonPath: 'uswdsComponents.buttonGroup',
        title: 'buttonGroup',
      },
      {
        id: 'uswdsComponentsCard',
        jsonPath: 'uswdsComponents.card',
        title: 'card',
      },
      {
        id: 'uswdsComponentsCharacterCount',
        jsonPath: 'uswdsComponents.characterCount',
        title: 'characterCount',
      },
      {
        id: 'uswdsComponentsCheckbox',
        jsonPath: 'uswdsComponents.checkbox',
        title: 'checkbox',
      },
      {
        id: 'uswdsComponentsCollection',
        jsonPath: 'uswdsComponents.collection',
        title: 'collection',
      },
      {
        id: 'uswdsComponentsComboBox',
        jsonPath: 'uswdsComponents.comboBox',
        title: 'comboBox',
      },
      {
        id: 'uswdsComponentsDateInput',
        jsonPath: 'uswdsComponents.dateInput',
        title: 'dateInput',
      },
      {
        id: 'uswdsComponentsDatePicker',
        jsonPath: 'uswdsComponents.datePicker',
        title: 'datePicker',
      },
      {
        id: 'uswdsComponentsDateRangePicker',
        jsonPath: 'uswdsComponents.dateRangePicker',
        title: 'dateRangePicker',
      },
      {
        id: 'uswdsComponentsDropdown',
        jsonPath: 'uswdsComponents.dropdown',
        title: 'dropdown',
      },
      {
        id: 'uswdsComponentsFileInput',
        jsonPath: 'uswdsComponents.fileInput',
        title: 'fileInput',
      },
      {
        id: 'uswdsComponentsFooter',
        jsonPath: 'uswdsComponents.footer',
        title: 'footer',
      },
      {
        id: 'uswdsComponentsForm',
        jsonPath: 'uswdsComponents.form',
        title: 'form',
      },
      {
        id: 'uswdsComponentsGrid',
        jsonPath: 'uswdsComponents.grid',
        title: 'grid',
      },
      {
        id: 'uswdsComponentsHeader',
        jsonPath: 'uswdsComponents.header',
        title: 'header',
      },
      {
        id: 'uswdsComponentsIcon',
        jsonPath: 'uswdsComponents.icon',
        title: 'icon',
      },
      {
        id: 'uswdsComponentsIconList',
        jsonPath: 'uswdsComponents.iconList',
        title: 'iconList',
      },
      {
        id: 'uswdsComponentsIdentifier',
        jsonPath: 'uswdsComponents.identifier',
        title: 'identifier',
      },
      {
        id: 'uswdsComponentsInputPrefix',
        jsonPath: 'uswdsComponents.inputPrefix',
        title: 'inputPrefix',
      },
      {
        id: 'uswdsComponentsInputSuffix',
        jsonPath: 'uswdsComponents.inputSuffix',
        title: 'inputSuffix',
      },
      {
        id: 'uswdsComponentsLink',
        jsonPath: 'uswdsComponents.link',
        title: 'link',
      },
      {
        id: 'uswdsComponentsList',
        jsonPath: 'uswdsComponents.list',
        title: 'list',
      },
      {
        id: 'uswdsComponentsModal',
        jsonPath: 'uswdsComponents.modal',
        title: 'modal',
      },
      {
        id: 'uswdsComponentsPagination',
        jsonPath: 'uswdsComponents.pagination',
        title: 'pagination',
      },
      {
        id: 'uswdsComponentsProcessList',
        jsonPath: 'uswdsComponents.processList',
        title: 'processList',
      },
      {
        id: 'uswdsComponentsProse',
        jsonPath: 'uswdsComponents.prose',
        title: 'prose',
      },
      {
        id: 'uswdsComponentsRadioButton',
        jsonPath: 'uswdsComponents.radioButton',
        title: 'radioButton',
      },
      {
        id: 'uswdsComponentsRangeSlider',
        jsonPath: 'uswdsComponents.rangeSlider',
        title: 'rangeSlider',
      },
      {
        id: 'uswdsComponentsSearch',
        jsonPath: 'uswdsComponents.search',
        title: 'search',
      },
      {
        id: 'uswdsComponentsSideNav',
        jsonPath: 'uswdsComponents.sideNavigation',
        title: 'sideNavigation',
      },
      {
        id: 'uswdsComponentsSiteAlert',
        jsonPath: 'uswdsComponents.siteAlert',
        title: 'siteAlert',
      },
      {
        id: 'uswdsComponentsStepIndicator',
        jsonPath: 'uswdsComponents.stepIndicator',
        title: 'stepIndicator',
      },
      {
        id: 'uswdsComponentsSummaryBox',
        jsonPath: 'uswdsComponents.summaryBox',
        title: 'summaryBox',
      },
      {
        id: 'uswdsComponentsTable',
        jsonPath: 'uswdsComponents.table',
        title: 'table',
      },
      {
        id: 'uswdsComponentsTag',
        jsonPath: 'uswdsComponents.tag',
        title: 'tag',
      },
      {
        id: 'uswdsComponentsTextInput',
        jsonPath: 'uswdsComponents.textInput',
        title: 'textInput',
      },
      {
        id: 'uswdsComponentsTimePicker',
        jsonPath: 'uswdsComponents.timePicker',
        title: 'timePicker',
      },
      {
        id: 'uswdsComponentsTooltip',
        jsonPath: 'uswdsComponents.tooltip',
        title: 'tooltip',
      },
      {
        id: 'uswdsComponentsValidation',
        jsonPath: 'uswdsComponents.validation',
        title: 'validation',
      },
    ],
    '1.0.0': [
      { id: 'domain', jsonPath: 'domain', title: 'Domain' },
      { id: 'url', jsonPath: 'url', title: 'URL' },
      { id: 'scanDate', jsonPath: 'scanDate', title: 'Scan Date' },
      { id: 'scanVersion', jsonPath: 'scanVersion', title: 'Scan Version' },
      { id: 'scanStatus', jsonPath: 'scanStatus', title: 'Scan Status' },
      {
        id: 'uswdsComponentsAccordion',
        jsonPath: 'uswdsComponents.data.accordion',
        title: 'accordion',
      },
      {
        id: 'uswdsComponentsAlert',
        jsonPath: 'uswdsComponents.data.alert',
        title: 'alert',
      },
      {
        id: 'uswdsComponentsBanner',
        jsonPath: 'uswdsComponents.data.banner',
        title: 'banner',
      },
      {
        id: 'uswdsComponentsBreadcrumb',
        jsonPath: 'uswdsComponents.data.breadcrumb',
        title: 'breadcrumb',
      },
      {
        id: 'uswdsComponentsButton',
        jsonPath: 'uswdsComponents.data.button',
        title: 'button',
      },
      {
        id: 'uswdsComponentsButtonGroup',
        jsonPath: 'uswdsComponents.data.buttonGroup',
        title: 'buttonGroup',
      },
      {
        id: 'uswdsComponentsCard',
        jsonPath: 'uswdsComponents.data.card',
        title: 'card',
      },
      {
        id: 'uswdsComponentsCharacterCount',
        jsonPath: 'uswdsComponents.data.characterCount',
        title: 'characterCount',
      },
      {
        id: 'uswdsComponentsCheckbox',
        jsonPath: 'uswdsComponents.data.checkbox',
        title: 'checkbox',
      },
      {
        id: 'uswdsComponentsCollection',
        jsonPath: 'uswdsComponents.data.collection',
        title: 'collection',
      },
      {
        id: 'uswdsComponentsComboBox',
        jsonPath: 'uswdsComponents.data.comboBox',
        title: 'comboBox',
      },
      {
        id: 'uswdsComponentsDateInput',
        jsonPath: 'uswdsComponents.data.dateInput',
        title: 'dateInput',
      },
      {
        id: 'uswdsComponentsDatePicker',
        jsonPath: 'uswdsComponents.data.datePicker',
        title: 'datePicker',
      },
      {
        id: 'uswdsComponentsDateRangePicker',
        jsonPath: 'uswdsComponents.data.dateRangePicker',
        title: 'dateRangePicker',
      },
      {
        id: 'uswdsComponentsDropdown',
        jsonPath: 'uswdsComponents.data.dropdown',
        title: 'dropdown',
      },
      {
        id: 'uswdsComponentsFileInput',
        jsonPath: 'uswdsComponents.data.fileInput',
        title: 'fileInput',
      },
      {
        id: 'uswdsComponentsFooter',
        jsonPath: 'uswdsComponents.data.footer',
        title: 'footer',
      },
      {
        id: 'uswdsComponentsForm',
        jsonPath: 'uswdsComponents.data.form',
        title: 'form',
      },
      {
        id: 'uswdsComponentsGrid',
        jsonPath: 'uswdsComponents.data.grid',
        title: 'grid',
      },
      {
        id: 'uswdsComponentsHeader',
        jsonPath: 'uswdsComponents.data.header',
        title: 'header',
      },
      {
        id: 'uswdsComponentsIcon',
        jsonPath: 'uswdsComponents.data.icon',
        title: 'icon',
      },
      {
        id: 'uswdsComponentsIconList',
        jsonPath: 'uswdsComponents.data.iconList',
        title: 'iconList',
      },
      {
        id: 'uswdsComponentsIdentifier',
        jsonPath: 'uswdsComponents.data.identifier',
        title: 'identifier',
      },
      {
        id: 'uswdsComponentsInputPrefix',
        jsonPath: 'uswdsComponents.data.inputPrefix',
        title: 'inputPrefix',
      },
      {
        id: 'uswdsComponentsInputSuffix',
        jsonPath: 'uswdsComponents.data.inputSuffix',
        title: 'inputSuffix',
      },
      {
        id: 'uswdsComponentsLink',
        jsonPath: 'uswdsComponents.data.link',
        title: 'link',
      },
      {
        id: 'uswdsComponentsList',
        jsonPath: 'uswdsComponents.data.list',
        title: 'list',
      },
      {
        id: 'uswdsComponentsModal',
        jsonPath: 'uswdsComponents.data.modal',
        title: 'modal',
      },
      {
        id: 'uswdsComponentsPagination',
        jsonPath: 'uswdsComponents.data.pagination',
        title: 'pagination',
      },
      {
        id: 'uswdsComponentsProcessList',
        jsonPath: 'uswdsComponents.data.processList',
        title: 'processList',
      },
      {
        id: 'uswdsComponentsProse',
        jsonPath: 'uswdsComponents.data.prose',
        title: 'prose',
      },
      {
        id: 'uswdsComponentsRadioButton',
        jsonPath: 'uswdsComponents.data.radioButton',
        title: 'radioButton',
      },
      {
        id: 'uswdsComponentsRangeSlider',
        jsonPath: 'uswdsComponents.data.rangeSlider',
        title: 'rangeSlider',
      },
      {
        id: 'uswdsComponentsSearch',
        jsonPath: 'uswdsComponents.data.search',
        title: 'search',
      },
      {
        id: 'uswdsComponentsSideNav',
        jsonPath: 'uswdsComponents.data.sideNavigation',
        title: 'sideNavigation',
      },
      {
        id: 'uswdsComponentsSiteAlert',
        jsonPath: 'uswdsComponents.data.siteAlert',
        title: 'siteAlert',
      },
      {
        id: 'uswdsComponentsStepIndicator',
        jsonPath: 'uswdsComponents.data.stepIndicator',
        title: 'stepIndicator',
      },
      {
        id: 'uswdsComponentsSummaryBox',
        jsonPath: 'uswdsComponents.data.summaryBox',
        title: 'summaryBox',
      },
      {
        id: 'uswdsComponentsTable',
        jsonPath: 'uswdsComponents.data.table',
        title: 'table',
      },
      {
        id: 'uswdsComponentsTag',
        jsonPath: 'uswdsComponents.data.tag',
        title: 'tag',
      },
      {
        id: 'uswdsComponentsTextInput',
        jsonPath: 'uswdsComponents.data.textInput',
        title: 'textInput',
      },
      {
        id: 'uswdsComponentsTimePicker',
        jsonPath: 'uswdsComponents.data.timePicker',
        title: 'timePicker',
      },
      {
        id: 'uswdsComponentsTooltip',
        jsonPath: 'uswdsComponents.data.tooltip',
        title: 'tooltip',
      },
      {
        id: 'uswdsComponentsValidation',
        jsonPath: 'uswdsComponents.data.validation',
        title: 'validation',
      },
    ],
  },
};

/**
 * Given a collection preset name, returns the highest version number
 * @param {string} name preset name used in a CollectionType
 * @returns {CsvHeaderType[]} array of CsvHeader mappings
 */
export function getLatestCollection(name: string): CsvHeaderType[] {
  const collection = collections[name];
  let semVer = '0.0.1';
  debug('Looping through list of collections for collection name of %s', name);
  for (const key of Object.keys(collection)) {
    if (semVer === undefined) {
      semVer = key;
    } else {
      semVer = compare(semVer, key, '>=') ? semVer : key;
    }
  }

  debug('Latest version is %s', semVer);
  return collection[semVer];
}

/**
 * Given a scanVersion from an EDX scan, returns the appropriate CsvHeaderType[] so as to map values from the scan
 * @param {string} name preset name used in a CollectionType
 * @param {string} scanVersion value from EDX scan json outputs
 * @returns {string} version
 */
export function getCollectionVersionMap(
  name: string,
  scanVersion: string,
): string {
  const collection = collections[name];
  let collectionVersion = '';

  for (const key of Object.keys(collection)) {
    collectionVersion = compare(scanVersion, key, '>=')
      ? key
      : collectionVersion;
  }

  debug('CollectionVersion  version is %s', collectionVersion);

  return collectionVersion;
}
