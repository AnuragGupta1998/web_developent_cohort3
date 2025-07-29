//interface uses another interface
interface Address{
    city:string;
    country:string;
    pincode:number
}

//using anither interface of Address
interface User{
    name:string;
    age:number;

    // optional property
    bloodGroup?:string;

    // using another interface
    address?:Address
}

// Example of using the User interface
interface Office{
    address:Address;    
}
