import { expect } from '@oclif/test';
import { createHttpsUrl } from '../../src/helpers/global/utils';

describe('Utils', () => {
  describe('createHttpsUrl', () => {
    const inputOutputPairs: Record<string, string> = {
      'gsa.gov': 'https://gsa.gov/',
      'www.gsa.gov': 'https://www.gsa.gov/',
      'thissite.com': 'https://thissite.com/',
      'http://gsa.gov': 'https://gsa.gov/',
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
});
