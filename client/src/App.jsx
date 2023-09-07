import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import axios from 'axios'
import Todos from './components/Todos'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateTodos from './components/CreateTodos'
import { getTodo } from './redux/todoSlice'
import UpdateTodos from './components/UpdateTodos'
function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://mern-todo-lwhq.vercel.app/`)
        dispatch(getTodo(response.data))
      } catch (e) {
        console.log(e)
      }
    }
    fetchData();
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Todos />} />
          <Route path='/create' element={<CreateTodos />} />
          <Route path='/edit/:id' element={<UpdateTodos />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
