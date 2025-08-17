import React from 'react'
import { Navigate, Outlet} from 'react-router-dom';

const ProtectedRoute = () => {
  const login = localStorage.getItem("isLoggedIn") || false;
  const Role =  localStorage.getItem("Role") || null;

  return (!login) ? <Outlet/> : (Role == 2) ? <Navigate to={"/dashboard"}/> : (Role == 1) ? <Navigate to={"/student-detail"}/>: <Navigate to={'/signup'}/> ;
}
export default ProtectedRoute
