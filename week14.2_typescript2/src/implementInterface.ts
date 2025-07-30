interface Person{
    name:string;
    age:number;
    greet():string;
    greet2:(gender:string)=>string;
    isLegalAge?():boolean; //optional method
}

//object of interface Person
const people1:Person={
    name: "Alice",
    age: 30,
    greet: function() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    },
    greet2: (gender:string) => {
        return `This is a different greeting method.${people1.name} ${people1.age} ${gender}`;
    }
}
console.log(people1.name, people1.age);
console.log(people1.greet());
console.log(people1.greet2("male"));


//classes implementing the interface......................................
class Student implements Person {
    name: string;
    age: number;
    studentId:number

    constructor(name: string, age: number,studentId:number) {
        this.name = name;
        this.age = age;
        this.studentId = studentId;
    }

    greet(): string {
        return `Hello, I am ${this.name} and I am ${this.age} years old.id is ${this.studentId}.`;
    }

    greet2(gender:string):string{
        return `This is a different greeting method.${this.name} ${this.age} ${gender} id is ${this.studentId}`;

    }
    isLegalAge(): boolean {
        return this.age >= 18; // Optional method implementation
    }   
}
const student1 = new Student("Bob", 22,101);
console.log(student1.name, student1.age,student1.studentId);
console.log(student1.greet());
console.log(student1.greet2("male"));
console.log(student1.isLegalAge()); // Output: true