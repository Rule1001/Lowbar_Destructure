const path = require('path');


let _ = require(path.join(__dirname, './each'));


_.filter = function (list, predicate, context) {
    if ((!Array.isArray(list) && typeof list !== 'object' && typeof list !== 'string')
      || (list === null || list instanceof Date)) return [];
  
    predicate = predicate || _.identity;  
  
    if (context) predicate = predicate.bind(context);
    
    let filteredList = [];
    _.each(list, function (item, i, list) {
      if (predicate(item, i, list)) filteredList.push(item);
    });
    return filteredList;
  };

if (typeof module !== 'undefined') {
  module.exports = _;
}