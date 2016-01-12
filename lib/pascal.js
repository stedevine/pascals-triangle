// Pascal module provides a function that returns an array of arrays
// that represent the rows (first array) and columns (second array) of Pascal's triangle
// https://en.wikipedia.org/wiki/Pascal%27s_triangle
// The input is the total number of rows to calculate

exports.getTriangle = function(numberOfRows) {
  var triangle = new Array(numberOfRows);

  // calculate the value of each item in the row by summing the two items "above" it.

  // special case for first row
  triangle[0] = [1];

  for (var i=1; i < numberOfRows; i++) {

    // the number of items in each row is the zero-indexed row number + 1
    var numberOfItems = i + 1;
    triangle[i] = new Array(numberOfItems);

    // Special case for first and last items in the row - there is only one number.
    // Given that the top row is 1, these values are 1 for all rows.
    triangle[i][0] = 1;
    triangle[i][numberOfItems - 1] =  1

    for (var k=1; k < numberOfItems-1; k++) {
      triangle[i][k] = triangle[i-1][k-1] + triangle[i-1][k];
    }

  }

  return triangle;
}
