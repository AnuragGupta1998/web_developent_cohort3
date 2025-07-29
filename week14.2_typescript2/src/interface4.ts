interface User2{
    name:string;
    age:number;
    //function inside inteface with return type
    display:()=>string;
    showDetails():string;
    discount(amount:number):number;
}

const anurag:User2 ={
    name:"Anurag",
    age:25,
    display:()=> `Name: ${anurag.name}, Age: ${anurag.age}`,

    showDetails: function():string {
        return `User Details - Name: ${this.name}, Age: ${this.age}`;
    },

    discount: (amount:number) :number =>{
        return amount * 0.1; // 10% discount
    }

}

function showUserDetails(user:User2):User2 {
    console.log(user.display());
    console.log(user.showDetails());
    console.log(`Discount on 1000: ${user.discount(1000)}`);
    return user;

}

const r1 = showUserDetails(anurag);