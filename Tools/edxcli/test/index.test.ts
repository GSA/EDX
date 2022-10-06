import { expect } from '@oclif/test';
import BaseCommand from '../src/base';

describe('BaseCommand', () => {
  describe('formattedDate()', () => {
    const testDates = [
      ['January 1, 1995 03:24:00', '19950101', '19950101_0324'],
      ['October 1, 1995 13:09:00', '19951001', '19951001_1309'],
      ['December 12, 1995 23:00:00', '19951212', '19951212_2300'],
    ];

    for (const element of testDates) {
      class Base extends BaseCommand<any> {
        run(): PromiseLike<any> {
          throw new Error('Method not implemented.');
        }

        static date = new Date(element[0]);
      }

      it(`If today is ${element[0]}, date returned is formatted correctly as ${element[1]}`, async () => {
        const formattedDate = Base.formattedDate();
        expect(formattedDate).to.equal(element[1]);
      });
    }
  });
});
