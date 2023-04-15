const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let number;
  if (typeof sampleActivity === 'string'){
    let curr = Number(sampleActivity);
    if (curr != NaN && curr != 0 && curr < MODERN_ACTIVITY && curr > 0){
      let speedOfReaction = Number(0.693 / HALF_LIFE_PERIOD);
      number = Math.log(MODERN_ACTIVITY / curr) / speedOfReaction ;
    }else{return false};
  } else { return false };
  return Math.ceil(number);
}

module.exports = {
  dateSample
};
