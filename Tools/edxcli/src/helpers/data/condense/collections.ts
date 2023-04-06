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
        id: 'performanceMetric.hsts',
        jsonPath: 'performanceMetric.hsts',
        title: 'HSTS',
      },
      {
        id: 'performanceMetric.dap',
        jsonPath: 'performanceMetric.dap',
        title: 'Digital Analytics (DAP)',
      },
      {
        id: 'performanceMetric.contact',
        jsonPath: 'performanceMetric.contact',
        title: 'Contact',
      },
      {
        id: 'performanceMetric.banner',
        jsonPath: 'performanceMetric.banner',
        title: 'USA Banner',
      },
      {
        id: 'performanceMetric.identifier',
        jsonPath: 'performanceMetric.identifier',
        title: 'Identifier',
      },
      {
        id: 'performanceMetric.identifierAccessibility',
        jsonPath: 'performanceMetric.identifierAccessibility',
        title: 'Accessibility Link',
      },
      {
        id: 'performanceMetric.identifierFOIA',
        jsonPath: 'performanceMetric.identifierFOIA',
        title: 'FOIA Link',
      },
      {
        id: 'performanceMetric.identifierPrivacy',
        jsonPath: 'performanceMetric.identifierPrivacy',
        title: 'Privacy Policy Link',
      },
      {
        id: 'performanceMetric.search',
        jsonPath: 'performanceMetric.search',
        title: 'Search',
      },
      {
        id: 'siteScanner.data.scan_date',
        jsonPath: 'siteScanner.data.scan_date',
        title: 'Site Scanner Date',
      },
      {
        id: 'siteScanner.data.uswds_usa_classes',
        jsonPath: 'siteScanner.data.uswds_usa_classes',
        title: 'USA Class Count',
      },
      {
        id: 'siteScanner.data.uswds_semantic_version',
        jsonPath: 'siteScanner.data.uswds_semantic_version',
        title: 'USWDS Version',
      },
      {
        id: 'uswdsComponents.accordion',
        jsonPath: 'uswdsComponents.accordion',
        title: 'USWDS Accordion',
      },
      {
        id: 'uswdsComponents.alert',
        jsonPath: 'uswdsComponents.alert',
        title: 'USWDS Alert',
      },
      {
        id: 'uswdsComponents.button',
        jsonPath: 'uswdsComponents.button',
        title: 'USWDS Button',
      },
      {
        id: 'uswdsComponents.card',
        jsonPath: 'uswdsComponents.card',
        title: 'USWDS Card',
      },
      {
        id: 'uswdsComponents.footer',
        jsonPath: 'uswdsComponents.footer',
        title: 'USWDS Footer',
      },
      {
        id: 'uswdsComponents.header',
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
        id: 'performanceMetric.hsts',
        jsonPath: 'performanceMetric.hsts',
        title: 'HSTS',
      },
      {
        id: 'performanceMetric.dap',
        jsonPath: 'performanceMetric.dap',
        title: 'Digital Analytics (DAP)',
      },
      {
        id: 'performanceMetric.contact',
        jsonPath: 'performanceMetric.contact',
        title: 'Contact',
      },
      {
        id: 'performanceMetric.banner',
        jsonPath: 'performanceMetric.banner',
        title: 'USA Banner',
      },
      {
        id: 'performanceMetric.identifier',
        jsonPath: 'performanceMetric.identifier',
        title: 'Identifier',
      },
      {
        id: 'performanceMetric.identifierAccessibility',
        jsonPath: 'performanceMetric.identifierAccessibility',
        title: 'Accessibility Link',
      },
      {
        id: 'performanceMetric.identifierFOIA',
        jsonPath: 'performanceMetric.identifierFOIA',
        title: 'FOIA Link',
      },
      {
        id: 'performanceMetric.identifierPrivacy',
        jsonPath: 'performanceMetric.identifierPrivacy',
        title: 'Privacy Policy Link',
      },
      {
        id: 'performanceMetric.search',
        jsonPath: 'performanceMetric.search',
        title: 'Search',
      },
      {
        id: 'siteScanner.data.scan_date',
        jsonPath: 'siteScanner.data.scan_date',
        title: 'Site Scanner Date',
      },
      {
        id: 'siteScanner.data.uswds_usa_classes',
        jsonPath: 'siteScanner.data.uswds_usa_classes',
        title: 'USA Class Count',
      },
      {
        id: 'siteScanner.data.uswds_semantic_version',
        jsonPath: 'siteScanner.data.uswds_semantic_version',
        title: 'USWDS Version',
      },
      {
        id: 'uswdsComponents.accordion',
        jsonPath: 'uswdsComponents.accordion',
        title: 'USWDS Accordion',
      },
      {
        id: 'uswdsComponents.alert',
        jsonPath: 'uswdsComponents.alert',
        title: 'USWDS Alert',
      },
      {
        id: 'uswdsComponents.button',
        jsonPath: 'uswdsComponents.button',
        title: 'USWDS Button',
      },
      {
        id: 'uswdsComponents.card',
        jsonPath: 'uswdsComponents.card',
        title: 'USWDS Card',
      },
      {
        id: 'uswdsComponents.footer',
        jsonPath: 'uswdsComponents.footer',
        title: 'USWDS Footer',
      },
      {
        id: 'uswdsComponents.header',
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
        id: 'screenshot0imgPath',
        jsonPath: 'screenCapture.data[0].imgPath',
        title: 'image',
      },
      {
        id: 'screenshot0device',
        jsonPath: 'screenCapture.data[0].device',
        title: 'device',
      },
      {
        id: 'screenshot1imgPath',
        jsonPath: 'screenCapture.data[1].imgPath',
        title: 'image',
      },
      {
        id: 'screenshot1device',
        jsonPath: 'screenCapture.data[1].device',
        title: 'device',
      },
    ],
    '1.0.0': [
      { id: 'domain', jsonPath: 'domain', title: 'Domain' },
      { id: 'scanDate', jsonPath: 'scanDate', title: 'Scan Date' },
      { id: 'scanVersion', jsonPath: 'scanVersion', title: 'Scan Version' },
      {
        id: 'screenCapture.data[0].imgPath',
        jsonPath: 'screenCapture.data[0].imgPath',
        title: 'image',
      },
      {
        id: 'screenCapture.data[0].device',
        jsonPath: 'screenCapture.data[0].device',
        title: 'device',
      },
      {
        id: 'screenCapture.data[1].imgPath',
        jsonPath: 'screenCapture.data[1].imgPath',
        title: 'image',
      },
      {
        id: 'screenCapture.data[1].device',
        jsonPath: 'screenCapture.data[1].device',
        title: 'device',
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
        id: 'performanceMetric.hsts',
        jsonPath: 'performanceMetric.hsts',
        title: 'HSTS',
      },
      {
        id: 'performanceMetric.dap',
        jsonPath: 'performanceMetric.dap',
        title: 'Digital Analytics (DAP)',
      },
      {
        id: 'performanceMetric.contact',
        jsonPath: 'performanceMetric.contact',
        title: 'Contact',
      },
      {
        id: 'performanceMetric.banner',
        jsonPath: 'performanceMetric.banner',
        title: 'USA Banner',
      },
      {
        id: 'performanceMetric.identifier',
        jsonPath: 'performanceMetric.identifier',
        title: 'Identifier',
      },
      {
        id: 'performanceMetric.identifierAccessibility',
        jsonPath: 'performanceMetric.identifierAccessibility',
        title: 'Accessibility Link',
      },
      {
        id: 'performanceMetric.identifierFOIA',
        jsonPath: 'performanceMetric.identifierFOIA',
        title: 'FOIA Link',
      },
      {
        id: 'performanceMetric.identifierPrivacy',
        jsonPath: 'performanceMetric.identifierPrivacy',
        title: 'Privacy Policy Link',
      },
      {
        id: 'performanceMetric.search',
        jsonPath: 'performanceMetric.search',
        title: 'Search',
      },
      {
        id: 'siteScanner.data.scan_date',
        jsonPath: 'siteScanner.data.scan_date',
        title: 'Site Scanner Date',
      },
      {
        id: 'siteScanner.data.uswds_usa_classes',
        jsonPath: 'siteScanner.data.uswds_usa_classes',
        title: 'USA Class Count',
      },
      {
        id: 'siteScanner.data.uswds_semantic_version',
        jsonPath: 'siteScanner.data.uswds_semantic_version',
        title: 'USWDS Version',
      },
      {
        id: 'uswdsComponents.accordion',
        jsonPath: 'uswdsComponents.accordion',
        title: 'USWDS Accordion',
      },
      {
        id: 'uswdsComponents.alert',
        jsonPath: 'uswdsComponents.alert',
        title: 'USWDS Alert',
      },
      {
        id: 'uswdsComponents.button',
        jsonPath: 'uswdsComponents.button',
        title: 'USWDS Button',
      },
      {
        id: 'uswdsComponents.card',
        jsonPath: 'uswdsComponents.card',
        title: 'USWDS Card',
      },
      {
        id: 'uswdsComponents.footer',
        jsonPath: 'uswdsComponents.footer',
        title: 'USWDS Footer',
      },
      {
        id: 'uswdsComponents.header',
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
        id: 'uswdsComponents.accordion',
        jsonPath: 'uswdsComponents.accordion',
        title: 'accordion',
      },
      {
        id: 'uswdsComponents.alert',
        jsonPath: 'uswdsComponents.alert',
        title: 'alert',
      },
      {
        id: 'uswdsComponents.banner',
        jsonPath: 'uswdsComponents.banner',
        title: 'banner',
      },
      {
        id: 'uswdsComponents.breadcrumb',
        jsonPath: 'uswdsComponents.breadcrumb',
        title: 'breadcrumb',
      },
      {
        id: 'uswdsComponents.button',
        jsonPath: 'uswdsComponents.button',
        title: 'button',
      },
      {
        id: 'uswdsComponents.buttonGroup',
        jsonPath: 'uswdsComponents.buttonGroup',
        title: 'buttonGroup',
      },
      {
        id: 'uswdsComponents.card',
        jsonPath: 'uswdsComponents.card',
        title: 'card',
      },
      {
        id: 'uswdsComponents.characterCount',
        jsonPath: 'uswdsComponents.characterCount',
        title: 'characterCount',
      },
      {
        id: 'uswdsComponents.checkbox',
        jsonPath: 'uswdsComponents.checkbox',
        title: 'checkbox',
      },
      {
        id: 'uswdsComponents.collection',
        jsonPath: 'uswdsComponents.collection',
        title: 'collection',
      },
      {
        id: 'uswdsComponents.comboBox',
        jsonPath: 'uswdsComponents.comboBox',
        title: 'comboBox',
      },
      {
        id: 'uswdsComponents.dateInput',
        jsonPath: 'uswdsComponents.dateInput',
        title: 'dateInput',
      },
      {
        id: 'uswdsComponents.datePicker',
        jsonPath: 'uswdsComponents.datePicker',
        title: 'datePicker',
      },
      {
        id: 'uswdsComponents.dateRangePicker',
        jsonPath: 'uswdsComponents.dateRangePicker',
        title: 'dateRangePicker',
      },
      {
        id: 'uswdsComponents.dropdown',
        jsonPath: 'uswdsComponents.dropdown',
        title: 'dropdown',
      },
      {
        id: 'uswdsComponents.fileInput',
        jsonPath: 'uswdsComponents.fileInput',
        title: 'fileInput',
      },
      {
        id: 'uswdsComponents.footer',
        jsonPath: 'uswdsComponents.footer',
        title: 'footer',
      },
      {
        id: 'uswdsComponents.form',
        jsonPath: 'uswdsComponents.form',
        title: 'form',
      },
      {
        id: 'uswdsComponents.grid',
        jsonPath: 'uswdsComponents.grid',
        title: 'grid',
      },
      {
        id: 'uswdsComponents.header',
        jsonPath: 'uswdsComponents.header',
        title: 'header',
      },
      {
        id: 'uswdsComponents.icon',
        jsonPath: 'uswdsComponents.icon',
        title: 'icon',
      },
      {
        id: 'uswdsComponents.iconList',
        jsonPath: 'uswdsComponents.iconList',
        title: 'iconList',
      },
      {
        id: 'uswdsComponents.identifier',
        jsonPath: 'uswdsComponents.identifier',
        title: 'identifier',
      },
      {
        id: 'uswdsComponents.inputPrefix',
        jsonPath: 'uswdsComponents.inputPrefix',
        title: 'inputPrefix',
      },
      {
        id: 'uswdsComponents.inputSuffix',
        jsonPath: 'uswdsComponents.inputSuffix',
        title: 'inputSuffix',
      },
      {
        id: 'uswdsComponents.link',
        jsonPath: 'uswdsComponents.link',
        title: 'link',
      },
      {
        id: 'uswdsComponents.list',
        jsonPath: 'uswdsComponents.list',
        title: 'list',
      },
      {
        id: 'uswdsComponents.modal',
        jsonPath: 'uswdsComponents.modal',
        title: 'modal',
      },
      {
        id: 'uswdsComponents.pagination',
        jsonPath: 'uswdsComponents.pagination',
        title: 'pagination',
      },
      {
        id: 'uswdsComponents.processList',
        jsonPath: 'uswdsComponents.processList',
        title: 'processList',
      },
      {
        id: 'uswdsComponents.prose',
        jsonPath: 'uswdsComponents.prose',
        title: 'prose',
      },
      {
        id: 'uswdsComponents.radioButton',
        jsonPath: 'uswdsComponents.radioButton',
        title: 'radioButton',
      },
      {
        id: 'uswdsComponents.rangeSlider',
        jsonPath: 'uswdsComponents.rangeSlider',
        title: 'rangeSlider',
      },
      {
        id: 'uswdsComponents.search',
        jsonPath: 'uswdsComponents.search',
        title: 'search',
      },
      {
        id: 'uswdsComponents.sideNavigation',
        jsonPath: 'uswdsComponents.sideNavigation',
        title: 'sideNavigation',
      },
      {
        id: 'uswdsComponents.siteAlert',
        jsonPath: 'uswdsComponents.siteAlert',
        title: 'siteAlert',
      },
      {
        id: 'uswdsComponents.stepIndicator',
        jsonPath: 'uswdsComponents.stepIndicator',
        title: 'stepIndicator',
      },
      {
        id: 'uswdsComponents.summaryBox',
        jsonPath: 'uswdsComponents.summaryBox',
        title: 'summaryBox',
      },
      {
        id: 'uswdsComponents.table',
        jsonPath: 'uswdsComponents.table',
        title: 'table',
      },
      {
        id: 'uswdsComponents.tag',
        jsonPath: 'uswdsComponents.tag',
        title: 'tag',
      },
      {
        id: 'uswdsComponents.textInput',
        jsonPath: 'uswdsComponents.textInput',
        title: 'textInput',
      },
      {
        id: 'uswdsComponents.timePicker',
        jsonPath: 'uswdsComponents.timePicker',
        title: 'timePicker',
      },
      {
        id: 'uswdsComponents.tooltip',
        jsonPath: 'uswdsComponents.tooltip',
        title: 'tooltip',
      },
      {
        id: 'uswdsComponents.validation',
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
        id: 'uswdsComponents.data.accordion',
        jsonPath: 'uswdsComponents.data.accordion',
        title: 'accordion',
      },
      {
        id: 'uswdsComponents.data.alert',
        jsonPath: 'uswdsComponents.data.alert',
        title: 'alert',
      },
      {
        id: 'uswdsComponents.data.banner',
        jsonPath: 'uswdsComponents.data.banner',
        title: 'banner',
      },
      {
        id: 'uswdsComponents.data.breadcrumb',
        jsonPath: 'uswdsComponents.data.breadcrumb',
        title: 'breadcrumb',
      },
      {
        id: 'uswdsComponents.data.button',
        jsonPath: 'uswdsComponents.data.button',
        title: 'button',
      },
      {
        id: 'uswdsComponents.data.buttonGroup',
        jsonPath: 'uswdsComponents.data.buttonGroup',
        title: 'buttonGroup',
      },
      {
        id: 'uswdsComponents.data.card',
        jsonPath: 'uswdsComponents.data.card',
        title: 'card',
      },
      {
        id: 'uswdsComponents.data.characterCount',
        jsonPath: 'uswdsComponents.data.characterCount',
        title: 'characterCount',
      },
      {
        id: 'uswdsComponents.data.checkbox',
        jsonPath: 'uswdsComponents.data.checkbox',
        title: 'checkbox',
      },
      {
        id: 'uswdsComponents.data.collection',
        jsonPath: 'uswdsComponents.data.collection',
        title: 'collection',
      },
      {
        id: 'uswdsComponents.data.comboBox',
        jsonPath: 'uswdsComponents.data.comboBox',
        title: 'comboBox',
      },
      {
        id: 'uswdsComponents.data.dateInput',
        jsonPath: 'uswdsComponents.data.dateInput',
        title: 'dateInput',
      },
      {
        id: 'uswdsComponents.data.datePicker',
        jsonPath: 'uswdsComponents.data.datePicker',
        title: 'datePicker',
      },
      {
        id: 'uswdsComponents.data.dateRangePicker',
        jsonPath: 'uswdsComponents.data.dateRangePicker',
        title: 'dateRangePicker',
      },
      {
        id: 'uswdsComponents.data.dropdown',
        jsonPath: 'uswdsComponents.data.dropdown',
        title: 'dropdown',
      },
      {
        id: 'uswdsComponents.data.fileInput',
        jsonPath: 'uswdsComponents.data.fileInput',
        title: 'fileInput',
      },
      {
        id: 'uswdsComponents.data.footer',
        jsonPath: 'uswdsComponents.data.footer',
        title: 'footer',
      },
      {
        id: 'uswdsComponents.data.form',
        jsonPath: 'uswdsComponents.data.form',
        title: 'form',
      },
      {
        id: 'uswdsComponents.data.grid',
        jsonPath: 'uswdsComponents.data.grid',
        title: 'grid',
      },
      {
        id: 'uswdsComponents.data.header',
        jsonPath: 'uswdsComponents.data.header',
        title: 'header',
      },
      {
        id: 'uswdsComponents.data.icon',
        jsonPath: 'uswdsComponents.data.icon',
        title: 'icon',
      },
      {
        id: 'uswdsComponents.data.iconList',
        jsonPath: 'uswdsComponents.data.iconList',
        title: 'iconList',
      },
      {
        id: 'uswdsComponents.data.identifier',
        jsonPath: 'uswdsComponents.data.identifier',
        title: 'identifier',
      },
      {
        id: 'uswdsComponents.data.inputPrefix',
        jsonPath: 'uswdsComponents.data.inputPrefix',
        title: 'inputPrefix',
      },
      {
        id: 'uswdsComponents.data.inputSuffix',
        jsonPath: 'uswdsComponents.data.inputSuffix',
        title: 'inputSuffix',
      },
      {
        id: 'uswdsComponents.data.link',
        jsonPath: 'uswdsComponents.data.link',
        title: 'link',
      },
      {
        id: 'uswdsComponents.data.list',
        jsonPath: 'uswdsComponents.data.list',
        title: 'list',
      },
      {
        id: 'uswdsComponents.data.modal',
        jsonPath: 'uswdsComponents.data.modal',
        title: 'modal',
      },
      {
        id: 'uswdsComponents.data.pagination',
        jsonPath: 'uswdsComponents.data.pagination',
        title: 'pagination',
      },
      {
        id: 'uswdsComponents.data.processList',
        jsonPath: 'uswdsComponents.data.processList',
        title: 'processList',
      },
      {
        id: 'uswdsComponents.data.prose',
        jsonPath: 'uswdsComponents.data.prose',
        title: 'prose',
      },
      {
        id: 'uswdsComponents.data.radioButton',
        jsonPath: 'uswdsComponents.data.radioButton',
        title: 'radioButton',
      },
      {
        id: 'uswdsComponents.data.rangeSlider',
        jsonPath: 'uswdsComponents.data.rangeSlider',
        title: 'rangeSlider',
      },
      {
        id: 'uswdsComponents.data.search',
        jsonPath: 'uswdsComponents.data.search',
        title: 'search',
      },
      {
        id: 'uswdsComponents.data.sideNavigation',
        jsonPath: 'uswdsComponents.data.sideNavigation',
        title: 'sideNavigation',
      },
      {
        id: 'uswdsComponents.data.siteAlert',
        jsonPath: 'uswdsComponents.data.siteAlert',
        title: 'siteAlert',
      },
      {
        id: 'uswdsComponents.data.stepIndicator',
        jsonPath: 'uswdsComponents.data.stepIndicator',
        title: 'stepIndicator',
      },
      {
        id: 'uswdsComponents.data.summaryBox',
        jsonPath: 'uswdsComponents.data.summaryBox',
        title: 'summaryBox',
      },
      {
        id: 'uswdsComponents.data.table',
        jsonPath: 'uswdsComponents.data.table',
        title: 'table',
      },
      {
        id: 'uswdsComponents.data.tag',
        jsonPath: 'uswdsComponents.data.tag',
        title: 'tag',
      },
      {
        id: 'uswdsComponents.data.textInput',
        jsonPath: 'uswdsComponents.data.textInput',
        title: 'textInput',
      },
      {
        id: 'uswdsComponents.data.timePicker',
        jsonPath: 'uswdsComponents.data.timePicker',
        title: 'timePicker',
      },
      {
        id: 'uswdsComponents.data.tooltip',
        jsonPath: 'uswdsComponents.data.tooltip',
        title: 'tooltip',
      },
      {
        id: 'uswdsComponents.data.validation',
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
