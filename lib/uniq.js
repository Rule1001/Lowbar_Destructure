let _ = {};

_.uniq = function(array) {
  array = array || [];
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (newArray.indexOf(value) === -1) {
      newArray.push(value);
    }
  }
  return newArray;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
