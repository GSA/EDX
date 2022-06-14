require("dotenv").config();
const yaml = require("js-yaml");
const fs = require("fs").promises;
import * as utils from "./utils";
const formattedDate = utils.getFormattedDate();
const AIRTABLE_TABLES = {
  websites: "tblFUfp0KQibuCTeb",
  "website-evals": "tblEc5CVjvlElEz8l",
};
const AIRTABLE_FIELDS = {
  "website-evals": {
    Site: { id: "fldEJKjLyRz34tQzh", name: "Site" },
  },
  websites: {
    website: { id: "fldFrU6QZcwAdraF7", name: "Site" },
    active: { id: "fldnjl7wNChb5d6Vu", name: "Active" },
    office: { id: "fldF6peALqDlbDlBp", name: "Office" },
    "sub-office": { id: "fldAsCVsayge6mxhK", name: "Sub-Office" },
    "website-platform": { id: "fldOEB2p3zzQJUfX8", name: "" },
    "digital-brand-category": {
      id: "fldEJNQ2Bp76EHPPB",
      name: "Digital Brand Category",
    },
    "type-of-domain": { id: "fld76C5VCbbfQ0w4v", name: "Type of Domain" },
    "score-customer-centricity": {
      id: "fldWhw3jTSLJzbbx4",
      name: "Statuscard Score - Customer Centricity",
    },
    "score-mobile-perf": {
      id: "fldfvDZZqPnb2qbsG",
      name: "Statuscard Score - Mobile Performance Rollup (from USWDS, Performance)",
    },
    "score-amp": { id: "fldN3wy0EtgQ1aU4w", name: "Statuscard Score - AMP" },
    "score-ga": { id: "fldkwF5Zusr17tBcu", name: "Statuscard Score - GA data" },
    "score-uswds": {
      id: "fld6u0AYPH52m19iP",
      name: "Statuscard Score - USWDS",
    },
    "score-reqd-links": {
      id: "fldfQdluzWsPP2aty",
      name: "Statuscard Score - Required Links",
    },
  },
};
const AIRTABLE_BASE = "appaxAzqTVnbOf7cm";

const base = require("airtable").base(AIRTABLE_BASE);
var Airtable = require("airtable");
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: `${process.env.AIRTABLE_API_KEY}`,
});

let data = [];
base(AIRTABLE_TABLES.websites)
  .select({
    fields: [
      AIRTABLE_FIELDS.websites.website.id,
      AIRTABLE_FIELDS.websites.office.id,
      AIRTABLE_FIELDS.websites["sub-office"].id,
      AIRTABLE_FIELDS.websites["website-platform"].id,
      AIRTABLE_FIELDS.websites["digital-brand-category"].id,
      AIRTABLE_FIELDS.websites["type-of-domain"].id,
      AIRTABLE_FIELDS.websites["score-amp"].id,
      AIRTABLE_FIELDS.websites["score-customer-centricity"].id,
      AIRTABLE_FIELDS.websites["score-ga"].id,
      AIRTABLE_FIELDS.websites["score-mobile-perf"].id,
      AIRTABLE_FIELDS.websites["score-reqd-links"].id,
      AIRTABLE_FIELDS.websites["score-uswds"].id,
    ],
    sort: [{ field: AIRTABLE_FIELDS.websites.website.id, direction: "asc" }],
    // Selecting the first 3 records in Grid view:
    view: "Sites w Evals",
  })
  .eachPage(
    function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      records.forEach(function (record) {
        data.push(organizeResult(record));
      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
    },
    function done(err) {
      if (err) {
        console.error(err);
        return;
      }
      fs.writeFile(
        `../../docs/_data/legacy/websites_${formattedDate}.yml`,
        yaml.dump(data),
        (err) => {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
      fs.writeFile(`../../docs/_data/websites.yml`, yaml.dump(data), (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });
    }
  );

const organizeResult = function (record) {
  return {
    name: record.fields[AIRTABLE_FIELDS.websites.website.name],
    office: record.fields[AIRTABLE_FIELDS.websites.office.name],
    subOffice: record.fields[AIRTABLE_FIELDS.websites["sub-office"].name],
    digitalBrandCategory:
      record.fields[AIRTABLE_FIELDS.websites["digital-brand-category"].name],
    typeOfDomain:
      record.fields[AIRTABLE_FIELDS.websites["type-of-domain"].name],
    //platform: platforms[getRandNo(7)],
    datapointA: {
      val: record.fields[
        AIRTABLE_FIELDS.websites["score-customer-centricity"].name
      ],
      max: 1,
    },
    datapointB: {
      val: record.fields[AIRTABLE_FIELDS.websites["score-reqd-links"].name],
      max: 1,
    },
    datapointC: {
      val: record.fields[AIRTABLE_FIELDS.websites["score-mobile-perf"].name],
      max: 1,
    },
    datapointD: {
      val: record.fields[AIRTABLE_FIELDS.websites["score-amp"].name],
      max: 1,
    },
    datapointE: {
      val: record.fields[AIRTABLE_FIELDS.websites["score-ga"].name],
      max: 1,
    },
    datapointF: {
      val: record.fields[AIRTABLE_FIELDS.websites["score-uswds"].name],
      max: 1,
    },
  };
};
