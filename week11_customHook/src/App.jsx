import {  use, useState } from 'react'
import useCount from './hooks/useCount.js'
import Users from './Users'
import './App.css'
import useFetch from './hooks/useFetch.js' 
import { usePrev } from './hooks/usePrev.js' 
import { useDebounce } from './hooks/useDebounce.js' // Importing the custom hook

function App() {
  const{count,increament,setCount,isLoading} = useCount()

  // const p = useFetch();
  const post = useFetch();

  console.log("app rendered",count)

  //usePrev hook example
  const [number, setNumber] = useState(0);
  const prevNumber = usePrev(number);

  //debouncing example
  function importantFunction() {
    console.log("Important function executed");
  }
  const debouncedFunction = useDebounce(importantFunction);

  
  return (
    <>
      button clicked {count} times
      <button onClick={increament}>Increase </button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      {isLoading ? "LOADING" : <Users />}

      <h1>Fetch Data</h1>
      {post.title ? post.title : "Loading..."}

      <h1>usePrev Hook</h1>
      <h2>Current Number: {number}</h2>
      <h2>Previous Number: {prevNumber}</h2>
      <button onClick={() => setNumber(number + 1)}>Increment Number</button>

      <input type="text" onChange={debouncedFunction}/>

    </>
  )
}

export default App
