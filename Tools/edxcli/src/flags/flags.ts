import { Flags } from '@oclif/core';

export const output = Flags.build({
  char: 'o',
  description: 'Output directory. Defualts to current directory',
  required: false,
});

export const domainsList = Flags.build({
  char: 'd',
  description: 'Comma-separated list of domains to scan.',
  required: true,
});

export const domainsSource = Flags.build({
  char: 'd',
  default: 'Touchpoints',
  description: 'Name of the system to pull the list of domains',
  required: false,
  options: ['Touchpoints'],
});

export const facets = Flags.build({
  char: 'f',
  description:
    'Comma-separated list of facets to use for the scan. e.g. (-f screenshot -f lighthouseDesktop -f itPerformanceMetric).',
  multiple: true,
  options: [
    'cuiBanner',
    'itPerformanceMetric',
    'lighthouseDesktop',
    'lighthouseMobile',
    'metadataTags',
    'screenshot',
    'searchEngine',
    'siteScanner',
    'uswdsComponents',
  ],
  required: false,
});

export const preset = Flags.build({
  char: 'p',
  description:
    'Run a pre-configured suite of scan facets whose results will be output into a single file.',
  options: ['', 'all', 'edx scan'],
  required: false,
  default: '',
});

export const resume = Flags.boolean({
  description:
    'Resumes a previously launched operation. If a local cache file is not found, begins the process from scratch.',
  default: false,
  allowNo: false,
});

export const headless = Flags.boolean({
  description:
    'Boolean flag, whether or not to run scans in headless mode. Defaults to true',
  default: true,
  allowNo: true,
});

export const auth = Flags.boolean({
  description: `Boolean flag denoting whether or not to prompt for basic auth credentials for the given site. Defaults to false`,
  default: false,
  allowNo: false,
});
