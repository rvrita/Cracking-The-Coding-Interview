/*
Given 2 strings, write a method to decide if one is a permutation of the other.

I: 2 strings
O: boolean
C: -
E: empty strings

build dict from first, reduce dict with the other, if only zeros will left, return true.

*/

checkPermutation = function(str1, str2) {
  var charDict = {};
  if (str1.length !== str2.length) {
    return false;
  }
  for (var i = 0; i < str1.length; i++) {
    var letter = str1[i];
    charDict[letter] = (charDict[letter] || 0) + 1;
  }
  for (var j = 0; j < str2.length; j++) {
    var letter = str2[j];
    if (!charDict[letter]) {
      return false;
    } else {
      charDict[letter]--;
    }
  }
  return Object.values(charDict).every(n => n === 0);
}

// console.log(checkPermutation('hello', 'ohell'));
console.log(checkPermutation('', ''));
// console.log(checkPermutation('hello', ''));
// console.log(checkPermutation('hello', 'bello'));