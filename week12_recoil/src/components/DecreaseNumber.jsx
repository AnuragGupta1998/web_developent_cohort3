import React, { use } from 'react'
import { useSetRecoilState } from 'recoil'
import { counterAtom } from '../store/atoms/counter'

function DecreaseNumber() {
  const setCount = useSetRecoilState(counterAtom);
  return (
    <button onClick={()=>setCount( count => count-1 )}> DecreaseNumber </button >
  )
}

export default DecreaseNumber