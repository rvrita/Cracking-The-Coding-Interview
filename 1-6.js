/*
String Compression
Implement a method to perform basic string compression using the counts of repeated characters.
For example aabcccccaaa would become a2b1c5a3. If the compressed string is not smaller than return the original string.
*/

var stringCompression = function(string) {
  if (string.length <= 2) {
    return string;
  }
  var compressed = '';
  var counter = 0;
  for (var i = 0; i < string.length - 1; i++) {
    if (string[i] === string[i+1]) {
      counter++;
    } else {
      counter++;
      compressed += string[i] + counter;
      counter = 0;
    }
  }
  counter++;
  compressed += string[i] + counter;
  return compressed.length < string.length ? compressed : string;
}

console.log(stringCompression('aabcccccaaa'));
console.log(stringCompression('abbbcccca'));
console.log(stringCompression('aa'));
console.log(stringCompression('abcdee'));