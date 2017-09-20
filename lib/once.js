let _ = {};

_.once = function (fn) {
    let returnValue, called = false;
    return function () {
        if (!called) {
            called = true;
            returnValue = fn.apply(this, arguments);
        }
        return returnValue;
    };
};

if (typeof module !== 'undefined') {
    module.exports = _;
}