let _ = {};

_.last = (array, n) => {
  if (n === undefined) {
    return array[array.length - 1];
  } else {
    return array.slice(-n);
  }
};

if (typeof module !== 'undefined') {
	module.exports = _;
}