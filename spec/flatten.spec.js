const path = require('path');
const { expect } = require('chai');

let _ = require(path.join(__dirname, '../lib/flatten'));


describe('flatten', () => {
    it('is a function', () => {
      expect(_.flatten).to.be.a('function');
    });
    it('handles all invalid inputs', () => {
      expect(_.flatten()).to.eql([]);
      expect(_.flatten({ 10: 10 })).to.eql([]);
    });
    it('works for a single nested array', () => {
      expect(_.flatten([1, [2]])).to.eql([1, 2]);
    });
    it('flattens multiple layers of nested arrays', () => {
      expect(_.flatten([1, [[[2]]]])).to.eql([1, 2]);
      expect(_.flatten([1, [[[[2, [[[[[3]]]]]]]]]])).to.eql([1, 2, 3]);
    });
    it('accepts a shallow parameter flatten just one level', () => {
      expect(_.flatten([1, [[[[2]]]]], true)).to.eql([1, [[[2]]]]);
    });
    it('it flattens all paramaeters when passed shallow undefined', () => {
        expect(_.flatten([1, [[[[2]]]]], undefined)).to.eql([1, 2]);
      });
  });