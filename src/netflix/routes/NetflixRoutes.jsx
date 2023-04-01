import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home  from '../pages/Home'
import { Profile } from '../pages/Profile'

export const NetflixRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <Home /> } />

        <Route path="/profile" element={<Profile/>} />

        <Route path='/*' element={<Navigate to='/'/>}/>
    </Routes>
  )
}
