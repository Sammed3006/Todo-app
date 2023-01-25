import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';


const TodoList=()=> {
      const todos= useSelector((state)=> state.todos);

  return (
    <ul className="todoItemList">
      {todos.length===0 ? "Nothing to do":todos.map((todo)=>{
       return <TodoItem id={todo.id} title={todo.title} completed={todo.completed}/>
      })}
    </ul>
  )
}

export default TodoList
