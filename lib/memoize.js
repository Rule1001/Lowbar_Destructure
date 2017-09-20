let _ = {};

  _.memoize = function (func, hashFunc) {
    const cache = {};
    return function () {
      let key = JSON.stringify(hashFunc ? hashFunc.apply(this, arguments) : arguments);
  
      if (cache[key]) return cache[key]; 
      else return (cache[key] = func.apply(this, arguments));
    };
  };

if (typeof module !== 'undefined') {
    module.exports = _;
}