// @ts-check

const puppeteer = require("puppeteer");
require("dotenv").config();
const fs = require("fs");
const crypto = require("crypto");
const hash = crypto.createHash("md5");
const Website = require("./models/website");
const lighthouse = require("lighthouse");
const { default: fetch } = require("node-fetch");
const UswdsComponents = require("./models/uswdsComponents");
import * as wmd from "./websitesMetadata";
import * as utils from "./utils";

const formattedDate = utils.getFormattedDate();
const path = `data/${formattedDate}/`;

const devices = {
  mobile: puppeteer.devices["iPhone 11 Pro"],
  desktop: {
    name: "Windows Desktop",
    viewport: {
      width: 1920,
      height: 940,
      deviceScaleFactor: 1,
      isMobile: false,
      hasTouch: false,
      isLandscape: true,
    },
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36",
  },
};

/**
 * Scan fires off a number of functions which return results which are then composed in the buildOutput() function
 * @param {string} url
 * @param {boolean} headless
 */
async function scan(url, headless = true) {
  const domain = await utils.getDomain(url);
  console.log("Scanning", domain);
  const start = new Date().toISOString();
  console.log("Start time", start);
  fs.mkdir(path, { recursive: true }, function (dirErr) {
    if (dirErr) return;
  });

  // browser gets passed to all functions utilizing puppeteer
  const browser = await puppeteer.launch({ headless: headless });

  // mapping data elements
  const website = new Website.Website();
  website.scanDate = formattedDate;
  website.startTime = start;
  website.domain = domain;
  website.url = url;

  const { pageFound, message } = await initialCheck(browser, url);
  console.log("page found: ", pageFound);
  if (pageFound) {
    website.setScanStatus(`Page loaded successfully`);
    website.setScreenCapture(await screenshots(browser, url));
    website.setLighthouse(await lighthouseReport(browser, url));
    website.setPerformanceMetric(await itPerfMetricReport(browser, url));
    website.setUswdsComponents(await uswdsComponentsReport(browser, url));
    website.setSiteScanner(await siteScannerReport(domain));
    // If Site Scanner returns true for DAP but IT Perf metric does not, overwrite the value
    if (website.siteScanner.data.dap_detected_final_url) {
      website.performanceMetric.dap = true;
    }
  } else {
    website.setScanStatus(message);
    console.warn("full scan not retrieved");
  }

  website.endTime = new Date().toISOString();
  // now that we are done, close the browser instance
  await browser.close();

  await buildOutput(domain, website);
  console.log("Scan Complete", website.endTime);
}

const initialCheck = async function (browser, url) {
  const scanStatus = { pageFound: true, message: "" };
  const page = await browser.newPage();
  await page
    .goto(await utils.createUrl(url), { waitUntil: "networkidle2" })
    .catch((e) => {
      console.error("Initial check error: ", e);
      scanStatus.pageFound = false;
      scanStatus.message = `Initial check error: ${e}`;
    });
  return scanStatus;
};

const lighthouseReport = async function (browser, url) {
  const data = {};
  for (var device in devices) {
    const page = await browser.newPage();
    await page.emulate(devices[device]);
    await page
      .goto(await utils.createUrl(url), { waitUntil: "networkidle2" })
      .catch((e) => {
        console.error("Lighthouse error: ", e);
        return;
      });
    const options = {
      port: new URL(browser.wsEndpoint()).port,
      output: "json",
    };

    data[device] = await lighthouse(await utils.createUrl(url), options);
    delete data[device].lhr.stackPacks;
    delete data[device].lhr.i18n;
    delete data[device].lhr.timing;
    delete data[device].lhr.categoryGroups;
    delete data[device].artifacts;
    delete data[device].report;
  }
  return data;
};

const screenshots = async function (browser, url) {
  const domain = await utils.getDomain(url);
  let imgCaptures = [];
  for (var device in devices) {
    const page = await browser.newPage();
    await page.emulate(devices[device]);
    await page
      .goto(await utils.createUrl(url), { waitUntil: "networkidle2" })
      .catch((e) => {
        console.error("screenshots error: ", e);
        console.error("device", device);
        return;
      });
    const pageHash = await utils.printHash(url);
    const imgPath = `data/${formattedDate}/${domain}_${device}_${pageHash}.png`;

    await page.screenshot({
      path: imgPath,
    });
    imgCaptures.push({
      domain: domain,
      url: url,
      imgPath: imgPath,
      device: device,
    });
  }
  return imgCaptures;
};

const itPerfMetricReport = async function (browser, url) {
  const domain = await utils.getDomain(url);
  const regexs = {
    identifier: {
      regex: new RegExp("usa-identifier"),
      type: "other",
    },
    identifierPrivacy: {
      regex:
        /website-information\/website-policies|website-information\/privacy-and-security-notice|portal\/content\/116609/i,
      type: "link",
      titleRegex: "Privacy",
    },
    identifierCustomPrivacy: {
      regex: /<a.*?>(Privacy Policy|Privacy).*?<\/a>/i,
      type: "other",
      titleRegex: "customPrivacy",
    },
    identifierAccessibility: {
      regex:
        /website-information\/accessibility-aids|website-information\/website-policies|portal\/content\/116609/i,
      type: "link",
    },
    identifierFOIA: {
      regex: /reference\/freedom-of-information-act-foia|\/node\80729/i,
      type: "link",
    },
    dap: {
      regex: new RegExp(
        "https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js",
        "i"
      ),
      type: "other",
    },
    search: {
      regex:
        /https:\/\/search.usa.gov\/search|https:\/\/search.gsa.gov\/search|<label.*?>.*?Search.*?<\/label>|placeholder=('|")Search|aria-label="search.*"|type="search"/i,
      type: "other",
    },
    banner: {
      regex: new RegExp("usa-banner"),
      type: "other",
    },
    contact: {
      regex: new RegExp(
        "Contact Us|Contact|Get in touch|Email Us|Email|Get support|Help Desk|send us an email|d+(s|-)d+(s|-)d+|(d+)sd+-d+",
        "i"
      ),
      type: "other",
    },
  };

  const data = new Website.PerformanceMetric();
  const page = await browser.newPage();
  await page.setCacheEnabled(false);
  // check for the domain in websiteMetadata, if found, see if the cookies object has a non-blank name attribute.
  const siteMetadata = wmd.getWebsiteMetadata(wmd.websiteMetaData, domain);
  if (siteMetadata.cookies.name != "") {
    await page.setCookie(siteMetadata.cookies);
  }

  const response = await page
    .goto(await utils.createUrl(url), {
      waitUntil: "networkidle2",
    })
    .catch((e) => {
      console.error("IT Metric error: ", e);
      return;
    });
  data.hsts = response.headers().hasOwnProperty("strict-transport-security");
  const content = await page.content();

  // some pages load the content of the identifier at the end, give the page a grace period to see if it all loads
  try {
    await page.waitForSelector("a.usa-identifier__required-link.usa-link", {
      timeout: 10000,
    });
  } catch (e) {
    console.log(
      "timeout exceeded while waiting for usa-identifier selector - it may not exist"
    );
  }
  let reqdLinks;
  // loop through the list of regex patterns
  // this needs refactoring, looping through the list of regexs and sending off to the reqdLinkEvaluation is wonky
  for (let regex in regexs) {
    // test if regex pattern matches page content
    if (regexs[regex].regex.test(content)) {
      data[regex] = true;
    } else if (regexs[regex].type == "link") {
      console.log(`regex, ${regex} did not find a match`);
      // is there a reqd links array available
      if (typeof reqdLinks === "undefined") {
        // if not, get it
        reqdLinks = await reqdLinkEvaluation(browser, url);
      }
      // now that you have the array, start looping through it to look for matches
      for (let link in reqdLinks) {
        if (regexs[regex].regex.test(reqdLinks[link].url)) {
          data[regex] = true;
          break;
        }
      }
    }
    if (regex === "search" && !data[regex]) {
      // some websites do not require search per digital council recommendation. Check for sites in websitemetadata to see if searchNotReq is true
      data[regex] = siteMetadata.searchNotReq;
    }
    // some sites require a custom privacy policy, in that case check to see if a customPrivacyPolicy flag is listed
    if (regex === "identifierPrivacy" && !data[regex]) {
      // Check for sites in websitemetadata to see if customPrivacyPolicy is true
      data[regex] = siteMetadata.customPrivacyPolicy;
    }
  }
  return data;
};

/**
 * function looks for the identifier on the page and produces a list of links in the identifier. From there, each link is clicked and the resulting page url is reviewed for a match against the required links. This helps address single page applications which do not have hrefs but have onclick()
 *
 * @param browser
 * @param url
 * @returns Promise{array} linkDestinations - array of objects containing {title:"link title", url: "desination page url" }
 */
const reqdLinkEvaluation = async function (browser, url) {
  /* console.log(
    "...Double checking links to cover single page applications which do not use hrefs"
  ); */
  let i = 0;
  let linkDestinations = [];
  let reqdLinks = [];
  const page = await browser.newPage();

  await page.setCacheEnabled(false);
  do {
    const beforeClickTabCount = await browser
      .pages()
      .then((value) => value.length);
    let linkDestination = { title: "", url: "" };
    await page
      .goto(await utils.createUrl(url), {
        waitUntil: "networkidle2",
      })
      .catch((e) => {
        console.error("reqd links error: ", e);
        return;
      });
    // this list of ElementHandles are auto-disposed when the underlying page gets navigated. https://devdocs.io/puppeteer/#class-elementhandle. For this reason, the ElementHandles have to be re-gathered each time.
    reqdLinks = await page.$$("a.usa-identifier__required-link.usa-link");
    if (reqdLinks.length == 0) {
      return linkDestinations;
    }
    linkDestination.title = await reqdLinks[i].evaluate(
      (node) => node.innerText
    );
    await Promise.all([
      //page.waitForNavigation({ waitUntil: "domcontentloaded" }),
      //the onclick opens a new page
      reqdLinks[i].click(),
      page.waitForTimeout(1000),
    ]);
    // if the click creates a new tab, identify that here and fetch url from the new tab. Otherwise, fetch from current
    const pages = await browser.pages(); // get all pages
    const page2 = pages[pages.length - 1]; // get the new page
    //this shows the current URL- compare it with the list
    linkDestination.url = page2.url();
    if (pages.length > beforeClickTabCount) {
      await page2.close();
    }
    linkDestinations.push(linkDestination);
    i++;
  } while (i < reqdLinks.length);
  return linkDestinations;
};
const uswdsComponentsReport = async function (browser, url) {
  const data = new UswdsComponents.UswdsComponents();
  const page = await browser.newPage();
  await page
    .goto(await utils.createUrl(url), { waitUntil: "networkidle2" })
    .catch((e) => {
      console.error("USWDS error: ", e);
      return;
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
  return data;
};

const siteScannerReport = async function (domain) {
  const response = await fetch(
    `https://api.gsa.gov/technology/site-scanning/v1/websites/${domain}?api_key=${process.env.API_KEY}`
  );
  const data = await response.json();
  return data;
};

const buildOutput = async function (url, website) {
  const domain = await utils.getDomain(url);
  const pageHash = await utils.printHash(url);
  fs.writeFile(
    `${path}${domain}_${formattedDate}_${pageHash}.json`,
    JSON.stringify(website),
    (err) => {
      if (err) {
        console.error(err);
        return;
      }
    }
  );
};

const domains = [
  "gsa.gov",
  //"labs.gsa.gov", "acquisition.gov", "buy.gsa.gov"
];

(async () => {
  for (let domain in domains) {
    await scan(domains[domain], false);
  }
})();
