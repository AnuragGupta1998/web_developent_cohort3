interface User {
    name:string;
    age:number;
}

function sumOFAge(user1:User,user2:User):number{

    return user1.age+user2.age;

}

const result = sumOFAge({name:"John",age:30},{name:"Jane",age:25});
console.log(result); // Output: 55