import React from 'react'
import { useContext } from 'react'
import { CountContext } from '../CountContexApi';

function Increase() {
    const { count, setCount } = useContext(CountContext);

  return (
   <button onClick={() => setCount(count + 1)} > increase </button>
  )
}

export default Increase