export type CollectionType = {
  [presetName: string]: CsvHeaderType[];
};

export type CsvHeaderType = {
  id: string;
  title: string;
};
export const collections: CollectionType = {
  default: [
    { id: 'domain', title: 'Domain' },
    { id: 'url', title: 'URL' },
    { id: 'scanDate', title: 'Scan Date' },
    { id: 'scanVersion', title: 'Scan Version' },
    { id: 'scanStatus', title: 'Scan Status' },
    { id: 'performanceMetric.hsts', title: 'HSTS' },
    { id: 'performanceMetric.dap', title: 'Digital Analytics (DAP)' },
    { id: 'performanceMetric.contact', title: 'Contact' },
    { id: 'performanceMetric.banner', title: 'USA Banner' },
    { id: 'performanceMetric.identifier', title: 'Identifier' },
    {
      id: 'performanceMetric.identifierAccessibility',
      title: 'Accessibility Link',
    },
    { id: 'performanceMetric.identifierFOIA', title: 'FOIA Link' },
    { id: 'performanceMetric.identifierPrivacy', title: 'Privacy Policy Link' },
    { id: 'performanceMetric.search', title: 'Search' },
    { id: 'siteScanner.data.scan_date', title: 'Site Scanner Date' },
    { id: 'siteScanner.data.uswds_usa_classes', title: 'USA Class Count' },
    { id: 'siteScanner.data.uswds_semantic_version', title: 'USWDS Version' },
    { id: 'uswdsComponents.accordion', title: 'USWDS Accordion' },
    { id: 'uswdsComponents.alert', title: 'USWDS Alert' },
    { id: 'uswdsComponents.button', title: 'USWDS Button' },
    { id: 'uswdsComponents.card', title: 'USWDS Card' },
    { id: 'uswdsComponents.footer', title: 'USWDS Footer' },
    { id: 'uswdsComponents.header', title: 'USWDS Header' },
    {
      id: 'lighthouse.desktopData.lhr.categories.performance.score',
      title: '(D) Performance Score',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['speed-index'].score",
      title: '(D) Speed Index',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['content-width'].score",
      title: '(D) Content Width Score',
    },
    {
      id: 'lighthouse.desktopData.lhr.categories.seo.score',
      title: '(D) SEO Score',
    },
    {
      id: 'lighthouse.mobileData.lhr.categories.performance.score',
      title: '(M) Performance Score',
    },
    {
      id: "lighthouse.mobileData.lhr.audits['speed-index'].score",
      title: '(M) Speed Index Score',
    },
    {
      id: "lighthouse.mobileData.lhr.audits['content-width'].score",
      title: '(M) Content Width Score',
    },
    {
      id: 'lighthouse.mobileData.lhr.categories.seo.score',
      title: '(M) SEO Score',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['content-width'].score",
      title: 'Page Content Width Set',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['meta-viewport'].score",
      title: 'Meta Viewport Set',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['meta-description'].score",
      title: 'Meta Description Set',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['document-title'].score",
      title: 'Document Title Set',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['html-has-lang'].score",
      title: 'HTML Language Set',
    },
  ],
  gearScans: [
    { id: 'domain', title: 'Domain' },
    { id: 'scanDate', title: 'Scan Date' },
    { id: 'scanVersion', title: 'Scan Version' },
    { id: 'screenCapture.data[0].imgPath', title: 'image' },
    { id: 'screenCapture.data[0].device', title: 'device' },
    { id: 'screenCapture.data[1].imgPath', title: 'image' },
    { id: 'screenCapture.data[1].device', title: 'device' },
  ],
  lighthouseAccessibility: [
    { id: 'domain', title: 'Domain' },
    { id: 'url', title: 'URL' },
    { id: 'scanDate', title: 'Scan Date' },
    { id: 'scanVersion', title: 'Scan Version' },
    { id: 'scanStatus', title: 'Scan Status' },
    { id: 'performanceMetric.hsts', title: 'HSTS' },
    { id: 'performanceMetric.dap', title: 'Digital Analytics (DAP)' },
    { id: 'performanceMetric.contact', title: 'Contact' },
    { id: 'performanceMetric.banner', title: 'USA Banner' },
    { id: 'performanceMetric.identifier', title: 'Identifier' },
    {
      id: 'performanceMetric.identifierAccessibility',
      title: 'Accessibility Link',
    },
    { id: 'performanceMetric.identifierFOIA', title: 'FOIA Link' },
    { id: 'performanceMetric.identifierPrivacy', title: 'Privacy Policy Link' },
    { id: 'performanceMetric.search', title: 'Search' },
    { id: 'siteScanner.data.scan_date', title: 'Site Scanner Date' },
    { id: 'siteScanner.data.uswds_usa_classes', title: 'USA Class Count' },
    { id: 'siteScanner.data.uswds_semantic_version', title: 'USWDS Version' },
    { id: 'uswdsComponents.accordion', title: 'USWDS Accordion' },
    { id: 'uswdsComponents.alert', title: 'USWDS Alert' },
    { id: 'uswdsComponents.button', title: 'USWDS Button' },
    { id: 'uswdsComponents.card', title: 'USWDS Card' },
    { id: 'uswdsComponents.footer', title: 'USWDS Footer' },
    { id: 'uswdsComponents.header', title: 'USWDS Header' },
    {
      id: 'lighthouse.desktopData.lhr.categories.performance.score',
      title: '(D) Performance Score',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['speed-index'].score",
      title: '(D) Speed Index',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['content-width'].score",
      title: '(D) Content Width Score',
    },
    {
      id: 'lighthouse.desktopData.lhr.categories.seo.score',
      title: '(D) SEO Score',
    },
    {
      id: 'lighthouse.mobileData.lhr.categories.performance.score',
      title: '(M) Performance Score',
    },
    {
      id: "lighthouse.mobileData.lhr.audits['speed-index'].score",
      title: '(M) Speed Index Score',
    },
    {
      id: "lighthouse.mobileData.lhr.audits['content-width'].score",
      title: '(M) Content Width Score',
    },
    {
      id: 'lighthouse.mobileData.lhr.categories.seo.score',
      title: '(M) SEO Score',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['content-width'].score",
      title: 'Page Content Width Set',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['meta-viewport'].score",
      title: 'Meta Viewport Set',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['meta-description'].score",
      title: 'Meta Description Set',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['document-title'].score",
      title: 'Document Title Set',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['html-has-lang'].score",
      title: 'HTML Language Set',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['aria-allowed-attr'].score",
      title: 'LH Cat Aria Allowed Attr',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['aria-hidden-body'].score",
      title: 'LH Cat Aria Hidden Body',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['aria-hidden-focus'].score",
      title: 'LH Cat Aria Hidden Focus',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['aria-required-attr'].score",
      title: 'LH Cat Aria Required Attr',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['aria-roles'].score",
      title: 'LH Cat Aria Roles',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['aria-valid-attr-value'].score",
      title: 'LH Cat Aria Valid Attr Value',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['aria-valid-attr'].score",
      title: 'LH Cat Aria Valid Attr',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['button-name'].score",
      title: 'LH Cat Button Name',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['bypass'].score",
      title: 'LH Cat Bypass',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['color-contrast'].score",
      title: 'LH Cat Color Contrast',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['document-title'].score",
      title: 'LH Cat Document Title',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['duplicate-id-aria'].score",
      title: 'LH Cat Duplicate ID Aria',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['heading-order'].score",
      title: 'LH Cat Heading Order',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['html-has-lang'].score",
      title: 'LH Cat HTML Has Lang',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['html-lang-valid'].score",
      title: 'LH Cat HTML Lang Valid',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['image-alt'].score",
      title: 'LH Cat Image Alt',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['link-name'].score",
      title: 'LH Cat Link Name',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['list'].score",
      title: 'LH Cat List',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['listitem'].score",
      title: 'LH Cat Listitem',
    },
    {
      id: "lighthouse.desktopData.lhr.audits['meta-viewport'].score",
      title: 'LH Cat Meta Viewport',
    },
  ],
  uswds: [
    { id: 'domain', title: 'Domain' },
    { id: 'url', title: 'URL' },
    { id: 'scanDate', title: 'Scan Date' },
    { id: 'scanVersion', title: 'Scan Version' },
    { id: 'scanStatus', title: 'Scan Status' },
    { id: 'uswdsComponents.accordion', title: 'accordion' },
    { id: 'uswdsComponents.alert', title: 'alert' },
    { id: 'uswdsComponents.banner', title: 'banner' },
    { id: 'uswdsComponents.breadcrumb', title: 'breadcrumb' },
    { id: 'uswdsComponents.button', title: 'button' },
    { id: 'uswdsComponents.buttonGroup', title: 'buttonGroup' },
    { id: 'uswdsComponents.card', title: 'card' },
    { id: 'uswdsComponents.characterCount', title: 'characterCount' },
    { id: 'uswdsComponents.checkbox', title: 'checkbox' },
    { id: 'uswdsComponents.collection', title: 'collection' },
    { id: 'uswdsComponents.comboBox', title: 'comboBox' },
    { id: 'uswdsComponents.dateInput', title: 'dateInput' },
    { id: 'uswdsComponents.datePicker', title: 'datePicker' },
    { id: 'uswdsComponents.dateRangePicker', title: 'dateRangePicker' },
    { id: 'uswdsComponents.dropdown', title: 'dropdown' },
    { id: 'uswdsComponents.fileInput', title: 'fileInput' },
    { id: 'uswdsComponents.footer', title: 'footer' },
    { id: 'uswdsComponents.form', title: 'form' },
    { id: 'uswdsComponents.grid', title: 'grid' },
    { id: 'uswdsComponents.header', title: 'header' },
    { id: 'uswdsComponents.icon', title: 'icon' },
    { id: 'uswdsComponents.iconList', title: 'iconList' },
    { id: 'uswdsComponents.identifier', title: 'identifier' },
    { id: 'uswdsComponents.inputPrefix', title: 'inputPrefix' },
    { id: 'uswdsComponents.inputSuffix', title: 'inputSuffix' },
    { id: 'uswdsComponents.link', title: 'link' },
    { id: 'uswdsComponents.list', title: 'list' },
    { id: 'uswdsComponents.modal', title: 'modal' },
    { id: 'uswdsComponents.pagination', title: 'pagination' },
    { id: 'uswdsComponents.processList', title: 'processList' },
    { id: 'uswdsComponents.prose', title: 'prose' },
    { id: 'uswdsComponents.radioButton', title: 'radioButton' },
    { id: 'uswdsComponents.rangeSlider', title: 'rangeSlider' },
    { id: 'uswdsComponents.search', title: 'search' },
    { id: 'uswdsComponents.sideNavigation', title: 'sideNavigation' },
    { id: 'uswdsComponents.siteAlert', title: 'siteAlert' },
    { id: 'uswdsComponents.stepIndicator', title: 'stepIndicator' },
    { id: 'uswdsComponents.summaryBox', title: 'summaryBox' },
    { id: 'uswdsComponents.table', title: 'table' },
    { id: 'uswdsComponents.tag', title: 'tag' },
    { id: 'uswdsComponents.textInput', title: 'textInput' },
    { id: 'uswdsComponents.timePicker', title: 'timePicker' },
    { id: 'uswdsComponents.tooltip', title: 'tooltip' },
    { id: 'uswdsComponents.validation', title: 'validation' },
  ],
};
