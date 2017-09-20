const path = require('path');
const { expect } = require('chai');

let _ = require(path.join(__dirname, '../lib/reduce'));

describe('#reduce', () => {
    it('is a function', () => {
      expect(_.reduce).to.be.a('function');
    });
    it('works for both object and arrays', () => {
      const actual = _.reduce({ one: 1, two: 2 }, (acc, val) => acc + val, 0);
      const expected = 3;
      expect(actual).to.equal(expected);
      expect(_.reduce({ one: 1, two: 2 }, (acc, val) => acc + val)).to.equal(3);
    });
    it('should return a single value with and without memo', () => {
      expect(_.reduce([1, 2, 3, 4, 5], (acc, num) => acc + num, 0)).to.equal(15);
      expect(_.reduce([1, 2, 3, 4, 5], (acc, num) => acc + num)).to.equal(15);
      expect(_.reduce([0, 1, 2, 3, 4, 5], (acc, num) => acc + num, 0)).to.equal(15);
    });
    it('should bind the iteratee to a context object if one is passed', () => {
      const context = { type: 'house' };
      const result = [];
      const iteratee = () => {
        result.push(context.type);
      };
      _.reduce([1, 2, 3, 4, 5], iteratee, context);
      expect(result).to.eql(['house', 'house', 'house', 'house', 'house']);
    });
  });