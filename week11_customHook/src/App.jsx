import {  useState } from 'react'
import useCount from './hooks/getCout.js'
import './App.css'

function App() {
  const{count,increament,setCount} = useCount()
  console.log("app rendered",count)
  
  return (
    <>
      button clicked {count} times
      <button onClick={increament}>Increase </button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>

    </>
  )
}

export default App
