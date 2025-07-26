"use strict";
//simple typescript code to show how to use types in typescript........
let x = 100;
console.log(x);
// Function with no return type.......
function show(arg) {
    console.log("hello " + arg);
}
show("anurag");
// Function with return type
// This function takes a string argument and returns a string........
function nameReturn(nam) {
    return "hello " + nam + " how are you?";
}
const result = nameReturn("Anurag");
console.log(result);
console.log(nameReturn("Ashutosh"));
//function return number........
function add(a, b) {
    return a + b;
}
const sum = add(10, 20);
console.log("The sum is " + sum);
//function passing to another function........
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
//implicitely typed function........
function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    return false;
}
isLegal(14) ? console.log("You are legal") : console.log("You are not legal");
console.log(isLegal(25));
//explicitely typed function........
function isLegal2(age) {
    if (age >= 18) {
        return true;
    }
    return false;
}
isLegal2(14) ? console.log("You are legal") : console.log("You are not legal");
console.log(isLegal2(45));
//function that takes a function as an argument and run after one second
function demo() {
    console.log("This is a demo function");
}
function runAfterOneSecond(fn) {
    setTimeout(fn, 1000);
}
runAfterOneSecond(demo);
function greet2(nam) {
    console.log("Hello " + nam);
}
function delayedGreet(fn) {
    let nam = "Anurag";
    setTimeout(() => {
        fn(nam);
    }, 2000);
}
delayedGreet(greet2);
