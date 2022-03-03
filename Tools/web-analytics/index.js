/* mostViewedPages.js
 * This file consumes a csv as exported from Google Analytics to identify the most visited page on a given domain (hostname)
 * Expected Row Headers include: Hostname,Page,Pageviews,Unique Pageviews,Avg. Time on Page,Entrances,Bounce Rate,% Exit,Page Value
 */
const fs = require("fs");
const fsp = require("fs").promises;
const _ = require("lodash");
const csv = require("csv-parser");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const path = require("path");
const date = new Date();
const formattedDate = `${date.getFullYear()}${date.getMonth() < 10 ? "0" : ""}${
  date.getMonth() + 1
}${date.getDate() < 10 ? "0" : ""}${date.getDate()}`;

/* Adustable config */
const topXPages = 2;
const dataDirectory = path.join(__dirname, "data/");
const inputFilePath = path.join(
  dataDirectory,
  "/ga-exports/all_GSA_pages_20220301.csv"
);

let dataObj = {};
/*{
    "usa.gov": {'csvdata':1},
    "gsa.gov": {'csvdata':2}
}*/
//Hostname,Page,Pageviews,Unique Pageviews,Avg. Time on Page,Entrances,Bounce Rate,% Exit,Page Value
fs.createReadStream(inputFilePath)
  .pipe(csv())
  .on("data", function (row) {
    // if the property is present
    if (dataObj.hasOwnProperty(row["Hostname"])) {
      // push the entry onto the array
      // sort it
      // drop last all but the first two elements
      dataObj[row["Hostname"]].push(row);
      dataObj[row["Hostname"]].sort(comparePageviews);
      while (dataObj[row["Hostname"]].length > topXPages) {
        dataObj[row["Hostname"]].pop();
      }
    } else {
      dataObj[row["Hostname"]] = [row];
    }
  })
  .on("end", function () {
    fs.writeFile(
      `${dataDirectory}/outputs/mostviewedpages_${formattedDate}.json`,
      JSON.stringify(dataObj),
      (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
        csvOutput();
      }
    );
  });

const comparePageviews = async function (first, second) {
  if (parseInt(first.Pageviews) > parseInt(second.Pageviews)) {
    return -1;
  } else if (parseInt(first.Pageviews) < parseInt(second.Pageviews)) {
    return 1;
  } else {
    return 0;
  }
};

/* CSV OPERATIONS */
const csvWriter = createCsvWriter({
  path: `${dataDirectory}/outputs/mostviewedpages_${formattedDate}.csv`,
  // create map of csv headers to json elements
  header: [
    { id: "Hostname", title: "Hostname" },
    { id: "Page", title: "Page" },
    { id: "Pageviews", title: "Pageviews" },
    { id: "Unique Pageviews", title: "Unique Pageviews" },
    { id: "Avg. Time on Page", title: "Avg. Time on Page" },
    { id: "Entrances", title: "Entrances" },
    { id: "Bounce Rate", title: "Bounce Rate" },
    { id: "% Exit", title: "% Exit" },
    { id: "Page Value", title: "Page Value" },
  ],
});
const extractDataPoints = async function (data) {
  let extract = [];
  const csvHeaders = csvWriter.csvStringifier.header;
  console.log(csvHeaders);
  let x = 0;
  // fix this loop
  for (const item in data) {
    if (x < 1) {
      console.log("data item", data[item]);
    }
    for (const i in data[item]) {
      if (x < 1) {
        console.log("data item x", data[item][i]);
      }

      extract.push(data[item][i]);
    }
    x++;
  }

  return extract;
};

const csvOutput = async function () {
  const data = JSON.parse(
    await fsp.readFile(
      `${dataDirectory}/outputs/mostviewedpages_${formattedDate}.json`
    )
  );

  const extract = await extractDataPoints(data);
  await csvWriter.writeRecords(extract);
};
