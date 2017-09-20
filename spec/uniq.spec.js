const path = require('path');
const { expect } = require('chai');

let _ = require(path.join(__dirname, '../lib/uniq'));


describe('#uniq', () => {
    it('to be a function', () => {
      expect(_.uniq).to.be.a('function');
    });
    it('should return an empty array if passed an empty array', () => {
      const array = [];
      expect(_.uniq(array)).to.eql([]);
    });
    it('should return a new array without duplicates of numbers', () => {
      const array = [1, 3, 5, 7, 9, 11, 1, 5, 6, 6 , 2, 11];
      expect(_.uniq(array)).to.eql([1, 3, 5, 7, 9, 11, 6, 2]);
    });
    it('should return a new array without duplicates of words', () => {
      expect(_.uniq(['house', 'mouse', 'bench', 'monster', 'house', 'bench'])).to.eql([
        'house','mouse', 'bench', 'monster'
      ]);
    });
  });