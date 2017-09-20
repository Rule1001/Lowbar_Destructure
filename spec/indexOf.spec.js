const path = require('path');
const { expect } = require('chai');

let _ = require(path.join(__dirname, '../lib/indexOf'));

describe('#indexOf', () => {
  it('is a function', () => {
    expect(_.indexOf).to.be.a('function');
  });
  it('when it recieves an empty Array returns -1', () => {
    let result = _.indexOf([]);
    expect(result).to.equal(-1);
    result = _.indexOf([], 5);
    expect(result).to.equal(-1);
  });
  it('return -1 id it dosent receive a value', () => {
    let result = _.indexOf([1, 2, 3]);
    expect(result).to.equal(-1);
  });
  it('Returns the index at which value can be found in the array', () => {
    let result = _.indexOf([1, 2, 3, 4, 5], 4);
    expect(result).to.equal(3);
  });
  it('Returns the first matching value in the array after the given index.', () => {
    let result = _.indexOf([1, 2, 3, 4, 5, 6, 7, 8, 9], 5, 2);
    expect(result).to.equal(4);
  });
});