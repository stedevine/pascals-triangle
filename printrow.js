// Prints the items in the specified row of Pascal's triangle
var pascal = require('./lib/pascal.js');

var numberOfRows = process.argv[2];
triangle = pascal.getTriangle(numberOfRows)

console.log(triangle[numberOfRows-1].toString());
