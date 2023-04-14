const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (typeof date !== 'object' || date === null || Array.isArray(date)) {
    return 'Unable to determine the time of year!';
  }

  if(isNaN(Date.parse(date.toString())) || Date.parse(date.toString()) > Date.parse(new Date())){
    return 'Invalid date!';
  }

  if (!(date instanceof Date) || isNaN(date) || Object.prototype.toString.call(date) !== '[object Date]')  {
    return 'Invalid date!';
  }

  let month = date.getMonth();
  if (typeof month == 'number'){
    switch (month) {
      case 11 :
        return 'winter';
      case 0 :
        return 'winter';
      case 1 :
        return 'winter';
      case 2 :
        return 'spring';      
      case 3 :
        return 'spring';
      case 4 :
        return 'spring';
      case 5 :
        return 'summer';
      case 6 :
        return 'summer';      
      case 7 :
        return 'summer';
      case 8 :
        return 'autumn';
      case 9 :
        return 'autumn';      
      case 10 :
        return 'autumn';
    }
  }else{
    return 'Invalid date!';
  }
}

console.log(getSeason(55));

module.exports = {
  getSeason
};
