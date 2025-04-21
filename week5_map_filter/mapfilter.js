const arr = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];

//map function 
const result1= arr.map(item => item*2);
console.log(result1)
console.log(typeof(result1));

//filter function
const result2 = arr. filter(item => item != 3)
console.log(result2);
console.log(typeof(result2));

console.log(10/2)   // 5
console.log(10%2)   // 0

const arr2 = ["anurag","ashutosh","ankit","hemant","saurabh","sachin"]

const result3 =  arr2.filter(item => item.startsWith("anu"));
console.log(result3);

const result4 = arr2.map(item => item.replace("a","A"));
console.log(result4);


