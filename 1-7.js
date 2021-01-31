/*
Rotate Matrix
Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes,
write a method to rotate the image by 90 degrees. Can you do this in place?

*/

var rotateMatrix = function(m) {
  if (m.length === 0 || m.length !== m[0].length) return false;

  var n = m.length;
  // iterate over "onion" layers of matrix, starting at outside
  for (var layer = 0; layer < n / 2; layer++) {
    var first = layer;
    var last = n - layer - 1;
    // iterate over elements in top row of current layer
    for (var i = first; i < last; i++) {
      var offset = i - first;
      // copy all elements counterclockwise order
      var temp = m[first][i]; // save the value from top row
      m[first][i] = m[last-offset][first];          // left -> top
      m[last-offset][first] = m[last][last-offset]; // bottom -> left
      m[last][last-offset] = m[i][last];            // right -> bottom
      m[i][last] = temp;                            // top -> right
    }
  }
  return m;
}

console.log(rotateMatrix([[1,0,1,1],[0,1,1,0],[0,1,1,1],[1,1,0,0]]));
console.log(rotateMatrix([[1,0,1,1,0,0],
                          [0,1,1,0,0,0],
                          [0,1,1,1,0,0],
                          [0,0,0,0,0,0],
                          [0,0,0,0,0,0],
                          [1,1,0,0,0,0]]));