import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';

const TeacherPrivateRoute = () => {
    const Role = localStorage.getItem("Role") || null;
    console.log("Only teacher",Role);
  return (Role == 1) ? <Outlet/> : <><Navigate to={"/"}/>{toast.error("Incorrect path")}</>
}

export default TeacherPrivateRoute
