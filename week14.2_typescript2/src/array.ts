interface User {
    name: string;
    age: number;
    email: string;
}

// function isLegalAge(user: User[]): boolean[] {
//     return user.map(u => u.age >= 18)
// }
function isLegalAge(user: User[])  {
    return user.filter(u => u.age >= 18)
}

const rr = isLegalAge([{
      name: "John",
      age: 20,
      email: ""
    }, 
    {
      name: "Alice",
      age: 2,
      email: ""
    }
])

console.log("RR",rr); // [true, false]
console.log(isLegalAge([{ name: "Anurag", age: 25, email: "" },{ name: "John", age: 2, email: "" }])); // [true]
// console.log(isLegalAge2([{ name: "John", age: 2, email: "" }])); // [true]

//defining array

const a:number[] = [1, 2, 3, 4, 5];
const b:Array<number> = [1, 2, 3, 4, 5];

const result =a.map(item => item);
console.log(result); // [1, 2, 3, 4, 5]
