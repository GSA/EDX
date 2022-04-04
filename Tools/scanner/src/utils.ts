import crypto from "crypto";
const hash = crypto.createHash("md5");
import * as wmd from "./websitesMetadata";

/**
 * Constructs a url consisting of scheme, subdomain, domain, tld, path, and query string
 * @param {string} domain
 * @returns {string} full web URL containing relevant prefix, url path, and query string
 */
export const createUrl = async function (domain: string): Promise<string> {
  const regex = /(http:\/\/|https:\/\/)/;
  // strip out http/https if it exists
  domain = domain.replace(regex, "");
  const { wwwPrefix, queryString, urlPath } = wmd.getWebsiteMetadata(
    wmd.websiteMetaData,
    domain
  );

  return `https://${wwwPrefix}${domain}${urlPath}${queryString}`;
};

/**
 * Given a url such as gsa.gov/blah, returns domain without path: gsa.gov
 * @param url
 * @returns {Promise<string>}
 */
export const getDomain = async function (url: string): Promise<string> {
  return url.replace(/\/.*/, "");
};

/**
 *
 * @returns {string} - Current date as string in YYYYMMDD format
 */
export const getFormattedDate = (): string => {
  const date = new Date();
  return `${date.getFullYear()}${date.getMonth() < 9 ? "0" : ""}${
    date.getMonth() + 1
  }${date.getDate() < 10 ? "0" : ""}${date.getDate()}`;
};

/**
 * Given text input, returns a MD5 Hexidecimal hash
 * @param text
 * @returns {string}
 */
export const printHash = async function (text: string): Promise<string> {
  hash.update(text);
  return hash.copy().digest("hex");
};

export * from "./utils";
