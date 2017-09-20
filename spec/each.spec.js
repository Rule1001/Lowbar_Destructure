const path = require('path');
const { expect } = require('chai');

let _ = require(path.join(__dirname, '../lib/each'));

  describe('#each', () => {
    it('is a function', () => {
      expect(_.each).to.be.a('function');
    });

    it('calls the iteratee as many times as items in the collection (array)', () => {
      let count = 0;
      function incrementCount () { count++; }
      _.each([1, 2, 3], incrementCount);
      expect(count).to.equal(3);
    });
    it('calls the iteratee as many times as properties in the collection (object)', () => {
      let count = 0;
      function incrementCount () { count++; }
      _.each({a: 1, b: 2, c: 3}, incrementCount);
      expect(count).to.equal(3);
    });
    it('each invocation of the iteratee is passed as arguments (element, index, collection) (array)', () => {
      const args = [];
      function pushArguments (element, i, collection) {
        args.push([element, i, collection]);
      }
      _.each([1, 2, 3], pushArguments);
      expect(args[0]).to.eql([1, 0, [1, 2, 3]]);
      expect(args[1]).to.eql([2, 1, [1, 2, 3]]);
      expect(args[2]).to.eql([3, 2, [1, 2, 3]]);
    });
  });