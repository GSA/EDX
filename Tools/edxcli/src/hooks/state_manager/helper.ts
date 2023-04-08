import * as Debug from 'debug';
const debug = Debug.default('edxcli:hooks:state_manager:helper');

import { existsSync, readFileSync } from 'node:fs';

/**
 * Reads a file from disk. If no file found, returns and empty array
 * @param fileName full filepath to file
 * @returns array
 */
export const retrieveFile = async (fileName: string): Promise<string[]> => {
  debug('Retrieving file');
  if (!existsSync(fileName)) {
    return JSON.parse('[]');
  }

  return JSON.parse(readFileSync(fileName, { encoding: 'utf-8' }));
};
