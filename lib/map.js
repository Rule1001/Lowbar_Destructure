let _ = {};

_.map = function (array, iteratee, context) {
    if (context) iteratee = iteratee.bind(context);
    array = array || [];
    const newArray = [];
    if (!Array.isArray(array)) {
      for (let prop in array) {
        let obj = iteratee(array[prop]);
        newArray.push(obj);
      }
    }
  
    for (let i = 0; i < array.length; i++) {
      let result = iteratee(array[i]);
      newArray.push(result);
    }
    return newArray;
  };

  if (typeof module !== 'undefined') {
    module.exports = _;
  }