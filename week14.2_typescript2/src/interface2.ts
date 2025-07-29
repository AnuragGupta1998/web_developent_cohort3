interface User1{
    name:string;
    age:number;
    address?:{
        street:string;
        city:string;    
    }
}

const user:User1 ={
    name:"Alice",
    age:30,
    address:{
        street:"123 Main St",
        city:"Wonderland"
    }
}

function showDetails(user:User1):User1{
    return user;
}

const result1:User1 = showDetails(user);
console.log("result1", result1); // Output: { name: 'Alice', age: 30, address: { street: '123 Main St', city: 'Wonderland' } }

const result2 = showDetails(user);
console.log("result2", result2); // Output: { name: 'Alice', age: