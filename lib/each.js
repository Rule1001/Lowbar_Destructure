let _ = {};

_.each = (collection, iteratee, context) => {
  if (context) iteratee = iteratee.bind(context);

  if (Array.isArray(collection) || typeof collection === 'string') {
    for (let i = 0; i < collection.length; i++) {
      iteratee(collection[i], i, collection);
    }
  } if (typeof collection === 'object' && !Array.isArray(collection)) {
    for (const key in collection) {
      iteratee(collection[key], key, collection);
    }
  }
  return collection;
};


if (typeof module !== 'undefined') {
  module.exports = _;
}