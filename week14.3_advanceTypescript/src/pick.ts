//Pick that let you select set of properties from existing type and create new type(Type)

interface User{
    id:number;
    name:string;
    age:number;
    email:string;
    password:string;
}

// Pick type utility 
//we pick only the properties we want from User
type UserWithoutSensitiveInfo = Pick<User, 'id' | 'name' | 'age'>;

// Example usage
const user: UserWithoutSensitiveInfo = {
    id: 1,
    name: 'John Doe',
    age: 30
};  

function  getUserInfo(user: UserWithoutSensitiveInfo): string {
    return `User Info: ${user.id}, ${user.name}, ${user.age}`;
}

const userInfo = getUserInfo(user);
console.log(userInfo); // Output: User Info: 1, John Doe, 30
