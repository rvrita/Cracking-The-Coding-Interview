/*
Implement an algorythm to determine if a string has all unique characters. What if you cannot use additional data structures?

I: string
O: boolean
Constrains: no new data structure
Edge cases: empty string

brute force: nested loops, grab letter, check rest of the letters, if equal return false
runtime: O(n2)

improvement: sort the letters (n*log(n)), loop through to check i and i+1 is the same
*/

isUnique = function(string) {
  var sortedString = string.split('').sort().join('');
  for (var i = 0; i < sortedString.length-1; i++) {
    if (sortedString[i] === sortedString[i+1]) {
      return false;
    }
  }
  return true;
}

// console.log(isUnique('hello'));
// console.log(isUnique('helo'));
// console.log(isUnique('heloo'));
// console.log(isUnique(''));
// console.log(isUnique('2344'));