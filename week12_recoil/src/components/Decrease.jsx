import React from 'react'
import { useContext } from 'react'
import { CountContext } from '../CountContexApi'

function Decrease() {
    const { count, setCount } = useContext(CountContext);
  return (
    <button onClick={() => setCount(count - 1)}> decrease </button>
  )
}

export default Decrease