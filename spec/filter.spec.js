const path = require('path');
const { expect } = require('chai');

let _ = require(path.join(__dirname, '../lib/filter'));


describe('#filter', () => {
    it('is a function', () => {
        expect(_.filter).to.be.a('function');
    });
    
    it('returns an empty array if gets given an invalid input', () => {
        let result = _.filter([]);
        expect(result).to.eql([]);
    });

    it('should return [] if passed an empty array', () => {
        const emptyArray = [];
        expect(_.filter(emptyArray)).to.eql([]);
    });

    it('returns an array of all the values that pass a truth test', () => {
        function even(elem) {
            return elem % 2 === 0;
        }
        let result = _.filter([1, 2, 3, 4], even);
        expect(result).to.eql([2, 4]);

        function aWords(elem) {
            return elem[0] === 'a';
        }
        result = _.filter(['apple', 'banana', 'astronaut', 'cat'], aWords);
        expect(result).to.eql(['apple', 'astronaut']);

    });
    it('should return even numbers when passed an array of numbers', () => {
        const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        function isEven(num) {
          return !(num % 2);
        }
        expect(_.filter(numberList, isEven)).to.eql([2, 4, 6, 8, 10]);
      });
      it('should return words longer than 5 letters long', () => {
        const sentence = ['What', 'even', 'is', 'life', 'maaaate?'];
        function wordOverFiveLetters(word) {
          return word.length > 5;
        }
        expect(_.filter(sentence, wordOverFiveLetters)).to.eql(['maaaate?']);
      });
      it('should bind the iteratee to a context object if one is passed', () => {
        const context = { name: 'Bob' };
        const result = [];
        const iteratee = () => {
          result.push(context.name);
        };
        _.filter([1, 2, 3], iteratee, context);
        expect(result).to.eql(['Bob', 'Bob', 'Bob']);
      });
});