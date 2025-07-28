//interfaces in typescript
// This code demonstrates how to use interfaces in TypeScript to define the structure of an object.
interface User{
    name: string;
    age: number;
    email: string;
}

//interface type as function parameter with return type boolean
function isLegalUser(user: User): boolean {
    console.log(user)
    console.log(user.age)
    return user.age >= 18;
}
console.log( isLegalUser({ name: "John", age:1 , email:""}));

//interface type as function parameter without return type user interface
function showUser(user:User):void{
    console.log(user)
}
showUser({ name: "Anurag", age: 21, email: ""});


//interface type as function parameter with return type user interface
function userDetail(user:User):User{
    return user;
}
const rst:User = userDetail({ name: "Anurag", age: 25, email: "anurag@gmail.com"});
console.log(rst)
console.log(userDetail({ name: "Anurag", age: 25, email: ""}));


//user1 //interface type as function parameter with return type void
const user1:{a:number,b:number,c:number}={
    a:1,
    b:2,
    c:3
}

function sayHello(u:{a:number,b:number,c:number}):void{
    console.log(`Hello ${u.a} ${u.b} ${u.c}`);
}
sayHello(user1);