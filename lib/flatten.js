const path = require("path");
let _ = require(path.join(__dirname, "./reduce"));

_.flatten = function(arr, shallow) {
  if (!Array.isArray(arr)) return [];

  return _.reduce(
    arr,
    (res, elem) => {
      if (Array.isArray(elem) && !shallow) {
        elem = _.flatten(elem);
      }

      return res.concat(elem);
    },
    []
  );
};

if (typeof module !== "undefined") {
  module.exports = _;
}
