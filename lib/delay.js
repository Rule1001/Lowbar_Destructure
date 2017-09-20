let _ = {};

_.delay = function (func, wait) {
  
    if (arguments.length === 0 || typeof func !== 'function') return undefined;
  
    let args = [].slice.call(arguments, 2);
    return setTimeout( () => {
        return func.apply(null, args);
      }, wait);
  };
  
  if (typeof module !== 'undefined') {
    module.exports = _;
  }