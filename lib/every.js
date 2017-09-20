let _ = {};

_.every = function(list, predicate, context) {
  if (context) predicate = predicate.bind(context);
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      if (!predicate(list[i])) return false;
    }
  } else {
    for (const key in list) {
      if (!predicate(list[key])) return false;
    }
  }
  return true;
};

if (typeof module !== "undefined") {
  module.exports = _;
}
