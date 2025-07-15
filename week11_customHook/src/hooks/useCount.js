import React, { useEffect, useState } from 'react';
function useCount(){
    const [count,setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const[data, setData] = useState([]);  
    
    const increament = () => {
        setCount(count+1);
        
    }

    useEffect(()=>{
        setIsLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error("Error fetching data:", err);
                setIsLoading(false);
            });
    },[])

    return {count, increament,setCount,isLoading,data};
}

export default useCount;
