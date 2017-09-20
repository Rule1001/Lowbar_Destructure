const path = require('path');
const { expect } = require('chai');

let _ = require(path.join(__dirname, '../lib/pluck'));

describe('#pluck', () => {
    it('is a function', () => {
      expect(_.pluck).to.be.a('function');
    });
    it('returns an empty array when a string is passed', () => {
      const actual = _.pluck(1, 'name');
      expect(actual).to.eql([]);
    });
    it('should return the values that match the passed in propertyType', () => {
      const properties = [{ type: 'house' }, { type: 'flat' }, { type: 'mansion'}];
      expect(_.pluck(properties, 'type')).to.eql(['house', 'flat', 'mansion']);
    });
  });