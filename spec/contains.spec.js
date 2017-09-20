const path = require('path');
const { expect } = require('chai');

let _ = require(path.join(__dirname, '../lib/contains'));


describe('#contains', () => {
    it('is a function', () => {
      expect(_.contains).to.be.a('function');
    });
    it('should return true if the number is in the list', () => {
      expect(_.contains([1, 2, 3, 4, 5, 6], 2)).to.equal(true);
    });
    it('should return false if the number is in the list', () => {
        expect(_.contains([1, 2, 3, 4, 5, 6], 7)).to.equal(false);
      });
    it('should work for strings when true', () => {
      expect(_.contains(['happy', 'sad', 'delighted'], 'sad')).to.equal(true);
    });
    it('should work for strings when false', () => {
        expect(_.contains(['happy', 'sad', 'delighted'], 'tulip')).to.equal(false);
      });
    it('it should start fromIndex position when passed', () => {
      expect(_.contains([1, 2, 3, 4, 5, 6], 5, 6)).to.equal(false);
      expect(_.contains([1, 2, 3, 4, 5, 6], 4, 2)).to.equal(true);
      expect(_.contains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 7, 4)).to.equal(true);
      expect(_.contains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 7, 8)).to.equal(false);
    });
  });