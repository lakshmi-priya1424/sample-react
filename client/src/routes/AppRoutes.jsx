import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import NotFound from '../pages/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}
