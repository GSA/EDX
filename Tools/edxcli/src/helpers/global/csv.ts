const createCsvWriter = require('csv-writer').createObjectCsvWriter;
import * as Debug from 'debug';
const debug = Debug.default('edxcli:helpers:global:csv');

import { mkdirSync } from 'node:fs';
import path from 'node:path';

export default class CSV {
  callingOperation: string;
  csvWriter: any;
  formattedDate: string;
  outputDirectory: string;
  path: string;

  constructor(
    formattedDate: string,
    outputDirectory: string,
    callingOperation: string,
    headers: CsvHeaders[],
  ) {
    debug('Constructing a new instance of the CSV class');
    this.formattedDate = formattedDate;
    this.outputDirectory = outputDirectory;
    this.callingOperation = callingOperation;
    this.path = path.join(
      process.cwd(),
      outputDirectory,
      `${this.callingOperation}_${this.formattedDate}.csv`,
    );
    debug('CSV output path: %s', this.path.toString());
    this.csvWriter = createCsvWriter({
      path: this.path,
      // create map of csv headers to json elements
      header: headers,
    });
    debug('Creating directory(s) if they do not exist');
    mkdirSync(path.join(process.cwd(), this.outputDirectory), {
      recursive: true,
    });
  }

  async write(data: any[]): Promise<string> {
    debug('Writing CSV file');
    const message = await this.csvWriter.writeRecords(data).then(() => {
      return `${this.callingOperation} data written to ${this.path}`;
    });
    return message;
  }
}

interface CsvHeaders {
  id: string;
  title: string;
}
