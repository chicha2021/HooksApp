import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { About } from './About'
import { Home } from './Home'
import { Login } from './Login'

export const MainApp = () => {
  return (
    <>
      <h1>MainApp</h1>
      <hr />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />

        <Route path='/*' element={<Navigate to={"/about"} />} />
      </Routes>
    </>
  )
}
