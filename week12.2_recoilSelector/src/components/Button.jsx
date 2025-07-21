import React from 'react'
import { useSetRecoilState } from 'recoil';
import { counterAtom } from '../store/counterAtom';

function Button() {
    const setCounter = useSetRecoilState(counterAtom);
  return (
    <div>
        <button onClick={() => {
            // Increment the counter
            setCounter((prev) => prev + 2);
        }}>Increment
        
        </button>

        <button onClick={() => {
            // Decrement the counter
            setCounter((prev) => prev - 1);
        }}>Decrement
        
        </button>
       
    </div>
  )
}

export default Button