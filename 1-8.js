/*
Zero Matrix
Write an algorythm such that if an element in an MxN matrix is 0, 
its entire row and column is set to 0.


*/

var zeroMatrix = function(matrix) {
  var rows = [];
  var cols = [];
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if ((matrix[i][j] !== 0) && (j === matrix[i].length-1)) {
        rows.push(false);
      } else if (matrix[i][j] === 0) {
        rows.push(true);
        break;
      }
    }
  }
  for (var j = 0; j < matrix[0].length; j++) {
    for (var i = 0; i < matrix.length; i++) {
      if ((matrix[i][j] !== 0) && (j === matrix[i].length-1)) {
        cols.push(false);
      } else if (matrix[i][j] === 0) {
        cols.push(true);
        break;
      }
    }
  }
  for (var i = 0; i < rows.length; i++) {
    for (var j = 0; j < cols.length; j++) {
      if (rows[i] || cols[j]) {
        matrix[i][j] = 0;
      } 
    }
  }
  return matrix;
}

console.log(zeroMatrix([[1,0,1,1,1],[0,1,1,1,1],[1,1,1,1,1]]));