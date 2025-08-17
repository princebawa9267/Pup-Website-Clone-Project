import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { About, Faculty, Home, Profile } from "./index"
import { Footer, NavBar } from "../Components/Index"
import { SignIn, ChangePassword, SignUp } from '../Component/auth/index'
import Dashboard from '../Component/Student/Dashboard'
import StudentDetail from '../Component/Teacher/StudentDetail'
import { AdminPrivateRoute, PrivateRoute, ProtectedRoute, StudentPrivateRoute, TeacherPrivateRoute } from '../Routes/index'
import User from '../Component/Admin/User'

const ReactRouter = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<><Home /><Footer /></>} />
        <Route path='/about' element={<><About /><Footer /></>} />
        <Route path="/faculty" element={<><Faculty /><Footer /></>} />
        <Route element={<ProtectedRoute />}>
        <Route path='/signin' element={<SignIn />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile/>} />
          <Route path='/reset' element={<ChangePassword/>} />
          <Route element={<StudentPrivateRoute />}>
            <Route path='/dashboard' element={<Dashboard/>} />
          </Route>
          <Route element={<TeacherPrivateRoute/>}>
            <Route path='/student-detail' element={<StudentDetail/>} />
          </Route>
          <Route element={<AdminPrivateRoute/>}>
            <Route path='/users' element={<User/>}/>
            <Route path='/signup' element={<SignUp/>}/>
          </Route>
        </Route>
        <Route path="*" element={<><Navigate to="/" replace/></>} />
      </Routes>
    </div> 
  )
}

export default ReactRouter
