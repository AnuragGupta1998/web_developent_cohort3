import React, { useState,useEffect } from 'react'


function App() {
  const[allow,setAllow]=useState(true);

  useEffect(() => {
    console.log("App useeffect allow ",allow)
    setInterval(()=>{
      console.log("App setInterval")
      setAllow(stat => !stat)
    },5000);
  }, [])
  

  return (
    <div className='bg-cyan-200 text-2xl border border-black '>
      {allow && <Timer />}
    </div>
  )
}
function Timer(){
  const[second,setSecond]=useState(0);

  useEffect(()=>{
    console.log("Time Component")

    const timeClear=setInterval(()=>{
      console.log("Time setInterval")
      setSecond(sec => sec + 1);
    },1000)
    //this code run on unmount Time component   cleanup function
    return () => {
      clearInterval(timeClear)
    }

  },[])

  useEffect

  return (
    <>
    <div>Timer component for in DOM {second} </div>
    
    </>
  )
}

export default App