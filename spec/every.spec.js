const path = require('path');
const { expect } = require('chai');

let _ = require(path.join(__dirname, '../lib/every'));

describe('#every', () => {
    it('is a function', () => {
      expect(_.every).to.be.a('function');
    });
    it('a true value should return a boolean', () => {
      const array = _.every([2, 4, 6, 8, 10], num => num % 2 === 0);
      expect(array).to.equal(true);
    });
    it('will return false if fails test', () => {
      const array = _.every([2, 4, 6, 8, 10, 11], num => num % 2 === 0);
      expect(array).to.equal(false);
    });
    it('give expected results for objects', () => {
      const list = { one: 1, two: 2, three: 3, four: 4, five: 5 };
      const predicate = num => num > 0;
      const actual = _.every(list, predicate);
      const expected = true;
      expect(actual).to.equal(expected);
    });
    it('should bind the iteratee', () => {
      const context = { type: 'house' };
      const result = [];
      const iteratee = () => {
        result.push(context.type);
      };
      _.every([1, 2, 3], iteratee, context);
      expect(result).to.eql(['house']);
    });
  });