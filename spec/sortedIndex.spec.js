const path = require('path');
const { expect } = require('chai');

let _ = require(path.join(__dirname, '../lib/sortedIndex'));

describe('sortedIndex', () => {
    it('is a function', () => {
      expect(_.sortedIndex).to.be.a('function');
    });
    it('will return the index position where the value should be inserted', () => {
      const actual = _.sortedIndex([1, 2, 3, 5, 6], 4);
      const expected = 3;
      expect(actual).to.equal(expected);
    });
    it('handles invalid inputs', () => {
      expect(_.sortedIndex()).to.equal(0);
      expect(_.sortedIndex(null)).to.equal(0);
      expect(_.sortedIndex(false)).to.equal(0);
    });
  });