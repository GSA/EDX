import { Hook } from '@oclif/core';
import * as Debug from 'debug';
const debug = Debug.default('edxcli:helpers:airtable');

import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { retrieveFile } from './helper';

/**
 * Provided the name of a json file, opens it and removes the first element in the array.
 * @param options object containing the 'command' key
 * @returns Promise<void>
 */
const hook: Hook<'state_manager:update'> = async function (
  options,
): Promise<void> {
  debug('Hook called');
  if (!options.command) {
    this.log('Missing parameters to update cached file, exiting...', 'info');
    return;
  }

  this.log('Removing item from list');
  const fileName = path.join(this.config.cacheDir, `${options.command}.json`);
  const data = await retrieveFile(fileName);
  data.shift();

  writeFileSync(fileName, JSON.stringify(data));
};

export default hook;
