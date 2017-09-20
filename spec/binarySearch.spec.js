const expect = require('chai').expect;
const binarySearch = require('../helper/binarySearch');


describe('binarySearch', () => {
    it('is a function', () => {
      expect(binarySearch).to.be.a('function');
    });
  
    it('should take at least 2 arguments', () => {
      expect(binarySearch.length).to.be.at.least(2);
    });
  
    it('will return -1 if first agrument is not an array', () => {
      expect(binarySearch(1, 2)).to.equal(-1);
      expect(binarySearch(1.2, 2)).to.equal(-1);
      expect(binarySearch({a:1}, 2)).to.equal(-1);
    });
  
    it('will return index 1', () => {
        expect(binarySearch([1, 2, 3], 2)).to.equal(1);
      });
  
    it('it will work for strings', () => {
        const str = 'abcdefghijklm';
        expect(binarySearch(str, 'a')).to.equal(0);
        expect(binarySearch(str, 'e')).to.equal(4);
        expect(binarySearch(str, 'm')).to.equal(12);
    
      });
      
    it('will return the index position which value should be placed', () => {
      expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 9 ,10], 8, true)).to.equal(7);
      expect(binarySearch('abcefghi', 'd', true)).to.equal(3);
    });
  
  });