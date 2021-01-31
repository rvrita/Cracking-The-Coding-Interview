/*
Palindrome Permutation
Given a string, write a funtion to check if it is a permutation of a palindrome.
*/

var isPalindromePermutation = function(string) {
  var letterDict = {};
  for (var i = 0; i < string.length; i++) {
    letterDict[string[i]] = (letterDict[string[i]] || 0) + 1;
  }
  return Object.values(letterDict).filter((n) => n % 2 === 1).length <= 1;
}

console.log(isPalindromePermutation('helleh'));
// console.log(isPalindromePermutation('helleho'));
// console.log(isPalindromePermutation('helleo'));