import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';


const PrivateRoute = () => {
  const  login = localStorage.getItem("isLoggedIn") || false
  console.log(login);
  return (login) ? <Outlet/> : <><>{toast.error("Please login first")}</><Navigate to={"/signin"}/></>;
}

export default PrivateRoute
