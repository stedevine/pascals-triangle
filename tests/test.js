var test = require('tape');
var pascal = require('../lib/pascal.js')

test('Create a single row triangle', assert => {
  'pascal(1) should return one array containing an array with one value : 1.'
  assert.plan(1);
  var expectedValue = new Array();
  expectedValue[0] = new Array();
  expectedValue[0][0] = 1;
  assert.deepEqual(pascal.getTriangle(1),expectedValue);
});

test('Create the second row of the triangle', assert => {
  'pascal(2) should return two arrays the second one is : [1,1].'
  assert.plan(1);
  var expectedSecondRow = new Array(2);
  expectedSecondRow= [1,1];
  assert.deepEqual(pascal.getTriangle(2)[1],expectedSecondRow);
});

test('Create the third row of the triangle', assert => {
  'the third row of pascal(3) should be : [1,2,1].'
  assert.plan(1);
  var expectedRow = new Array(3);
  expectedRow= [1,2,1];
  assert.deepEqual(pascal.getTriangle(3)[2],expectedRow);
});

//	1 8 28 56 70 56 28 8 1
test('Create row 7 of the triangle', assert => {
  'row 7 of pascal(7) should be : [1,8,28,56,70,56,28,8,1].'
  assert.plan(1);
  var expectedRow = [1,8,28,56,70,56,28,8,1];
  assert.deepEqual(pascal.getTriangle(9)[8],expectedRow);
});
