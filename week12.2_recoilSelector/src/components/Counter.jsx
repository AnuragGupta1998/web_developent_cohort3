import React from 'react'
import { useRecoilValue } from 'recoil';
import { counterAtom } from '../store/counterAtom';

function Counter() {
    const counter = useRecoilValue(counterAtom);
    
  return (
    <div>Counter {counter}</div>
  )
}

export default Counter