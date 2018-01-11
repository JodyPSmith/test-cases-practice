var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  ["There once was a man from nantucket"],
  ["Whose nose was so long he could"],
  ["Just Kidding"],
  ["It wasn't his nose"],
  ["verylongwordindeed even if its not"]
]

let outputs = [
  "nantucket",
  "could",
  "Kidding",
  "wasn't",
  "verylongwordindeed"
]

/*
Make this function return the longest word in the input string. If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.
*/
function f(str) {
    var words = str.split(" ");
    //console.log(words);
    var longestWord = "";
    // right, lets compare word length, if words[i].length is > than longestWord.length then longestWord = words [i] and loop through all words
    for (var i = 0; i < words.length; i++){
        //console.log("test");
        if (words[i].length >= longestWord.length) {
            longestWord = words[i];
            //console.log(longestWord);
        }
      
    }
    return longestWord;
}

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(...inputs[i]); // well hopefully I at least remember how to split an array
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

