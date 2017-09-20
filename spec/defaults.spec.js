const path = require('path');
const { expect } = require('chai');

let _ = require(path.join(__dirname, '../lib/defaults'));


describe('#defaults', () => {
    it('is a function', () => {
      expect(_.defaults).to.be.a('function');
    });
    it('returns the value when passed an argument', () => {
      const result = _.defaults({ type: 'detached' });
      const expected = { type : 'detached' };
      expect(result).to.eql(expected);
    });
    it('returns the value when passed an argument and populates missing fields', () => {
      const result = _.defaults({ type: 'house' }, { type: 'mansion', description: 'forSale' });
      const expected = { type: 'house', description: 'forSale' };
      expect(result).to.eql(expected);
    });
    it('does not update existing keys', () => {
      const result = _.defaults({ type: 'house', description: 'not for Sale' }, { type: 'mansion', description: 'forSale' });
      const expected = { type: 'house', description: 'not for Sale' };
      expect(result).to.eql(expected);
    });
  });

