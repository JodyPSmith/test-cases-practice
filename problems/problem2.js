var assert = require('assert');

// we need 5 test cases.
let inputs = [
    "",
    "This",
    "is",
    "sooooooo",
    "much more fun than killing myself with css"
]

let outputs = [
  undefined,
  "s",
  "s",
  "o",
  "s"
]

// Make this function return the last letter of the string that is passed to it. If the string does not have a last letter, return undefined
function f(str) {
    //same as before, add to array then compare array.length -1 []
    var array = str.split("");
    var arrayLength = array.length;
    return array[arrayLength-1];
}

function runTest(i) {
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
