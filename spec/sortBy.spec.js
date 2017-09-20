const path = require('path');
const { expect } = require('chai');

let _ = require(path.join(__dirname, '../lib/sortBy'));


describe('sortBy', () => {
    it('it should be a function', () => {
      expect(_.sortBy).to.be.a('function');
    });
    it('should expect at least one argument', () => {
        expect(_.sortBy.length).to.be.at.least(1);
    });
    it('returns an ascended sorted copy of the list, using the result of running each value though the iteratee', () => {
      const list = [1, 2, 3, 4, 5, 6];
      const iteratee = num => Math.sin(num);
      const expected = [5, 4, 6, 3, 1, 2];
      expect(_.sortBy(list, iteratee)).to.eql(expected);
    });
    it('should bind the iteratee to a context object if one is passed', () => {
      const context = { type: 'house' };
      const result = [];
      const iteratee = () => {
        result.push(context.type);
      };
      _.sortBy([1, 2, 3, 4, 5], iteratee, context);
      expect(result).to.eql(['house', 'house', 'house', 'house', 'house', 'house', 'house', 'house']);
    });
  });