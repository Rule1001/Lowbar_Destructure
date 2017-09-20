const expect = require('chai').expect;

const simpleSearch = require('../helper/simpleSearch');

describe('simpleSearch', () => {
  it('is a function', () => {
    expect(simpleSearch).to.be.a('function');
  });

  it('will take at least 2 arguments', () => {
    expect(simpleSearch.length).to.be.at.least(2);
  });

  it('will retun -1 if first agrument is not an array', () => {
    let value = 1;
    expect(simpleSearch(value, 2)).to.equal(-1);
    value = 1.5;
    expect(simpleSearch(value, 2)).to.equal(-1);
    value = {a: 1};
    expect(simpleSearch(value, 2)).to.equal(-1);
  });

  it('will return index 1', () => {
    expect(simpleSearch([1, 2, 3], 2)).to.equal(1);
  });

  it('will find the first matching value in the array after a given index position', () => {
    const array = [2, 5, 7, 2, 56, 29];
    expect(simpleSearch(array, 2)).to.equal(0);
    expect(simpleSearch(array, 2, 2)).to.equal(3);
    expect(simpleSearch(array, 7, 4)).to.equal(-1);     
  });

  it('it will work for strings', () => {
    const str = 'abcdefghijklm';
    expect(simpleSearch(str, 'a')).to.equal(0);
    expect(simpleSearch(str, 'e')).to.equal(4);
    expect(simpleSearch(str, 'm')).to.equal(12);

  });

  it('will find the first matching value in the array after a given index position', () => {
    const str = 'aftqazghe1fbytrdhs';
    expect(simpleSearch(str, 'a')).to.equal(0);
    expect(simpleSearch(str, 'b')).to.equal(11);
    expect(simpleSearch(str, 'y')).to.equal(12);
    expect(simpleSearch(str, 'z')).to.equal(5);
    expect(simpleSearch(str, '1')).to.equal(9);
  });
});

