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
    if (str == null || key == null){throw new Error('Incorrect arguments!')};
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
    let encryptedInSum = [];

    for (const letter of key) {
      try {
        for (let i = 0; i < 26; i++) {
          if (letter.toUpperCase() === cipherK[i]) {encryptedKey.push(i); break}
        }
      } catch {
        encryptedKey.push(letter);
      }
    };

    let objKey = Object.keys(cipherK);
    let regexSymbol = /[!\"#$%&\'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;

    for (const letter of str) {
      if(letter == ' '){encryptedInNums.push(letter)};
      if (regexSymbol.test(letter)){encryptedInNums.push(letter)};
      
      try {
        for (let i = 0; i < 26; i++) {
          if (letter.toUpperCase() === cipherK[i]) {encryptedInNums.push(objKey[i]); break}
        }
      } catch {
        encryptedInNums.push(letter);
      }
    };

    let dublEncryptedKey = [];

    for (let index = 1; index <= Math.ceil(encryptedInNums.length / encryptedKey.length); index++) {
      dublEncryptedKey = dublEncryptedKey.concat(encryptedKey);
    }
console.log(encryptedInNums);
    for (let o = 0; o < encryptedInNums.length; o++) {
      if(encryptedInNums[o] == ' '){encryptedInSum.push(encryptedInNums[o]); continue};
      if (regexSymbol.test(encryptedInNums[o])){encryptedInSum.push(encryptedInNums[o]); continue};

      if (Number(encryptedInNums[o]) + Number(dublEncryptedKey[o]) <= 26){
        encryptedInSum.push(Number(encryptedInNums[o]) + Number(dublEncryptedKey[o]));
      } else if (Number(encryptedInNums[o]) + Number(dublEncryptedKey[o]) > 26){
        encryptedInSum.push((Number(encryptedInNums[o]) + Number(dublEncryptedKey[o])) % 26);
      };
    }

    console.log(encryptedInSum);

    let finalCipher = [];

    for (const iter of encryptedInSum) {
      if(iter == ' '){finalCipher.push(iter);};
      if (regexSymbol.test(iter)){finalCipher.push(iter);};
      try{
        for (let i = 0; i < objKey.length; i++) {
          if (iter === +objKey[i]){finalCipher.push(cipherK[i]); break};
        }
      }
      catch {finalCipher.push(iter); break};
    }
    console.log(finalCipher);

    return finalCipher.join().toUpperCase();
  }
  decrypt(str, key) {
    if (str == null || key == null){throw new Error('Incorrect arguments!')};

  }
}

const directMachine = new VigenereCipheringMachine();

const reverseMachine = new VigenereCipheringMachine(false);

directMachine.encrypt('attack at dawn!', 'alphonse');


module.exports = {
  VigenereCipheringMachine
};
