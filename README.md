# pascals-triangle
Method for calculating row of Pascal's triangle

Digging into some Nodejs unit testing (using Tape) by building a module to calculate the rows of Pascal's Triangle

# Usage
```javascript
var pascal = require('../lib/pascal.js')
var triangle = pascal.getTriangle(9);
```
returns an array of arrays that represent the rows (first array) and columns (second array) of Pascal's triangle

# Test
npm test

Tests are configured to use Tape and pipe the results to Faucet.
