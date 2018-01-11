//import { isString } from 'util';

var assert = require('assert');

// we need 7 test cases. 
let inputs = [
    ["yolo", 1],
    ["hello ", 3],
    ["what", 2],
    ["foo", -2],
    ["boo", "G"],
    [undefined, 4],
    ["da", 6]
]

let outputs = [
    "yolo",
    "hello hello hello ",
    "whatwhat",
    "",
    undefined,
    undefined,
    "dadadadadada"
]

/*
Make this function return the input string repeated as many times as specified. 
If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

For example:

f("foo", 3) // "foofoofoo"
f("fo", 3) // "fofofo"
f("foo", -1) // undefined
*/
function f(str, n) {
    //console.log(str);
    //console.log(n);

    if (str === undefined || isNaN(n) ) {
        return undefined;
    } else if (n <= 0) {
        var result = "";
        return result;
    } else {
        var result = "";
        for (var i = 0; i < n; i++) {
            //console.log(n);
            result = result + str;
        }
        return result;
    }
}

function runTest(i) {
    if (i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(...inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);

