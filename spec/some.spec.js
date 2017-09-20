const path = require('path');
const { expect } = require('chai');

let _ = require(path.join(__dirname, '../lib/some'));


describe('#some', () => {
    it('is a function', () => {
      expect(_.some).to.be.a('function');
    });
    it('will return true if it finds a value that passes the predicate truth test', () => {
      expect(_.some([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], num => num === 7)).to.equal(true);
    });
    it('will return false if it finds a value that passes the predicate truth test', () => {
        expect(_.some([1, 2, 3, 4, 5, 6, 8, 9, 10], num => num === 7)).to.equal(false);
      });
    it('works for objects as well as arrays', () => {
      const list = { one: 1, two: 2, three: 3 };
      const predicate = num => num > 2;
      expect(_.some(list, predicate)).to.equal(true);
    });
    it('should return false if fails predicate', () => {
      const list = [1, 2, 3, 4];
      const predicate = num => num > 5;
      expect(_.some(list, predicate)).to.equal(false);
    });
    it('should bind the iteratee to a context object if one is passed', () => {
      const context = { type: 'house' };
      const result = [];
      const iteratee = () => {
        result.push(context.type);
      };
      _.some([1, 2, 3, 4, 5], iteratee, context);
      expect(result).to.eql(['house', 'house', 'house','house', 'house']);
    });
  });