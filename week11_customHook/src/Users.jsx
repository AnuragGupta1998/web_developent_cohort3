import React from 'react'
import useCount from './hooks/useCount'

function Users() {
    const { count, increament, setCount, isLoading, data } = useCount();

    const userData = data.map(user=><div key={user.id}>
        <h2>USER NAME= {user.name}</h2>
        <p>USER EMAIL= {user.email}</p>     
      </div>);

    
  return (
    <div>{userData}</div>
  )
}

export default Users