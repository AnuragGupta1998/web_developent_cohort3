import React from 'react'
import { useRecoilValue } from 'recoil';
import { isEvenSelector } from '../store/isEvenSelector';   


function IsEven() {
    const isEven = useRecoilValue(isEvenSelector);
  return (
    <div>{isEven ? "EVEN" : "ODD"}</div>
  )
}

export default IsEven