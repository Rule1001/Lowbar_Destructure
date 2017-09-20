const path = require('path');
let _ = require(path.join(__dirname, './map'));

_.pluck = function(list, propertyName) {
  return _.map(list, obj => obj[propertyName]);
};


if (typeof module !== "undefined") {
  module.exports = _;
}
