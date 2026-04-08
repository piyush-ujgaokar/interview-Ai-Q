import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import axios from 'axios'
import { useEffect } from 'react'

const App = () => {

  useEffect(()=>{
    
 try {
       const getUser=async()=>{
      const result=await axios.get('http://localhost:3000/api/user/current-user',{
        withCredentials:true
      })
      console.log(result.data)
    }

  getUser()
 } catch (error) {
    console.log(error)
 }  
  })


  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/auth' element={<Auth/>} />
    </Routes>
  )
}

export default App