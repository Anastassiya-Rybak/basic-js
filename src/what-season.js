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

  if (date == null) {
    return 'Unable to determine the time of year!';
  }

  if (Object.hasOwn(date, 'toString')){
    return "Invalid date!";
  }

  if (date instanceof Date){
    switch (date.getMonth()) {
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
    return "Invalid date!";
  }

  if (typeof date !== 'object' || Object.prototype.toString.call(date) !== '[object Date]')  {
    return "Invalid date!";
  }
}

console.log(getSeason(55));

module.exports = {
  getSeason
};
