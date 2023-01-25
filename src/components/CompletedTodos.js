import React from 'react'
import { useSelector } from 'react-redux'
import "./completedTodo.css"

const  CompletedTodos=()=> {
    const tasks = useSelector(state => state.todos.length )
  
 
    const todos=useSelector((state)=>state.todos.filter(todo => todo.completed===true))
  return (
    tasks ===0 ? "All work is done" : <h4 className="completedItems">Total Completed Items : {todos.length}</h4>

  )
}

export default CompletedTodos
