let _ = {};

_.sortBy = function (list, iteratee, context) {
    if (context) iteratee = iteratee.bind(context);
    if (typeof iteratee === 'function') {
      return list.sort((a, b) => iteratee(a) - iteratee(b));
    }
    return list.sort((a, b) => a[iteratee] - b[iteratee]);
  };

if (typeof module !== 'undefined') {
    module.exports = _;
  }