interface User{
    id:number;
    name:string;
    age:number; 
    email:string;
    password:string;
}

type UserWithPick = Pick<User,'id'|'name'|'age'>;

type UserWithPartial = Partial<UserWithPick>;

function updateUser(user: UserWithPartial): UserWithPick {
    return {
        id: user.id ?? 0,
        name: user.name ?? 'Unknown',
        age: user.age ?? 0
    };
}

const user: UserWithPartial = {
    id: 1,
    name: 'Alice',
    // age is optional and can be omitted
};

const result = updateUser(user);
console.log(result); // Output: { id: 1, name: 'Alice', age: 0 }

