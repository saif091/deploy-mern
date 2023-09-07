import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { deleteTodo } from '../redux/todoSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
const Todos = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos.todos)
    const handleDelte = (id) => {
        axios.delete('https://mern-todo-lwhq.vercel.app/delete/' + id)
            .then(res => {
                dispatch(deleteTodo({ id }))
            }).catch(err => console.log(err))
    }
    return (
        <>
            <Navbar />
            <h1 className='container d-flex align-items-center justify-content-center  ' style={{ height: "200px", color: 'black' }}>Todos</h1>

            <div className='d-flex align-items-center justify-content-center ' style={{ height: "100px", color: 'gray' }}>
                <form action="">
                    <h3>Your Todo will Appear Below</h3>
                    <table className="table table-dark table-striped container">
                        <thead>
                            <tr>
                                <th scope="col">Task Name</th>
                                <th scope="col">Task Discription</th>
                                <th></th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                todos.map(todo => {
                                    const name = todo.name
                                    const discription = todo.discription
                                    const iid = todo.id
                                    if (iid) {
                                        return (<>
                                            <tr>
                                                <td scope='row'>{name}
                                                </td>
                                                <td scope='row' >{discription}</td>
                                                <td><Link to={`/edit/${iid}`} className='btn btn-sm btn-success me-2' >Update</Link>
                                                    <button onClick={() => handleDelte(todo.id)} className='btn btn-sm btn-danger' >Delete</button></td>
                                            </tr>
                                        </>
                                        )
                                    }
                                    else {
                                        window.location.reload()
                                    }


                                })
                            }




                        </tbody>
                    </table>


                </form>
            </div>
        </>

    )
}

export default Todos