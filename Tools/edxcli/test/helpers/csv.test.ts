import { expect } from '@oclif/test';
import { tmpdir } from 'node:os';
import { unlink } from 'node:fs';
import CSV from '../../src/helpers/global/csv';

describe('CSV', () => {
  describe('construct CSV Class', () => {
    const headers = [
      { id: 'domain', title: 'Domain' },
      { id: 'pageViews', title: 'Page Views' },
    ];
    const data = [
      { domain: 'accessibility.digital.gov', pageViews: 12 },
      { domain: 'acquisition.gov', pageViews: 20 },
      { domain: 'ask.gsa.gov', pageViews: 72 },
      { domain: 'autoauctions.gsa.gov', pageViews: 88 },
      { domain: 'blog.usa.gov', pageViews: 98 },
      { domain: 'brand.18f.gov', pageViews: 12 },
      { domain: 'calc.gsa.gov', pageViews: 14 },
      { domain: 'catalog.data.gov', pageViews: 7 },
      { domain: 'cfo.gov', pageViews: 2 },
    ];
    const callingOperation = 'operationX';
    const csv = new CSV('20220615', tmpdir(), callingOperation, headers);

    it('should write and create a csv file', async () => {
      csv.write(data).then((msg) => {
        expect(msg).to.equal(`${callingOperation} data written to ${tmpdir()}`);
      });
    });

    after(() => {
      unlink(csv.path, (err) => {
        if (err) throw err;
      });
    });
  });
});
