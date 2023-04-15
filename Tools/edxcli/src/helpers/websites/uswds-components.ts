// @ts-check
import { serializeError, ErrorObject } from 'serialize-error';
import * as Debug from 'debug';
const debug = Debug.default('edxcli:helper:uswds-components');

import { ScanHelper } from './scan';
import { ScanFacetInterface, scanFacetReport } from './scan-facet';
import { WebsiteMetadata } from './websites-metadata';

/**
 * Class listing each of the USWDS components as a boolean to indicate if the component is present
 */
export class UswdsComponentsReport implements ScanFacetInterface {
  scanHelper: ScanHelper;
  websiteMetadata: WebsiteMetadata;
  type = '';
  data: UswdsComponents;
  error: ErrorObject[] = [];

  constructor(sh: ScanHelper, websiteMetadata: WebsiteMetadata) {
    this.scanHelper = sh;
    this.websiteMetadata = websiteMetadata;
    this.data = {
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
    };
  }

  async run(): Promise<scanFacetReport> {
    const page = await this.scanHelper.browser.newPage();
    try {
      await page
        .goto(this.websiteMetadata.completeUrl.toString(), {
          waitUntil: 'networkidle2',
        })
        .catch((error) => {
          console.log(
            'USWDS Components facet threw an error has occurred and is logged to the resultant JSON file.',
          );
          this.error.push(serializeError(error));
        });
      const content = await page.content();
      this.data.accordion = /usa-accordion__heading/.test(content);
      this.data.alert = /usa-alert/.test(content);
      this.data.banner = /usa-banner/.test(content);
      this.data.breadcrumb = /usa-breadcrumb/.test(content);
      this.data.button = /usa-button/.test(content);
      this.data.buttonGroup = /usa-button-group/.test(content);
      this.data.card = /usa-card-group|usa-card__container/.test(content);
      this.data.characterCount = /usa-character-count/.test(content);
      this.data.checkbox = /usa-checkbox/.test(content);
      this.data.collection = /usa-collection/.test(content);
      this.data.comboBox = /usa-combo-box/.test(content);
      this.data.dateInput = /usa-memorable-date/.test(content);
      this.data.datePicker = /usa-date-picker/.test(content);
      this.data.dateRangePicker = /usa-date-range-picker/.test(content);
      this.data.dropdown = /usa-select/.test(content);
      this.data.fileInput = /usa-file-input/.test(content);
      this.data.footer = /usa-footer/.test(content);
      this.data.form = /usa-form/.test(content);
      this.data.grid = /grid-container/.test(content);
      this.data.header = /usa-header/.test(content);
      this.data.icon = /usa-icon/.test(content);
      this.data.iconList = /usa-icon-list/.test(content);
      this.data.identifier = /usa-identifier/.test(content);
      this.data.inputPrefix = /usa-input-prefix/.test(content);
      this.data.inputSuffix = /usa-input-suffix/.test(content);
      this.data.link = /usa-link/.test(content);
      this.data.list = /usa-list/.test(content);
      this.data.modal = /usa-modal/.test(content);
      this.data.pagination = /usa-pagination/.test(content);
      this.data.processList = /usa-process-list/.test(content);
      this.data.prose = /usa-prose/.test(content);
      this.data.radioButton = /usa-radio|usa-radio__input/.test(content);
      this.data.rangeSlider = /usa-range/.test(content);
      this.data.search = /usa-search/.test(content);
      this.data.sideNavigation = /usa-sidenav/.test(content);
      this.data.siteAlert = /usa-site-alert/.test(content);
      this.data.stepIndicator = /usa-step-indicator/.test(content);
      this.data.summaryBox = /usa-summary-box/.test(content);
      this.data.table = /usa-table/.test(content);
      this.data.tag = /usa-tag/.test(content);
      this.data.textInput = /usa-input/.test(content);
      this.data.timePicker = /usa-time-picker/.test(content);
      this.data.tooltip = /usa-tooltip/.test(content);
      this.data.validation = /usa-alert--validation/.test(content);
    } catch (error: any) {
      error.log(
        'An error has occurred and is logged to the resultant JSON file.',
      );
      debug('%O', error);
      this.error.push(serializeError(error));
    }

    page.close();

    return { data: this.data, error: this.error };
  }
}

export type UswdsComponents = {
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
};
