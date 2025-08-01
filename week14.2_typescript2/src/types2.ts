type Studentt ={
    name: string;
    age: number;
}

function isLegalAge(s: Studentt): boolean {
    return s.age >= 18;
}

isLegalAge({ name: "John", age: 20 });


//unions in types
type Admin = {
    name:string;
    age:number;
    subject:string; 
}
type User = {
    name:string;
    age:number;
    rollNo:Number;
}

// type UserOrAdmin = Admin & User;
type UserOrAdmin = Admin | User;

const user4: UserOrAdmin = {
    name: "Alice",
    age: 30,
    // subject: "Math" // This line will cause an error because 'subject' is not part of User4 
    rollNo: 123 // Uncommenting this line will also cause an error because 'rollNo' is not part of Admin
};  

function printUserInfo(user: UserOrAdmin) {
    // console.log(`Name: ${user.name}, Age: ${user.age} Subject is `);
    console.log(`Name: ${user.name}, Age: ${user.age} Subject is `);
    if ('subject' in user) {
        console.log(`Subject: ${user.subject}`);
    }
}   
printUserInfo(user4);



// type Demo = User & Admin; // Intersection type, combines both User4 and Admin properties