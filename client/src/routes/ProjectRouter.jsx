import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProjectPage from '../pages/ProjectPage'
const Project = lazy(()=>import('../pages/Projects'))

function ProjectRouter() {
  return (
    <Routes>
        <Route path='/' element={<Project/>}/>
        <Route path='/crypto-exchange' element={<ProjectPage/>}/>
        <Route path='/' element={<Project/>}/>
        <Route path='/' element={<Project/>}/>
        <Route path='/' element={<Project/>}/>
        <Route path='/' element={<Project/>}/>
        <Route path='/' element={<Project/>}/>
        <Route path='/' element={<Project/>}/>
        <Route path='/' element={<Project/>}/>
        <Route path='/' element={<Project/>}/>
    </Routes>
  )
}

export default ProjectRouter