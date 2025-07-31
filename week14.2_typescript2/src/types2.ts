type Studentt ={
    name: string;
    age: number;
}

function isLegalAge(s: Studentt): boolean {
    return s.age >= 18;
}

isLegalAge({ name: "John", age: 20 });


//unions in types
type User = {
    name:string;
    age:number
}
type Admin = {
    name:string;
    age:number;
    subject:string; 
}

type UserOrAdmin = Admin | User;

const user4: UserOrAdmin = {
    name: "Alice",
    age: 30,
    // subject: "Math" // This line will cause an error because 'subject' is not part of User4 
};  

function printUserInfo(user: UserOrAdmin) {
    console.log(`Name: ${user.name}, Age: ${user.age} Subject is `);
    if ('subject' in user) {
        console.log(`Subject: ${user.subject}`);
    }
}   
printUserInfo(user4);



// type Demo = User & Admin; // Intersection type, combines both User4 and Admin properties