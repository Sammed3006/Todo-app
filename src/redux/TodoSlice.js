import {createSlice} from '@reduxjs/toolkit'

export const TodoSlice = createSlice({
    name : "todos",
    initialState : [
        {id:1,title:"exercising ",completed : false},
        {id:2,title:"withdrawing money from atm",completed : false},
        {id:3,title:"taking NOC approvals",completed : false},
    ],
    reducers:{
        addTodo : (state,action)=>{
            const todo={
                id:new Date(),
                title :action.payload.title,
                completed:false
            }
            state.push(todo )
        },
        toggleComplete : (state,action)=>{
            const index=state.findIndex((todo)=>todo.id===action.payload.id)
            state[index].completed=action.payload.completed
        },

        deleteTodo:(state,action)=>{
            return state.filter(todo =>todo.id !==action.payload.id)
        }
    },
})

export const {addTodo,toggleComplete,deleteTodo} = TodoSlice.actions
export default TodoSlice.reducer;   