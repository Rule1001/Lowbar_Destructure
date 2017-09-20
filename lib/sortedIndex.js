const path = require('path');
let binarySearch = require(path.join(__dirname, '../helper/binarySearch'));
let _ = {};

_.sortedIndex = function (list, value, iteratee, context) {
    if (arguments.length <= 1 || !Array.isArray(list) && typeof list !== 'string') return 0;
  
    if (context) iteratee = iteratee.bind(context);
  
    return binarySearch(list, value, true, iteratee);
  };

  if (typeof module !== 'undefined') {
    module.exports = _;
  }