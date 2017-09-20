const path = require('path');
const { expect } = require('chai');

let _ = require(path.join(__dirname, '../lib/extends'));


describe('#extends', () => {
    it('is a function', () => {
      expect(_.extends).to.be.a('function');
    });
    it('returns the value when passed an argument', () => {
      const result = _.extends({ type: 'detached' })
      expect(result).to.eql({ type: 'detached' });
    });
    it('shallow copies all the properties in the source object(s) over to the destination object', () => {
      const result = _.extends({ type: 'detached' }, {description: 'forSale'});
      const expected = { type: 'detached', description: 'forSale' };
      expect(result).to.eql(expected);
    });
    it('updates the destination object if the source has the same key', () => {
      const result = _.extends({ type: 'detached', description: 'forSale' }, {description: 'not forSale'})
      const expected = { type: 'detached', description: 'not forSale'};
      expect(result).to.eql(expected);
    });
  });
