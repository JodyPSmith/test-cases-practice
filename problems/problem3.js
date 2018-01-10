var assert = require('assert');

// we need 7 test cases. I've provided 2.
let inputs = [
  [2, 4],
  [-3, 3],
  [4, 5],
  [2, 6],
  [2, 5],
  [3, 2],
  [4, 3]
]

let outputs = [
  6,
  0,
  9,
  8,
  7,
  5,
  7
]

/*
Make this function return the sum of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(x, y) {
  // this will do the two number thing but not the NaN or undefined string
  if (x === NaN || y === NaN) {
    return undefined;
  } else {
    var result = x + y;
    return result;
  }

}

function runTest(i) {
  var expected = outputs[i];
  var actual = f(...inputs[i]); //... is a spread operator that will take the array and break it into the individualt numbers
  assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);
