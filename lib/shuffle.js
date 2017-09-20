let _ = {};

_.shuffle = function (list) {

    let copyOfList;
    if (typeof list === 'object' 
      && list !== null ) copyOfList = Object.values(list);
  
    else if (typeof list === 'string') copyOfList = list.split('');
    else if (Array.isArray(list)) copyOfList = list.slice();
    else return [];
  
    let listLength = copyOfList.length;
    let shuffled = [];
  
    while (listLength) {
      let randomIndex = Math.floor(Math.random() * listLength--);
      let element = copyOfList.splice(randomIndex, 1);
      shuffled.push(element[0]);
    }
  
    return shuffled;
  };

if (typeof module !== 'undefined') {
    module.exports = _;
  }