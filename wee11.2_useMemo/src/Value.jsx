import React from 'react'
import { memo } from 'react'

const Value = memo(function ({ count }) {
  return (
    <div>Value{count}</div>
  )
});

export default Value