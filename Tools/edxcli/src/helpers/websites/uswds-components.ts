// @ts-check

import { ScanHelper } from './scan';

/**
 * Class listing each of the USWDS components as a boolean to indicate if the component is present
 */
export class UswdsComponentsReport implements IUswdsComponentsReport {
  description: string;
  accordion: boolean;
  alert: boolean;
  banner: boolean;
  breadcrumb: boolean;
  button: boolean;
  buttonGroup: boolean;
  card: boolean;
  characterCount: boolean;
  checkbox: boolean;
  collection: boolean;
  comboBox: boolean;
  dateInput: boolean;
  datePicker: boolean;
  dateRangePicker: boolean;
  dropdown: boolean;
  fileInput: boolean;
  footer: boolean;
  form: boolean;
  grid: boolean;
  header: boolean;
  icon: boolean;
  iconList: boolean;
  identifier: boolean;
  inputPrefix: boolean;
  inputSuffix: boolean;
  link: boolean;
  list: boolean;
  modal: boolean;
  pagination: boolean;
  processList: boolean;
  prose: boolean;
  radioButton: boolean;
  rangeSlider: boolean;
  search: boolean;
  sideNavigation: boolean;
  siteAlert: boolean;
  stepIndicator: boolean;
  summaryBox: boolean;
  table: boolean;
  tag: boolean;
  textInput: boolean;
  timePicker: boolean;
  tooltip: boolean;
  validation: boolean;

  constructor() {
    this.description =
      'listing each of the USWDS components as a boolean to indicate if the component is present';
    this.accordion = false;
    this.alert = false;
    this.banner = false;
    this.breadcrumb = false;
    this.button = false;
    this.buttonGroup = false;
    this.card = false;
    this.characterCount = false;
    this.checkbox = false;
    this.collection = false;
    this.comboBox = false;
    this.dateInput = false;
    this.datePicker = false;
    this.dateRangePicker = false;
    this.dropdown = false;
    this.fileInput = false;
    this.footer = false;
    this.form = false;
    this.grid = false;
    this.header = false;
    this.icon = false;
    this.iconList = false;
    this.identifier = false;
    this.inputPrefix = false;
    this.inputSuffix = false;
    this.link = false;
    this.list = false;
    this.modal = false;
    this.pagination = false;
    this.processList = false;
    this.prose = false;
    this.radioButton = false;
    this.rangeSlider = false;
    this.search = false;
    this.sideNavigation = false;
    this.siteAlert = false;
    this.stepIndicator = false;
    this.summaryBox = false;
    this.table = false;
    this.tag = false;
    this.textInput = false;
    this.timePicker = false;
    this.tooltip = false;
    this.validation = false;
  }
}

export const uswdsComponentsReport = async function (
  sh: ScanHelper,
  domain: URL,
): Promise<UswdsComponentsReport> {
  const data = new UswdsComponentsReport();
  const page = await sh.browser.newPage();
  await page
    .goto(domain.toString(), { waitUntil: 'networkidle2' })
    .catch((error) => {
      console.error('USWDS error:', error);
    });
  const content = await page.content();

  data.accordion = /usa-accordion__heading/.test(content);
  data.alert = /usa-alert/.test(content);
  data.banner = /usa-banner/.test(content);
  data.breadcrumb = /usa-breadcrumb/.test(content);
  data.button = /usa-button/.test(content);
  data.buttonGroup = /usa-button-group/.test(content);
  data.card = /usa-card-group|usa-card__container/.test(content);
  data.characterCount = /usa-character-count/.test(content);
  data.checkbox = /usa-checkbox/.test(content);
  data.collection = /usa-collection/.test(content);
  data.comboBox = /usa-combo-box/.test(content);
  data.dateInput = /usa-memorable-date/.test(content);
  data.datePicker = /usa-date-picker/.test(content);
  data.dateRangePicker = /usa-date-range-picker/.test(content);
  data.dropdown = /usa-select/.test(content);
  data.fileInput = /usa-file-input/.test(content);
  data.footer = /usa-footer/.test(content);
  data.grid = /grid-container/.test(content);
  data.header = /usa-header/.test(content);
  data.icon = /usa-icon/.test(content);
  data.iconList = /usa-icon-list/.test(content);
  data.identifier = /usa-identifier/.test(content);
  data.inputPrefix = /usa-input-prefix/.test(content);
  data.inputSuffix = /usa-input-suffix/.test(content);
  data.link = /usa-link/.test(content);
  data.list = /usa-list/.test(content);
  data.modal = /usa-modal/.test(content);
  data.pagination = /usa-pagination/.test(content);
  data.processList = /usa-process-list/.test(content);
  data.prose = /usa-prose/.test(content);
  data.radioButton = /usa-radio|usa-radio__input/.test(content);
  data.rangeSlider = /usa-range/.test(content);
  data.search = /usa-search/.test(content);
  data.sideNavigation = /usa-sidenav/.test(content);
  data.siteAlert = /usa-site-alert/.test(content);
  data.stepIndicator = /usa-step-indicator/.test(content);
  data.summaryBox = /usa-summary-box/.test(content);
  data.table = /usa-table/.test(content);
  data.tag = /usa-tag/.test(content);
  data.textInput = /usa-input/.test(content);
  data.timePicker = /usa-time-picker/.test(content);
  data.tooltip = /usa-tooltip/.test(content);
  data.validation = /usa-alert--validation/.test(content);
  page.close();
  return data;
};

export interface IUswdsComponentsReport {
  description: string;
  accordion: boolean;
  alert: boolean;
  banner: boolean;
  breadcrumb: boolean;
  button: boolean;
  buttonGroup: boolean;
  card: boolean;
  characterCount: boolean;
  checkbox: boolean;
  collection: boolean;
  comboBox: boolean;
  dateInput: boolean;
  datePicker: boolean;
  dateRangePicker: boolean;
  dropdown: boolean;
  fileInput: boolean;
  footer: boolean;
  form: boolean;
  grid: boolean;
  header: boolean;
  icon: boolean;
  iconList: boolean;
  identifier: boolean;
  inputPrefix: boolean;
  inputSuffix: boolean;
  link: boolean;
  list: boolean;
  modal: boolean;
  pagination: boolean;
  processList: boolean;
  prose: boolean;
  radioButton: boolean;
  rangeSlider: boolean;
  search: boolean;
  sideNavigation: boolean;
  siteAlert: boolean;
  stepIndicator: boolean;
  summaryBox: boolean;
  table: boolean;
  tag: boolean;
  textInput: boolean;
  timePicker: boolean;
  tooltip: boolean;
  validation: boolean;
}
