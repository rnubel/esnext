import check from './support/check';
import { Syntax } from 'estraverse';

describe('Object Computed Plugin test', () => {
  it('moves single-line computed properties from assignments to empty objects', () => {
    check(`
      o = {};
      o[a] = 1;
    `, `
      o = { [a]: 1 };
    `);
  });

  it('moves single-line computed properties from assignments to single-line objects', () => {
    check(`
      o = { a: 1 };
      o[a] = 2;
    `, `
      o = { a: 1, [a]: 2 };
    `);
  });

  it('moves multi-line computed properties from assignments to single-line objects by making them multi-line', () => {
    check(`
      o = { a: 1 };
      o[a] = function() {
        return 0;
      };
    `, `
      o = {
        a: 1,
        [a]() {
          return 0;
        }
      };
    `);
  });
});
