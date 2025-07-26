"use strict";
let x = 100;
console.log(x);
function show(arg) {
    console.log("hello " + arg);
}
show("anurag");
function nameReturn(nam) {
    return "hello " + nam + " how are you?";
}
const result = nameReturn("Anurag");
console.log(result);
function displayName(n) {
    console.log("Name is " + n);
    return n;
}
function addShow(a, fn) {
    console.log("the value of a is " + a);
    const result = fn(a);
    console.log("the result is " + result);
}
addShow("Ashutosh", displayName);
