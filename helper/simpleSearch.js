function simpleSearch (list, item, startIndex) {
    
        if (arguments.length < 2 || !Array.isArray(list) && typeof list !== 'string') return -1;
    
        startIndex = startIndex || 0;
    
        for (let i = startIndex; i < list.length; i++) {
            if (list[i] === item || (list[i] !== list[i] && item !== item)) return i;
        }
        return -1;
    }
    
    module.exports = simpleSearch;