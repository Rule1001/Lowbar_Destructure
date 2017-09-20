let _ = {};

_.defaults = function (objects, defaults) {
    for (const key in defaults) {
      if (!objects.hasOwnProperty(key)) {
        objects[key] = defaults[key];
      }
    }
    return objects;
  };

  if (typeof module !== 'undefined') {
    module.exports = _;
  }