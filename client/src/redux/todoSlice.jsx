import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: []
    },
    reducers: {
        getTodo: (state, action) => {
            state.todos = action.payload.map(todo => {
                return { id: todo._id, name: todo.name, discription: todo.discription, createdAt: todo.createdAt }
            })
        },
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        updateTodo: (state, action) => {
            const index = state.todos.findIndex(x => x.id === action.payload.id)
            state.todos[index] = {
                id: action.payload.id,
                name: action.payload.name,
                discription: action.payload.discription,
            }
        },
        deleteTodo: (state, action) => {
            const id = action.payload.id;
            state.todos = state.todos.filter(t => t.id !== id)
        }
    }
})

export const { getTodo, addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;