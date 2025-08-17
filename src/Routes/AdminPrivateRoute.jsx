import React from 'react'
import { Navigate, Outlet} from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminPrivateRoute = () => {
    const Role = localStorage.getItem("Role") || null;
    return (Role == 0) ? <Outlet/> : <><Navigate to={"/"}/>{toast.error("Incorrect path")}</>
}

export default AdminPrivateRoute
