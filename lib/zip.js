const path = require('path');
let _ = require(path.join(__dirname, './map'));

_.zip = function (...args) {
    return Object.keys(args[0]).map(key => args.map(array => array[key]));
  };

if (typeof module !== 'undefined') {
    module.exports = _;
  }
  