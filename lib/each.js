let _ = {};


_.each = (collection, iteratee) => {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      iteratee(collection[i], i, collection);
    }
  } else {
    for (let key in collection) {
      iteratee(key);
    }
  }
};


if (typeof module !== 'undefined') {
  module.exports = _;
}