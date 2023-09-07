import React, { useState } from 'react'
import { addTodo } from '../redux/todoSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
const CreateTodos = () => {
    const [name, setName] = useState();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [discription, setDiscription] = useState();
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://mern-todo-lwhq.vercel.app/create/', { name, discription })
            .then(res => {
                dispatch(addTodo(res.data))
                console.log(res)
                navigate('/')
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <Navbar />
            <h2>Add Todo</h2>
            <form action="" onSubmit={handleSubmit}>

                <div className='container rounded  pt-4' style={{ backgroundColor: "black" }} >
                    <div className="mb-3">
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Add Task Name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Add Task Description" onChange={(e) => setDiscription(e.target.value)} />

                    </div>
                    <button className='btn btn-warning mb-2' onClick={handleSubmit} >Submit</button>
                </div>
            </form>


        </>
    )
}

export default CreateTodos