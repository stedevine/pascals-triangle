# pascals-triangle
Method for calculating row of Pascal's triangle

Digging into some Nodejs unit testing (using Tape) by building a module to calculate the rows of Pascal's Triangle

# Usage
```javascript
// Prints the items in the specified row of Pascal's triangle
var pascal = require('./lib/pascal.js');

var numberOfRows = process.argv[2];
triangle = pascal.getTriangle(numberOfRows)

console.log(triangle[numberOfRows-1].toString());
```
returns an array of arrays that represent the rows (first array) and columns (second array) of Pascal's triangle
```
$ node printrow.js 9
1,8,28,56,70,56,28,8,1
```


# Test
npm test

Tests are configured to use Tape and pipe the results to Faucet.
