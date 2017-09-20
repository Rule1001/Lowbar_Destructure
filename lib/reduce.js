const path = require("path");
let _ = require(path.join(__dirname, "./each"));

_.reduce = function (collection, iteratee, memo, context) {
    if (context) iteratee = iteratee.bind(context);
    _.each(collection, (elem, index) => {
      if (memo === undefined) {
        memo = elem;
        iteratee(memo, elem, index, collection);
      } else memo = iteratee(memo, elem, index, collection);
    });
    return memo;
  };

if (typeof module !== "undefined") {
  module.exports = _;
}
