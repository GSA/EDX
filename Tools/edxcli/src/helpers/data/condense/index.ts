import _ from 'lodash';
import path from 'node:path';
import fs from 'node:fs/promises';
import CSV from '../../global/csv';
import { presets, CsvHeaderType } from './presets';

export class CondenseHelper {
  formattedDate: string;
  outputDirectory: string;
  folderList: string;
  preset: string;
  csvHeaders: CsvHeaderType[];
  csvWriter: CSV;
  fileParsePromiseArray: any[];

  constructor(formattedDate: string, flags: any) {
    this.formattedDate = formattedDate;
    this.outputDirectory = flags.output;
    this.folderList = flags.folders;
    this.preset = flags.preset;
    this.csvHeaders = presets[flags.preset]
      ? presets[flags.preset]
      : presets.default;
    this.csvWriter = new CSV(
      formattedDate,
      this.outputDirectory,
      'condense',
      this.csvHeaders,
    );
    this.fileParsePromiseArray = [];
  }

  async findFiles(folderName: string): Promise<void> {
    const files = await fs.readdir(folderName, {
      withFileTypes: true,
    });

    // THIS SHOULD MOVE TO A PROMISE.ALL CONSTRUCT
    for (const file of files) {
      if (file.isDirectory()) {
        // eslint-disable-next-line no-await-in-loop
        await this.findFiles(`${folderName}/${file.name}`);
      } else if (path.extname(`${folderName}/${file.name}`) === '.json') {
        try {
          this.fileParsePromiseArray.push(
            JSON.parse(
              // eslint-disable-next-line no-await-in-loop
              await fs.readFile(
                path.join(process.cwd(), folderName, file.name),
                'utf-8',
              ),
            ),
          );
        } catch (error) {
          console.error(
            `Unable to read ${path.join(process.cwd(), folderName, file.name)}`,
            error,
          );
        }
      }
    }
  }

  async extractDataPoints(data: any): Promise<{ [key: string]: string }[]> {
    const extractArray: { [key: string]: string }[] = [];
    for (const row in data) {
      if (Object.prototype.hasOwnProperty.call(data, row)) {
        const extract: { [key: string]: string } = {};

        for (const col in this.csvHeaders) {
          if (Object.prototype.hasOwnProperty.call(this.csvHeaders, col)) {
            extract[this.csvHeaders[col].id] = _.get(
              data[row],
              this.csvHeaders[col].id,
            );
          }
        }

        extractArray.push(extract);
      }
    }

    return extractArray;
  }

  async run(): Promise<void> {
    const folderArray = this.folderList ? this.folderList.split(',') : [];
    if (folderArray.length > 0) {
      for (const folder in folderArray) {
        if (Object.prototype.hasOwnProperty.call(folderArray, folder)) {
          const dirName = `data/scans/${folderArray[folder]}`;
          // eslint-disable-next-line no-await-in-loop
          await this.findFiles(dirName);
        }
      }
    } else {
      console.log(
        `consolidating entire data/scans/ directory. You can specify a subset of folders by passing the --folders parameter. This expects the folder to be present in the data/scans directory.`,
      );
      await this.findFiles('data/scans');
    }

    const extractData = await Promise.all(this.fileParsePromiseArray).then(
      (values) => {
        return this.extractDataPoints(values);
      },
    );
    this.csvWriter.write(extractData);
  }
}
