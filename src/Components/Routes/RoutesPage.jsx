import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import Rubrics from '../Pages/Rubrics'
import Brands from '../Pages/Brands'
import About from '../Pages/About'

export default function RoutesPage() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='rubrics' element={<Rubrics/>}/>
        <Route path='brands' element={<Brands/>}/>
        <Route path='about' element={<About/>}/>
    </Routes>
  )
}

