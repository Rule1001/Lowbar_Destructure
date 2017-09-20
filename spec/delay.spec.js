const path = require('path');
const { expect } = require('chai');
const sinon = require("sinon");

let _ = require(path.join(__dirname, '../lib/delay'));

describe('#delay', () => {
    it('is a function', () =>  {
      expect(_.delay).to.be.a('function');
    });
    
    let clock;
    before( () => { clock = sinon.useFakeTimers(); });
    after( () => { clock.restore(); });
    
    it('should take two arguments', () => {
      expect(_.delay.length).to.equal(2);
    });

    it('returns undefined if no arguments passed to function', () => {
      let result = undefined;
      expect(_.delay()).to.equal(result);
    });

    it('delays invocation of callback for specified period', () => {
      let callback = sinon.spy();
      let wait = 300;

      _.delay(callback, wait);

      clock.tick(1);
      expect(callback.callCount).to.equal(0);
      expect(callback.notCalled).to.equal(true);
      expect(callback.called).to.equal(false);
    });
  });