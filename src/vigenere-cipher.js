const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  encrypt(str, key) {
    if (str === null || key === null){throw new Error('Incorrect arguments!')};
    const cipherK = {
      0: 'A',
      1: 'B',
      2: 'C',
      3: 'D',
      4: 'E',
      5: 'F',
      6: 'G',
      7: 'H',
      8: 'I',
      9: 'J',
      10: 'K',
      11: 'L',
      12: 'M',
      13: 'N',
      14: 'O',
      15: 'P',
      16: 'Q',
      17: 'R',
      18: 'S',
      19: 'T',
      20: 'U',
      21: 'V',
      22: 'W',
      23: 'X',
      24: 'Y',
      25: 'Z'
    };
    let encryptedInNums = [];
    let encryptedKey = [];

    for (const letter of key) {
      for (let i = 0; i < 26; i++) {
        if (letter == cipherK[i]) {encryptedKey.push(cipherK[i]);}
        else{encryptedKey.push(letter)};
      }
    }

    for (const letter of str) {
      for (let i = 0; i < 26; i++) {
        if (letter == cipherK[i]) {encryptedInNums.push(cipherK[i]);}
        else{encryptedInNums.push(letter)};
      }
    }

  }
  decrypt(str, key) {
    if (str === null || key === null){throw new Error('Incorrect arguments!')};

  }
}

module.exports = {
  VigenereCipheringMachine
};
