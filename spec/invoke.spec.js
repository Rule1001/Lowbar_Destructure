const path = require('path');
const { expect } = require('chai');

let _ = require(path.join(__dirname, '../lib/invoke'));

describe('invoke', () => {
    it('is a function', () => {
      expect(_.invoke).to.be.a('function');
    });
    it('invokes the method for each element on the list and returns the result', () => {
      expect(_.invoke([[3, 2, 1]], 'sort')).to.eql([[1, 2, 3]]);
      const actual = _.invoke([[3, 2, 1], [4, 3, 2]], 'sort');
      const expected = [[1, 2, 3], [2, 3, 4]];
      expect(actual).to.eql(expected);
    });
    it('invokes the method given with the arguments provided', () => {
      const iteratee = e => e > 2;
      const actual = _.invoke([[3, 2, 1], [4, 3, 2]], 'filter', iteratee);
      const expected = [[3], [4, 3]];
      expect(actual).to.eql(expected);
    });
    it('handles objects inputs', () => {
      const actual = _.invoke({ one: 1, two: 2 }, 'toString');
      const expected = ['1', '2'];
      expect(actual).to.eql(expected);
    });
    it('handles invalid inputs', () => {
      expect(_.invoke()).to.eql([]);
      expect(_.invoke([3, 2])).to.eql([undefined, undefined]);
    });
  });