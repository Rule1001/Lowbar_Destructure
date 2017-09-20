const path = require('path');
const { expect } = require('chai');

let _ = require(path.join(__dirname, '../lib/last'));


describe('#last', () => {
    it('is a function', () => {
        expect(_.last).to.be.a('function');
    });

    it('returns nothing for an empty array', () => {
        let result = _.last([]);
        expect(result).to.eql();
    });
    it('returns an empty array if n is negative', () => {
        let input = [1, 2, 3, 4, 5, 6];
        let result = _.last(input, -10);
        expect(result).to.eql([]);
    });
    it('returns last item if no n is provided', () => {
        let input = [1, 2, 3, 4, 5, 6];
        let result = _.last(input);
        expect(result).to.equal(6);
    });
    it('returns the whole array if n is higher than the length of the array', () => {
        let input = [1, 2, 3, 4, 5, 6];
        let result = _.last(input, 10);
        expect(result).to.eql([1, 2, 3, 4, 5, 6]);
    });
    it('returns the last n elements if n is provided', () => {
        let input = [1, 2, 3, 4, 5, 6];
        let result = _.last(input, 2);
        expect(result).to.eql([5, 6]);
    });
});