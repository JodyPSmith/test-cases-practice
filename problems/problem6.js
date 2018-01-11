// pro tip: use nodemon instead of node
var assert = require('assert');

// we need 6 test cases. 
let inputs = [
  ["add", 10, 20],
  ["subtract", 20, 10],
  ["addittwice", 10, 20],
  ["multiple", 6, 5],
  ["yablah", 2, 2],
  ["spoofy", 10, 10]
]

let outputs = [
  30,
  10,
  50,
  30,
  "yayablahblah",
  undefined
]

/*
Use the operation argument to decide what this function will return. 
If it's "add", return the sum of the two numbers. "sub" return their difference. "mult" return their product.  
Anything else return undefined. 
For example:
f("add", 10, 20); // 30
f("mult", 2, 3); // 6
f("spoof", 10, 10); // undefined

*/
function f(operation, firstArgument, secondArgument) {
    if (operation === "add") {
      var result = firstArgument + secondArgument;
      return result;
    } else if (operation === "subtract") {
      var result = firstArgument - secondArgument;
      return result;
    } else if (operation === "addittwice") {
      var result = firstArgument + secondArgument + secondArgument;
      return result;
    } else if (operation === "multiple") {
      var result = firstArgument * secondArgument;
      return result;
    } else if (operation === "yablah") {
      var ya = "";
      var blah = "";
      for (var i = 0; i < firstArgument; i++) {
        ya = ya + "ya";
      }
      for (var j = 0; j < secondArgument; j++) {
        blah = blah + "blah";
      }
      var result = ya + blah;
      return result;
    } else if (operation === "spoof") {
      var result = 10;
      return result;
    } else {
      return undefined;
    }
}

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(...inputs[i]); // stupid array split thing added.
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
