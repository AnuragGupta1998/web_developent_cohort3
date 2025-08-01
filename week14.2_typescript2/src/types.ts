//union types.........................
type id = number | string;

function getId(studentId:id ): string {
    return `ID: ${studentId}`;
}

const studentId1: id = 101;
console.log(getId(studentId1)); // Output: ID: 101
console.log(getId("Anurag")); // Output: ID: Anurag


// types and interface very similar to interface
//object as a types......................
type User3 = {
    name:string;
    age:number;
    isActive:boolean;
}

function createUser(user: User3):string {
    return `User created: ${user.name}, Age: ${user.age}, Active: ${user.isActive}`;
}

const u1: User3 = {
    name: "John",
    age: 25,
    isActive: true,
};
console.log(createUser(u1)); // Output: User created: John, Age: 25, Active: true