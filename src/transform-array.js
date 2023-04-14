const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr) === false){ throw new Error("'arr' parameter must be an instance of the Array!")};
  let dubl = arr;
  let newArr = [];
  for (let i = 0; i <= dubl.length-1; i++) {
    if (dubl[i] == '--discard-next'){ if(i != dubl.length-1){dubl.splice( i+1, 1 )}else{continue};}
    else if (dubl[i] == '--discard-prev'){ if(i != 0 && dubl[i-1] != '--discard-next'){newArr.pop()}else{continue};}
    else if (dubl[i] == '--double-next'){ if (i != dubl.length-1){newArr.push( dubl[i+1] )}else{continue};}
    else if (dubl[i] == '--double-prev'){ if(i != 0 && dubl[i-1] != '--discard-next'){
      console.log(4444);
      newArr.push( newArr[newArr.length-1])}else{continue};}
    else { newArr.push(dubl[i]) };
  };
  return newArr;
}

console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]));

module.exports = {
  transform
};
