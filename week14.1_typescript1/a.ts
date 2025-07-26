let x:number = 100;

console.log(x)



function show(arg:string):void{
    console.log("hello "+ arg);
}

show("anurag")

function nameReturn (nam:string):string{
    return "hello "+nam +" how are you?";
}

const result:string = nameReturn("Anurag");
console.log(result);

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