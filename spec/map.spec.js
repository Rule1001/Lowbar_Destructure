const path = require('path');
const { expect } = require('chai');
const sinon = require('sinon');

let _ = require(path.join(__dirname, '../lib/map'));


describe('#map', () => {
    it('is a function', () => {
      expect(_.map).to.be.a('function');
    });
    it('will return a new array with manipulated figures', () => {
      expect(_.map([5, 10, 15], num => num * 3)).to.eql([15, 30, 45]);
    });
    it('will work on objects', () => {
      expect(_.map({ five: 5, ten: 10, fifteen: 15 }, num => num * 3)).to.eql([15, 30, 45]);
    });
    it('should return [] if passed an empty array', () => {
      const emptyArray = [];
      expect(_.map(emptyArray)).to.eql([]);
    });
    it('passes each element of an array to the iteratee function', () => {
      const spy = sinon.spy();
      _.map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], spy);
      expect(spy.callCount).to.equal(10);
    });
    it('passes each element of an object to the iteratee function', () => {
      const spy = sinon.spy();
      _.map({ five: 5, ten: 10, fifteen: 15 }, spy);
      expect(spy.callCount).to.equal(3);
    });
    it('should bind the iteratee to a context object if one is passed', () => {
      const context = { type: 'house' };
      const result = [];
      const iteratee = () => {
        result.push(context.type);
      };
      _.map([1, 2, 3, 4 , 5], iteratee, context);
      expect(result).to.eql(['house', 'house', 'house', 'house', 'house']);
    });
  });