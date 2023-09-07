import React, { useState } from 'react'
import { updateTodo } from '../redux/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'

import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';
const UpdateTodos = () => {
    const { id } = useParams()
    const todos = useSelector(state => state.todos.todos)
    const todo = todos.find(t => t.id === id)
    const [name, setName] = useState(todo.name);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [discription, setDiscription] = useState(todo.discription);
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('https://mern-todo-lwhq.vercel.app/update/' + id, { name, discription })
            .then(res => {
                dispatch(updateTodo({ id, name, discription }))
                console.log(res)
                navigate('/')
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <Navbar />
            <h2 className='container' >Update Todo</h2>
            <form action="" onSubmit={handleSubmit}>

                <div className='container rounded pt-4 ' style={{ backgroundColor: "black" }}  >
                    <div className="mb-3">
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Add Task Name" onChange={(e) => setName(e.target.value)} value={name} />
                    </div>
                    <div className="mb-2">
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Add Task Description" onChange={(e) => setDiscription(e.target.value)} value={discription} />

                    </div>
                    <button className='btn btn-warning mb-2' onClick={handleSubmit} >Update</button>
                </div>
            </form>


        </>
    )
}

export default UpdateTodos