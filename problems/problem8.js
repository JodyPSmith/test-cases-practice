var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  ["All your base belong to us"],
  ["blah"],
  ["blah"],
  ["blah"],
  ["blah"]
]

let outputs = [
    "su ot gnoleb esab ruoy llA",
    "halb",
    "halb",
    "halb",
    "halb"
]

/*
Make this function return the input string, reversed. For example "hello" would return "olleh" and "how are you" would return "uoy era woh".
You must use a for loop for this exercise.
*/
function f(str) {
    var reversed = "";
    for (var i = str.length-1; i >= 0 ; i--){
        reversed = reversed + str[i]; //reduce from sting length and put the last letter into reversed each time until you get to 0
        //console.log(str[i]);
        //console.log(reversed)
    }

    return reversed;
}

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(...inputs[i]); //this weird ... thing, is this becuse the test questions are broked or am I missing something.
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

