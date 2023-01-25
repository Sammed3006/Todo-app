import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {toggleComplete,deleteTodo} from "../redux/TodoSlice"
import "./todoItem.css"

const TodoItem=({id,title,completed})=> {
    const dispatch= useDispatch()
    const checkHandle=()=>{
        dispatch(toggleComplete({id,completed: !completed}))
    }
    const deleteHandle =()=>{
            dispatch(deleteTodo({id}))
    }

  return (
    <li className="todoItemList">
        <div className="todoItemContainer">
            <span className='todoContent'>
                <input type="checkbox" onClick={checkHandle} checked={completed} className="todoCheckbox"></input>
                {title}
            </span>
            <button onClick={deleteHandle} className="todoBtn">Delete</button>
        </div>
    </li>
    
  )
}
export default TodoItem