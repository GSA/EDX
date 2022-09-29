import { expect } from '@oclif/test';
import { tmpdir } from 'node:os';
import { readFileSync, unlink } from 'node:fs';
import { createHttpsUrl, writeJSONFile } from '../../src/helpers/global/utils';

describe('Utils', () => {
  describe('createHttpsUrl', () => {
    const inputOutputPairs: Record<string, string> = {
      'gsa.gov': 'https://gsa.gov/',
      'www.gsa.gov': 'https://www.gsa.gov/',
      'thissite.com': 'https://thissite.com/',
      'http://gsa.gov': 'https://gsa.gov/',
    };

    it('should return valid https:// urls', async () => {
      for (const item in inputOutputPairs) {
        if (Object.prototype.hasOwnProperty.call(inputOutputPairs, item)) {
          // eslint-disable-next-line no-await-in-loop
          const newUrl = await createHttpsUrl(item);
          expect(newUrl.toString()).to.equal(inputOutputPairs[item]);
        }
      }
    });
  });
  describe('writeJSONFile', () => {
    const jsonData = {
      a: 'hello',
      b: ['a', 'b', 'c'],
      c: { name: 'Jane', id: 123 },
    };
    const filename = 'testfile';
    const fileDate = '20220615';
    it('should write a json file at the desired location without a date', async () => {
      await writeJSONFile(jsonData, tmpdir(), filename);
      const fileContent = readFileSync(`${tmpdir()}/${filename}.json`, {
        encoding: 'utf8',
      });
      expect(fileContent).to.equal(JSON.stringify(jsonData));
    });
    it('should write a json file at the desired location with a date', async () => {
      await writeJSONFile(jsonData, tmpdir(), filename, fileDate);
      const fileContentDate = readFileSync(
        `${tmpdir()}/${fileDate}_${filename}.json`,
        {
          encoding: 'utf8',
        },
      );
      expect(fileContentDate).to.equal(JSON.stringify(jsonData));
    });
    after(() => {
      unlink(`${tmpdir()}/${filename}.json`, (err) => {
        if (err) throw err;
      });
      unlink(`${tmpdir()}/${fileDate}_${filename}.json`, (err) => {
        if (err) throw err;
      });
    });
  });
});
