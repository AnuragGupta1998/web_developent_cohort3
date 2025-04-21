import axios from "axios";

async function axiosDemo(){
    const res = await axios({
        method:'get',
        url:"https://jsonplaceholder.typicode.com/posts/2"
    })
    console.log("axiosDemo fn",res.data)
}
// axiosDemo();

async function axiosFn2(){
    const res = await axios.post("https://httpdump.app/dumps/0e852c99-e53e-4f0d-8c03-35ef5400037a/?name=anurag",
        {   //body can be send with get request
            //body only send with post request
            "name":"Anurag",        
            "age":23,
        },
        {  //headers
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer token"
            }
        },
    );
    console.log("axiosFn2",res.data)
}
axiosFn2();

const d = await  axios({
    method:"get",
    url:"https://jsonplaceholder.typicode.com/posts/1",
   
});

// console.log("direct use axios",d.data)