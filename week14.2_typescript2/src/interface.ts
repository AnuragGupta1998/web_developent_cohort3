interface User{
    name: string;
    age: number;
    email: string;
}

const user1: User = { 
    name:"Alice",
    age: 30,
    email: "alice@gmail.com"
  }


function isLegalUser(user: User): User | boolean {
    if(user.age<18){
        return user.age <= 18;
    }
    return user
}
console.log(isLegalUser({ name: "John", age: 1, email: ""}));

const result = isLegalUser(user1);
console.log("result",result); // Output: { name: 'Alice', age: 30, email: ""}
