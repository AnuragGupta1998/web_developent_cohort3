type idOrNumber = number | string;

function getIdORNumber(studentId:idOrNumber){
    return `the StudentId is ${studentId}`;
}

console.log(getIdORNumber(123)); // Output: the StudentId is 123
console.log(getIdORNumber("ABC123")); // Output: the StudentId is ABC123


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

type UserOrAdmin = User | Admin;

const data: UserOrAdmin = {
    name: "John",
    age: 30,
    rollNo: 101 // This can be a User or Admin
};

function getUserOrAdminDetails(userOrAdmin: UserOrAdmin){
    return `Name: ${userOrAdmin.name}, Age: ${userOrAdmin.age} `;

    //this cause error because of veriable not defined in User type Or Admin type
    // return `Name: ${userOrAdmin.name}, Age: ${userOrAdmin.age} ${userOrAdmin.rollNo} ${userOrAdmin.username} `;
}

console.log(getUserOrAdminDetails(data)); // Output: Name: John, Age: 30,


//Intersection Types
//Combining User and Admin types to create a new type that has properties of both
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
