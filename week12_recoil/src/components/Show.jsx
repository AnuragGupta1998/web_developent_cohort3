import React from 'react'
import  {useRecoilValue}  from 'recoil'
import { counterAtom } from '../store/atoms/counter'

function Show() {
  const counterState = useRecoilValue(counterAtom);

  return (
    <div>Number is {counterState}</div>
  )
}

export default Show