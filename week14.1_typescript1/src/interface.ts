//interfaces in typescript
// This code demonstrates how to use interfaces in TypeScript to define the structure of an object.
interface User{
    name: string;
    age: number;
    email: string;
}

function isLegalUser(user: User): boolean {
    console.log(user)
    console.log(user.age)
    return user.age >= 18;
}

console.log( isLegalUser({ name: "John", age:1 , email:""}));