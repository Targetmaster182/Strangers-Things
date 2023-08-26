import './App.css'
import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import AllPosts from './Pages/AllPosts'
import NavBar from './Comonents/NavBar'
import Login from '../src/Pages/Login'
import SignUp from './Pages/SignUp'
import ProfilePage from '../src/Pages/ProfilePage'
import CreatePost from './Pages/CreatePost'


function App() {
  const [token, setToken] = useState(localStorage.getItem('token')) 

  return (
    <div>
      <NavBar token={token} setToken={setToken}/>
      <Routes>
        <Route path='/' element={<Login setToken={setToken}/>} />
        <Route path='Posts' element={<AllPosts/>}/>
        <Route path='SignUp' element={<SignUp/>}/>
        <Route path='Profile' element={<ProfilePage token={token} setToken={setToken}/>}/>
        <Route path='CreatePost' element={<CreatePost token={token}/>}/>


      </Routes>
    </div>
  )
}

export default App
