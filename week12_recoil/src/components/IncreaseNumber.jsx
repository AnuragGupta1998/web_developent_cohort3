import React from 'react'
import { useSetRecoilState } from 'recoil'
import { counterAtom } from '../store/atoms/counter'  

function IncreaseNumber() {
  const setCount = useSetRecoilState(counterAtom); 
  return (
    <button onClick={()=>setCount( count => count+1 )}>IncreaseNumber</button >
  )
}

export default IncreaseNumber