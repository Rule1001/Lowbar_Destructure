const identity = require('../lib/lowbar');

function binarySearch (list, item, insertAtIndex, iteratee) {    
    if (arguments.length < 2 || !Array.isArray(list) && typeof list !== 'string') return -1;

    insertAtIndex = insertAtIndex || false;
    iteratee = iteratee || identity;

    const searchItem = typeof iteratee === 'string' ? item[iteratee] : iteratee(item); 

    let startIdx = 0;
    let middleIdx = Math.floor(list.length / 2 - 1);
    let endIdx = list.length - 1;
  
    while (startIdx <= endIdx) {

        let currElement = list[middleIdx];
        const currItem = typeof iteratee === 'string' ? currElement[iteratee] : iteratee(currElement);

        if (currItem === searchItem || (currItem !== currItem && searchItem !== searchItem)) 
            return insertAtIndex ? middleIdx + 1 : middleIdx;

        if (currItem > searchItem)  endIdx = middleIdx - 1;

        else startIdx = middleIdx + 1; 
       
        middleIdx = Math.floor((startIdx + endIdx) / 2);
    }
    return insertAtIndex ? middleIdx + 1 : -1;
}

module.exports =  binarySearch;