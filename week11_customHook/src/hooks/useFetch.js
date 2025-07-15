import { useState,useEffect } from "react"; 


const useFetch = () =>{

    const[post,setPost] = useState({});

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => setPost(data))
        .catch(error => console.error('Error fetching data:', error));

    },[])

    return post;
}

export default useFetch;