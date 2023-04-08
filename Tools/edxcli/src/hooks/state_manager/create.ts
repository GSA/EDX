import { Hook } from '@oclif/core';
import * as Debug from 'debug';
const debug = Debug.default('edxcli:hooks:state_manager:create');

import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

/**
 * Hook implementation to create a locally cached file which will allow for resumption of activities. Writes a json file to the cacheDir.
 * @param options object containing 'command' and 'data' keys
 * @returns Promise<void>
 */
const hook: Hook<'state_manager:create'> = async function (
  options,
): Promise<void> {
  debug('Create hook called');
  if (!options.command || !options.data) {
    this.log('Missing parameters to create cached file, exiting...', 'info');
    return;
  }

  const filePath = path.join(this.config.cacheDir, `${options.command}.json`);
  this.log(`Caching the list at ${filePath}`);
  if (!existsSync(this.config.cacheDir)) {
    mkdirSync(this.config.cacheDir);
  }

  debug('Writing cache');
  writeFileSync(filePath, JSON.stringify(options.data));
};

export default hook;
