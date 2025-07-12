import React from 'react'
import useCount from './hooks/getCount'

function Users() {
    const { count, increament, setCount, isLoading, data } = useCount();

    const userData = data.map(user=><div key={user.id}>
        <h2>{user.name}</h2>
        <p>{user.email}</p>     
      </div>);

    
  return (
    <div>{userData}</div>
  )
}

export default Users