import { expect } from '@oclif/test';

import { collections } from '../../../../src/helpers/data/condense/collections';

/**
 * https://www.scaler.com/topics/compare-two-arrays-in-javascript/
 * given two arrays, checks to see they both contain the same values, irrespective of order
 * @param {string[]} a first array
 * @param {string[]} b first array
 * @return {boolean} indicating if the content of the arrays match.
 * */
const ignoreOrderCompare = (a: string[], b: string[]): boolean => {
  if (a.length !== b.length) return false;
  const elements = new Set([...a, ...b]);
  for (const x of elements) {
    const count1 = a.filter((e) => e === x).length;
    const count2 = b.filter((e) => e === x).length;
    if (count1 !== count2) {
      console.log(
        `TEST FAILURE: Element ${x} not found to match. Compare arrays under each version to determine the discrepancy. Each array should have the same content but does not have to be in the same order.`,
      );
      return false;
    }
  }

  return true;
};

/**
 * Given a javascript object, extract the values for a particular key
 * @param {Record<string,string>[]} obj javascript object containing key value pairs
 * @param {string} key a key contained in the object that you'd like to extract values from
 * @return {string[]} of values extracted using the key
 */
const getValues = (obj: Record<string, string>[], key: string): string[] => {
  const entries = Object.entries(obj).map(([index]) => obj[Number(index)][key]);

  return entries;
};

describe('Collections', () => {
  describe('Each version for a given presetName should have matching ID values', () => {
    // loop preset names
    for (const key of Object.keys(collections)) {
      it(`presetName: ${key}`, async () => {
        let prevVersion;
        for (const versionKey of Object.keys(collections[key])) {
          if (prevVersion !== undefined) {
            // compare previous to current
            expect(
              ignoreOrderCompare(
                prevVersion,
                getValues(collections[key][versionKey], 'id'),
              ),
            ).to.equal(true);
          }

          prevVersion = getValues(collections[key][versionKey], 'id');
        }
      });
    }
  });
});
