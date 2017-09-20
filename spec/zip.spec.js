const path = require('path');
const { expect } = require('chai');

let _ = require(path.join(__dirname, '../lib/zip'));

describe('zip', () => {
    it('it is a function', () => {
      expect(_.zip).to.be.a('function');
    });
    it('it combines the arrays at the index position', () => {
      const output = [['House', 1, true], ['apartment', 2, true], ['mansion', 10, false]];
      expect(_.zip(['House', 'apartment', 'mansion'], [1, 2, 10], [true, true, false])).to.eql(output);
    });
  });