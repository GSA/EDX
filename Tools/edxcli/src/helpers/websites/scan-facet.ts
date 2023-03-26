import { ScanHelper } from './scan';
import { WebsiteMetadata } from './websites-metadata';

/* follows pattern from https://blog.logrocket.com/writing-constructor-typescript */
export interface ScanFacetInterface {
  scanHelper: ScanHelper;
  websiteMetadata: WebsiteMetadata;
  options?: Record<string, string>;
  data: unknown;
  error: unknown;
  run(): Promise<scanFacetReport>;
}

export interface ScanFacetConstructor {
  new (
    scanHelper: ScanHelper,
    websiteMetadata: WebsiteMetadata,
    options?: Record<string, string>,
  ): ScanFacetInterface;
}

export type scanFacetReport = {
  data: unknown;
  error: unknown;
};

export function createScanFacet(
  Ctor: ScanFacetConstructor,
  scanHelper: ScanHelper,
  websiteMetadata: WebsiteMetadata,
  options?: Record<string, string>,
): ScanFacetInterface {
  return new Ctor(scanHelper, websiteMetadata, options);
}
