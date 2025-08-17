import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';

const StudentPrivateRoute = () => {
  const Role = localStorage.getItem("Role") || null;
  console.log("Only student",Role)
  return (Role == 2) ? <Outlet/> : <><Navigate to={"/"}/>{toast.error("Incorrect path")}</>
}

export default StudentPrivateRoute