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


//function passing to another function........
function displayName(n:string):string{
    console.log("Name is "+n);

    return n;

}

function addShow(a:string,fn:(arg:string)=>string):void{
    console.log("the value of a is "+a);
    const result=fn(a);
    console.log("the result is "+result);
}

addShow("Ashutosh",displayName);