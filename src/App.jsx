import React from 'react'
import Home from './Pages/Home/Home'
import './App.css'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'


function App() {


  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  )
}

export default App
