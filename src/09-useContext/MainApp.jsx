import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { About } from './About'
import { UserProvider } from './context/UserProvider'
import { Home } from './Home'
import { Login } from './Login'
import { NavBar } from './NavBar'

export const MainApp = () => {
  return (
    <UserProvider>
      <h1>MainApp</h1>
      <NavBar />
      <hr />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />

        <Route path='/*' element={<Navigate to={"/about"} />} />
      </Routes>
    </UserProvider>
  )
}
