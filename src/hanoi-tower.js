const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let res = {
    turns: 0,
    seconds: 0
  };
  res.turns = Math.floor((2 ** disksNumber) - 1);
  let turnForSec = (turnsSpeed / 60) / 60;
  res.seconds = Math.floor(res.turns / turnForSec);
  return res;
}

console.log(calculateHanoi(5, 4074));

module.exports = {
  calculateHanoi
};
