import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashBoard from './DashBoard'
import MovieInfo from './MovieInfo'

const MainRouter = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<DashBoard />}/>
        <Route path='/info/:id' element={<MovieInfo />}/>
    </Routes>
    </>
  )
}

export default MainRouter