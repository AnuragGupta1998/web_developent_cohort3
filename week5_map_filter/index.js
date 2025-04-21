import axios from "axios";


//fetch and axios to requesting to backend for data

const a = await axios.get("https://jsonplaceholder.typicode.com/posts");

console.log(a.data)

const f = await fetch("https://jsonplaceholder.typicode.com/posts");

const fData =await f.json();
console.log(fData[0])