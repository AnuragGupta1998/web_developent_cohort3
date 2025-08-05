interface Config{
    readonly name:string; //makes 'name' property read-only
    age:number;
    email:string;
}

const user:Readonly<Config> ={
    name: 'Alice',
    age: 30,
    email:"" 
}
// user.age = 19; // Allowed, as 'name' is not readonly

type Con = {
    readonly name:string;
    age:number;
}

const user2 :Con ={
    name: 'Bob',
    age: 25 
}

user2.age = 26; // Allowed, as 'age' is not readonly
// user2.name = 'Charlie'; // Error: Cannot assign to 'name' because it is a read-only property 


