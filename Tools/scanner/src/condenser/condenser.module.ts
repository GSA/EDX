// @ts-check

const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const fs = require("fs").promises;
import path from "path";
import _ from "lodash";
import * as utils from "../utils";
import { headerConfigurations } from "./csvHeaders";

let args = require("minimist")(process.argv.slice(2), {
  string: "folders",
  alias: { f: "folders" },
});

const formattedDate = utils.getFormattedDate("YYYYMMDD_HHMM");
export const outputPath = `data/output_${formattedDate}.csv`;
const csvHeaders = headerConfigurations.default;

const csvWriter = createCsvWriter({
  path: outputPath,
  // create map of csv headers to json elements
  header: csvHeaders,
});

export const findFiles = async function (folderName: string): Promise<void> {
  const files = await fs.readdir(folderName, {
    withFileTypes: true,
  });
  for (const file of files) {
    if (file.isDirectory()) {
      await findFiles(`${folderName}/${file.name}`);
    } else {
      if (path.extname(`${folderName}/${file.name}`) === ".json") {
        const data = JSON.parse(
          await fs.readFile(
            path.join(process.cwd(), folderName, file.name),
            "utf-8"
          )
        );
        const extract = await extractDataPoints(data);
        await csvWriter.writeRecords([extract]);
      }
    }
  }
};

export const extractDataPoints = async (
  data: any
): Promise<{ [key: string]: string }> => {
  let extract = {};
  for (const col in csvHeaders) {
    extract[csvHeaders[col].id] = _.get(data, csvHeaders[col].id);
  }
  return extract;
};

export const run = async () => {
  const folderArray = args.folders ? args.folders.split(",") : [];
  if (folderArray.length > 0) {
    for (var folder in folderArray) {
      const dirName = `data/${folderArray[folder]}`;
      await findFiles(dirName);
    }
  } else {
    console.log(`consolidating entire data/ directory. You can specify a subset of folders by passing the --folders parameter. This expects the folder to be present in the data/ directory. 
    npm run condense -- --folders="folder1,folder2"
    `);

    const dirName = `data/`;
    await findFiles(dirName);
  }
};
