const path = require('path');
let _ = require(path.join(__dirname, './map'));

_.invoke = function (list, method) {
    const args = Array.prototype.slice.call(arguments, 2);
  
    return _.map(list, (elem) => {
      const func = elem[method];
      return func ? func.apply(elem, args) : elem.null;
    });
  };

  if (typeof module !== 'undefined') {
    module.exports = _;
}