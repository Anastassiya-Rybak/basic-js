const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addition = [];
  for ( let i = 1; i <= options.additionRepeatTimes || i <= 1; i++){
    addition.push(options.additionRepeatTimes ? options.addition || (options.addition == false ? false : 'null') : options.addition);
  }
  let result = [];
  let string = str + addition.join(options.additionSeparator ? options.additionSeparator : '|');
  for (let l = 1; l <= options.repeatTimes || l <= 1; l++){
    result.push(string);
  }
  return result.join(options.separator ? options.separator : '+');
}

module.exports = {
  repeater
};
