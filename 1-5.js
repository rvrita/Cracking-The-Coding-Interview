/*
One Away
There are 3 types of edits that can be performed on a string: insert a character,
remove a char, replace a char. Given 2 strings, write a function to check if they are one (or zero) edits away.
*/

var oneAway = function(str1,str2) {
  var s1; // longer
  var s2; // shorter
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  } else if (str1.length < str2.length) {
    s1 = str2;
    s2 = str1;
  } else {
    s1 = str1;
    s2 = str2;
  }
  var counter = 0;
  if (s1.length === s2.length) {
    for (var i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) {
        counter++;
      }
    }
  } else {
    var j = 0;
    for (var i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[j]) {
        counter++;
      } else {
        j++;
      }
    }
  }
  return counter <= 1;
}

// console.log(oneAway('hello', 'hill'));
// console.log(oneAway('hello', 'hell'));
// console.log(oneAway('hello', 'hel'));
// console.log(oneAway('hello', 'hella'));
// console.log(oneAway('hello', 'helma'));