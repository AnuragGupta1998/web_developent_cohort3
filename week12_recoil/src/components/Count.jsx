import React from 'react'
import { useContext } from 'react';
import {CountContext} from '../CountContexApi';

function Count() {
  const { count } = useContext(CountContext);
  
  return (
    <div>Count {count}</div>
  )
}

export default Count