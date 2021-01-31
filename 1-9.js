/*
String Rotation
Assume you have a method isSubstring(), which checks if one string is a substring of another. 
Given 2 strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring.

bottle | water -> water | bottle
we can double the first word and call isSubstring
*/

var isSubstring = function(string, substring) {
  if (string.includes(substring)) {
    return true;
  } else {
    return false;
  }
}

var isRotated = function(s1, s2) {
  var s1_mod = s1 + s1;
  return isSubstring(s1_mod, s2);
}

// console.log(isRotated('hello', 'lohel'));
// console.log(isRotated('hello', 'lohll'));
// console.log(isRotated('abbabbbaaa', 'bbbaaaabba'));
// console.log(isRotated('abbabbbaaa', 'bbaaaaabba'));