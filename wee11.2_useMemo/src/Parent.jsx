import React, { useEffect } from 'react'
import Value from './Value'
import Increase from './Increase'
import Decrease from './Decrease'
function Parent() {
    const [count, setCount] = React.useState(0);

    useEffect(() => {
        console.log("Parent component mounted or updated");

        setInterval(()=>{
            setCount(prevCount => prevCount + 1);
        },2000)

    }, []);    
  return (
    <> Parent Component
     <Value count={count} />
     <Increase />
     <Decrease />
    </>
  )
}

export default Parent