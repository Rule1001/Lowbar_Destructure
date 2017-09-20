const path = require('path');
const { expect } = require('chai');

let _ = require(path.join(__dirname, '../lib/shuffle'));

describe('shuffle', () => {
    it('is a function', () => {
      expect(_.shuffle).to.be.a('function');
    });
    it('should receive 1 argument', () => {
      expect(_.shuffle.length).to.equal(1);
    });
    it('should return a randomly shuffled array of the same length', () => {
      const sortedArray = [1, 2, 3, 4, 5];
      expect(_.shuffle(sortedArray)).to.have.lengthOf(5);
    });
    it('should return an empty array for invalid arguments', () => {
      expect(_.shuffle()).to.eql([]);
      expect(_.shuffle(10)).to.eql([]);
    });
  });