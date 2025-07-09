import React, { useState } from 'react';
function useCount(){
    const [count,setCount] = useState(0);
    
    const increament = () => {
        setCount(count+1);
        
    }

    return {count, increament,setCount};
}

export default useCount;
