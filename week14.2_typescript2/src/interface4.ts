interface User{
    name:string;
    age:number;
    //function inside inteface with return type
    display:()=>string;
    showDetails():string;
}