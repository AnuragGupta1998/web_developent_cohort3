import React from 'react'
import { useRecoilValue } from "recoil";
import { todosAtomFamily } from "./atomFamily"; 

function Todo({id}) {
    const todo = useRecoilValue(todosAtomFamily(id));
  return (
    <div>
        {todo.id} <span> </span>
        {todo.title}
    </div>
  )
}

export default Todo