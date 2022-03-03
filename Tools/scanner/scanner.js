const puppeteer = require("puppeteer");
const crawler = require("crawler");
require("dotenv").config();
const fs = require("fs");
const crypto = require("crypto");
const hash = crypto.createHash("md5");
const Website = require("./models/website");
const lighthouse = require("lighthouse");
const fetch = require("node-fetch");
const UswdsComponents = require("./models/uswdsComponents");

const date = new Date();
const formattedDate = `${date.getFullYear()}${date.getMonth() < 10 ? "0" : ""}${
  date.getMonth() + 1
}${date.getDate() < 10 ? "0" : ""}${date.getDate()}`; //_${date.getHours()}${date.getMinutes() < 10 ? "0" : ""}${date.getMinutes()}`;
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
async function getDomain(url) {
  return url.replace(/\/.*/, "");
}
async function printHash(text) {
  hash.update(text);
  return hash.copy().digest("hex");
}
/**
 * Scan fires off a number of functions which return results which are then composed in the buildOutput() function
 * @param {string} url
 * @param {boolean} headless
 * @param {Date} date
 */
async function scan(url, headless = true) {
  const domain = await getDomain(url);
  console.log("Scanning", domain);
  const start = new Date();
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
  website.setScreenCapture(await screenshots(browser, url));
  website.setLighthouse(await lighthouseReport(browser, url));
  website.setPerformanceMetric(await itPerfMetricReport(browser, url));
  website.setUswdsComponents(await uswdsComponentsReport(browser, url));
  website.setSiteScanner(await siteScannerReport(domain));
  website.endTime = new Date();
  // now that we are done, close the browser instance
  await browser.close();
  // If Site Scanner returns true for DAP but IT Perf metric does not, overwrite the value
  if (website.siteScanner.data.dap_detected_final_url) {
    website.performanceMetric.dap = true;
  }

  await buildOutput(domain, website);
  console.log("Scan Complete", website.endTime);
}

const lighthouseReport = async function (browser, url) {
  const data = {};
  for (var device in devices) {
    const page = await browser.newPage();
    await page.emulate(devices[device]);
    await page
      .goto(await createUrl(url), { waitUntil: "networkidle2" })
      .catch((e) => {
        console.error("Lighthouse error: ", e);
        return;
      });
    const options = {
      port: new URL(browser.wsEndpoint()).port,
      output: "json",
    };

    data[device] = await lighthouse(await createUrl(url), options);
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
  const domain = await getDomain(url);
  let imgCaptures = [];
  for (var device in devices) {
    const page = await browser.newPage();
    await page.emulate(devices[device]);
    await page
      .goto(await createUrl(url), { waitUntil: "networkidle2" })
      .catch((e) => {
        console.error("screenshots error: ", e);
        console.error("device", device);
        return;
      });
    const pageHash = await printHash(url);
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
  const regexs = {
    identifier: {
      regex: new RegExp("usa-identifier"),
      type: "other",
    },
    identifierPrivacy: {
      regex: new RegExp(
        "https://www.gsa.gov/website-information/website-policies|website-information/website-policies",
        "i"
      ),
      type: "link",
      titleRegex: "Privacy",
    },
    identifierAccessibility: {
      regex: new RegExp(
        "https://www.gsa.gov/website-information/website-policies|website-information/website-policies",
        "i"
      ),
      type: "link",
    },
    identifierFOIA: {
      regex: new RegExp(
        "https://www.gsa.gov/reference/freedom-of-information-act-foia",
        "i"
      ),
      type: "link",
    },
    dap: {
      regex: new RegExp(
        "https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js",
        "i"
      ),
      type: "link",
    },
    search: {
      regex:
        /https:\/\/search.usa.gov\/search|https:\/\/search.gsa.gov\/search|<label.*?>Search.*?<\/label>|placeholder=('|")Search|aria-label="search.*"/i,
      type: "link",
    },
    banner: {
      regex: new RegExp("usa-banner"),
      type: "other",
    },
    contact: {
      regex: new RegExp(
        "Contact Us|(?<!-)Contact|Get in touch|Email Us|Help Desk|d+(s|-)d+(s|-)d+|(d+)sd+-d+",
        "i"
      ),
      type: "other",
    },
  };

  const data = new Website.PerformanceMetric();
  const page = await browser.newPage();
  await page.setCacheEnabled(false);
  const response = await page
    .goto(await createUrl(url), {
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
    console.log("timeout issue");
  }
  let reqdLinks;
  for (let regex in regexs) {
    if (regexs[regex].regex.test(content)) {
      data[regex] = true;
    } else if (regexs[regex].type == "link") {
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
  }
  return data;
};

const reqdLinkEvaluation = async function (browser, url) {
  console.log(
    "...Double checking links to cover single page applications which do not use hrefs"
  );
  let i = 0;
  let linkDestinations = [];
  let reqdLinks = [];
  const page = await browser.newPage();
  console.log(
    "browser tab count: ",
    await browser.pages().then((value) => value.length)
  );
  await page.setCacheEnabled(false);
  do {
    console.log("loop: ", i);
    const beforeClickTabCount = await browser
      .pages()
      .then((value) => value.length);
    linkDestination = { title: "", url: "" };
    await page
      .goto(await createUrl(url), {
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
    .goto(await createUrl(url), { waitUntil: "networkidle2" })
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
  const domain = await getDomain(url);
  const pageHash = await printHash(url);
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

const createUrl = async function (domain) {
  const regex = /(http:\/\/|https:\/\/)/;
  if (regex.test(domain)) {
    return domain;
  } else {
    return `https://${domain}`;
  }
};

const domains = [
  //"labs.gsa.gov",
  //"property.reporting.gov",
  //"www.travel.reporting.gov",
  //"disposal.gsa.gov",
  "cmls.gsa.gov",
  //"fairs.reporting.gov",
  //"realpropertyprofile.gov",
];

(async () => {
  for (let domain in domains) {
    await scan(domains[domain], false, formattedDate);
  }
})();
