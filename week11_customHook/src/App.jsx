import {  useState } from 'react'
import useCount from './hooks/getCount.js'
import Users from './Users'
import './App.css'

function App() {
  const{count,increament,setCount,isLoading} = useCount()
  console.log("app rendered",count)
  
  return (
    <>
      button clicked {count} times
      <button onClick={increament}>Increase </button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      {isLoading ? "LOADING" : <Users />}

    </>
  )
}

export default App
