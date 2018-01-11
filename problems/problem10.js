var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  ["hello world"],
  ["ALL YOUR BASE ARE BELONG TO US"],
  ["wHaTs Up DaDiO"],
  ["YoLoLtLt"],
  ["Lardy dee Lardy daa"]
]

let outputs = [
  "Hello World",
  "All Your Base Are Belong To Us",
  "Whats Up Dadio",
  "Yololtlt",
  "Lardy Dee Lardy Daa"
]

/*
Make this function return the input string, capitalized. You must use a for loop. For example:

f("hello world"); // Hello World
f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

*/
function f(str) {
    //break str in words, upcase each first leter and put back into string
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] =words[i].charAt(0).toUpperCase() + words[i].toLowerCase().substr(1);
        console.log(words);
    }
    var result = words.join(" ");
    return result;
}

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(...inputs[i]); // hate this ... thing Jaques
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

