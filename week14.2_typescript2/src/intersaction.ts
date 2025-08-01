type User = {
    name:string;
    age:number;
    rollNo:number;
}

type Admin = {
    name:string;
    age:number;
    username:string;
} 

type UserWithId = User & Admin;

const userId: UserWithId = {
    name: "Alice",
    age: 28,
    rollNo: 102,
    username: "alice"

};
function intersactionDemo(user:UserWithId): string {
    return `Name: ${user.name}, Age: ${user.age}, Roll No: ${user.rollNo}, Username: ${user.username}`; 
}       

console.log(intersactionDemo(userId)); // Output: Name: Alice, Age: 28, Roll No: 102, Username: alice
