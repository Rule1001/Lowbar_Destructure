let _ = {};

_.reject = function (array, iteratee, context) {
    if (context) iteratee = iteratee.bind(context);
    const result = [];
    if (Array.isArray(array)) {
      for (let i = 0; i < array.length; i++) {
        if (!iteratee(array[i])) result.push(array[i]);
      }
      return result;
    }
    for (const key in array) {
      if (!iteratee(array[key])) result.push(array[key]);
    }
    return result;
  };

if (typeof module !== 'undefined') {
  module.exports = _;
}