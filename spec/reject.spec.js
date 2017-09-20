const path = require('path');
const { expect } = require('chai');

let _ = require(path.join(__dirname, '../lib/reject'));

describe('#reject', () => {
  it('is a function', () => {
    expect(_.reject).to.be.a('function');
  });

  it('returns an empty array if gets given an invalid input',() => {
    let result = _.reject([]);
    expect(result).to.eql([]);
  });

  it('returns an array of all the values that pass a truth test', () => {
    function even(elem) {
      return elem % 2 === 0;
    }
    let result = _.reject([1, 2, 3, 4], even);
    expect(result).to.eql([1, 3]);

    function aWords(elem) {
      return elem[0] === 'a';
    }
    result = _.reject(['apple', 'banana', 'astronaut', 'cat'], aWords);
    expect(result).to.eql(['banana', 'cat']);
  });

  it('will return the values in the list that do not pass the truthy test', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7];
    expect(_.reject(numbers, num => num % 2 === 0)).to.eql([1, 3, 5, 7]);
  });
  it('will bind the iteratee to a context object if one is passed', () => {
    const context = { type: 'house' };
    const result = [];
    const iteratee = () => {
      result.push(context.type);
    };
    _.reject([1, 2], iteratee, context);
    expect(result).to.eql(['house', 'house']);
  });
  it('will return [] if passed an empty array', () => {
    const emptyArray = [];
    expect(_.reject(emptyArray)).to.eql([]);
  });
  it('will work when the list is an object or an array', () => {
    const list = { one: 1, two: 2, three: 3 };
    const predicate = n => n >= 2;
    expect(_.reject(list, predicate)).to.eql([1]);
  });
});

