'use strict';

// This function will be called with 3 arguments set to
// 2, 10, and 1000000 respectively
const doubleBasePalindromeSum = function (base1, base2, upperLimit) {
let total = 0;
const palindrome = function (integer) {
  return integer.toString().split('').reverse().join('');
};


let testForPal = function (num) {
  for (i = 0; i <= num; i++) {
    if ((palindrome(num) === num) &&
     (palindrome((num >>> 0).toString(base1)) === (num >>> 0).toStirng(base1))) {
       total = total + i;
     }
  }
  return total;
};

testForPal(uppderLimit);
};

module.exports = {
  doubleBasePalindromeSum,
};
