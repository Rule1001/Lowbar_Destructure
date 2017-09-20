const path = require('path');
const { expect } = require('chai');

let _ = require(path.join(__dirname, '../lib/identity'));


describe('#identity', () => {
  it('is a function', () => {
    expect(_.identity).to.be.a('function');
  });
  it('returns nothing if passed nothing', () => {
    let result = _.identity('');
    expect(result).to.equal('');
  });
  it('returns the value of an array if passed an array', () => {
    let result = _.identity([1, 2, 3]);
    expect(result).to.eql([1, 2, 3]);
  });
  it('returns a object if passed an object', () => {
    let result = _.identity({ a: 1, b: 2 });
    expect(result).to.eql({ a: 1, b: 2 });
  });
});