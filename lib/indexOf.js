let _ = {};

_.indexOf = (arr, val, start) => {

    if (arr === undefined || val === undefined || arr.length === 0) {
        return -1;
    } else if (!arr.slice(start).includes(val)) {
        return -1;
    } else {
        return arr.indexOf(val);
    }
};

if (typeof module !== 'undefined') {
    module.exports = _;
}