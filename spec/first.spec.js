const path = require('path');
const { expect } = require('chai');

let _ = require(path.join(__dirname, '../lib/first'));


describe('#first', () => {
    it('is a function', () => {
        expect(_.first).to.be.a('function');
    });
    it('returns nothing for an empty array', () => {
        let result = _.first([]);
        expect(result).to.equal();
    });
    it('returns the first element if no n provided', () => {
        let result = _.first([1, 2, 3, 4, 5, 6]);
        expect(result).to.eql(1);
    });
    it('returns the first n elements if n is provided', () => {
        let n = 2;
        let result = _.first([1, 2, 3, 4, 5, 6], n);
        expect(result).to.eql([1, 2]);
    });
    it('returns the whole array if n is higher than the length of the array', () => {
        let n = 10;
        let result = _.first([1, 2, 3, 4, 5, 6], n);
        expect(result).to.eql([1, 2, 3, 4, 5, 6]);
    });
    it('returns an empty array if n is negative', () => {
        let n = -10;
        let result = _.first([1, 2, 3, 4, 5, 6], n);
        expect(result).to.eql([]);
    });
});