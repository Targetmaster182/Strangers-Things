import './App.css'
import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import AllPosts from './Pages/AllPosts'
import NavBar from './Comonents/NavBar'
import Login from '../src/Pages/Login'
import SignUp from './Pages/SignUp'

function App() {


  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='Posts' element={<AllPosts/>}/>
        <Route path='SignUp' element={<SignUp/>}/>


      </Routes>
    </div>
  )
}

export default App
