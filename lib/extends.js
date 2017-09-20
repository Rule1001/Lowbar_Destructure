let _ = {};

_.extends = function (destination, sources) {
    return Object.assign(destination, sources);
  };

  if (typeof module !== 'undefined') {
    module.exports = _;
  }