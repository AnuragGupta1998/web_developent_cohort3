//simple typescript code to show how to use types in typescript........
let x:number = 100;

console.log(x)

// Function with no return type.......
function show(arg:string):void{
    console.log("hello "+ arg);
}
show("anurag")




// Function with return type
// This function takes a string argument and returns a string........
function nameReturn (nam:string):string{
    return "hello "+nam +" how are you?";
}

const result:string = nameReturn("Anurag");
console.log(result);
console.log(nameReturn("Ashutosh"));





//function return number........
function add(a:number,b:number):number{
    return a+b;
}   
const sum:number = add(10,20);
console.log("The sum is "+sum);




//function passing to another function........
function displayName(n:string):string{
    console.log("Name is "+n);
    return n;
}

function addShow( a:string , fn:(arg:string)=>string ):void{
    console.log("the value of a is "+a);
    const result=fn(a);
    console.log("the result is "+result);
}
addShow("Ashutosh",displayName);




//implicitely typed function........
function isLegal(age:number){
    if(age >= 18){
        return true;
    }
    return false;
}
isLegal(14) ? console.log("You are legal") : console.log("You are not legal");
console.log(isLegal(25));



//explicitely typed function........
function isLegal2(age:number):boolean{
    if(age >= 18){
        return true;
    }
    return false;
}
isLegal2(14) ? console.log("You are legal") : console.log("You are not legal");
console.log(isLegal2(45));



//function that takes a function as an argument and run after one second................
function demo(){
    console.log("This is a demo function");
}

function runAfterOneSecond(fn:()=>void) {
    setTimeout(fn,1000);
}
runAfterOneSecond(demo);



//function that takes a function as an argument and run after two seconds...................
function greet2(nam:string){
    console.log("Hello "+nam);  
}

function delayedGreet(v:string,fn:(arg:string)=>void){
    setTimeout(() => {
        fn(v);
    }, 2000);
}
delayedGreet("Dinesh",greet2);

//Arrow function of sum of two number
const sumArrow = (a:number, b:number):number => {
    return a + b;
}
console.log("The sum using arrow function is " + sumArrow(5, 15));

