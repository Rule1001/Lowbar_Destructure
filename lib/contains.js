const path = require('path');
let _ = require(path.join(__dirname, './indexOf'));

_.contains = function(array, target, fromIndex) {
  if (Array.isArray(array) && arguments.length === 3) {
    const slice = array.slice(fromIndex);
    if (slice.indexOf(target) === -1) {
      return false;
    }
  }

  if (Array.isArray(array)) {
    if (_.indexOf(array, target) !== -1) return true;
  } else {
    for (const key in array) {
      if (array[key] === target) return true;
    }
  }
  return false;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
