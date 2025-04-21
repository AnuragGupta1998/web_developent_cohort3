
// Fetching data from an API using fetch
const fetchFn = ()=>{
    return fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(async (response) => {
           const data =  await response.json()
           console.log("data1",data);
        }
    )

}
fetchFn();

const fetchFn2 = async() => {

    const res= await fetch("https://jsonplaceholder.typicode.com/posts/1");

    const data = await res.json();
    console.log("fetchFn2",data)
}
fetchFn2()

const a = await fetch("https://jsonplaceholder.typicode.com/posts/1");

const b = await a.json();
console.log("b",b);



