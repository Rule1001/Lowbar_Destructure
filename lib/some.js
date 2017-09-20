let _ = {};

_.some = function (list, predicate, context) {
    if (context) predicate = predicate.bind(context);
    if (Array.isArray(list)) {
      for (let i = 0; i < list.length; i++) {
        if (predicate(list[i])) return true;
      }
    } else if (typeof list === 'object') {
      for (const key in list) {
        if (predicate(list[key])) return true;
      }
    }
    return false;
  };

  if (typeof module !== 'undefined') {
    module.exports = _;
  }