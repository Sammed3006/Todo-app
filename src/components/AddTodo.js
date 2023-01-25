import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/TodoSlice'
import "./addTodo.css"

const  AddTodo=()=> {
    const [value,setValue]=useState("")

    const dispatch =useDispatch();
    const formHandle =(e)=>{
        e.preventDefault();
        if(value){
            dispatch(
                addTodo({title : value})
            ) 
            setValue("")
        }
       
    }

  return (
    <form onSubmit={formHandle} className="addTodoForm">
      <input type="text" placeholder="     Add todo here" value={value} onChange={e => setValue(e.target.value)} className="addTodoInput"></input>
      <button type="submit" className="addTodoSubmit">Submit</button>
    </form>
  )
}
export default AddTodo