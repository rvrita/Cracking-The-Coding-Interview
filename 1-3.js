/*
Write a method to replace all spaces in a string with '%20'. 
You may assume the string has space at the end to hold additional characters, 
and you may have given a true length of the string.

I: string + length of string
O: string
C: in place
E: all spaces, empty string



*/

URLify = function(string, length) {
  var spaces_remaining = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      spaces_remaining++;
    }
  }
  var letterArr = string.split('');
  for (var j = letterArr.length - 1; j > 0; j--) {
    if (spaces_remaining === 0) {
      return letterArr.join('');
    } else if (letterArr[j] === ' ') {
      letterArr[spaces_remaining * 2 + j] = '0';
      letterArr[spaces_remaining * 2 + j - 1] = '2';
      letterArr[spaces_remaining * 2 + j - 2] = '%';
      spaces_remaining--;
    } else {
      letterArr[spaces_remaining * 2 + j] = letterArr[j];
    }
  }
}

// console.log(URLify('hello wor ld', 12));
// console.log(URLify('hello world', 11));