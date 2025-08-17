import ReactRouter from './Pages/ReactRouter';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { dataAvailable } from './Component/Redux';
import { ToastContainer } from 'react-toastify';

import './App.css'
import "./CSS/Login.css"
import './CSS/Signup.css'
import './CSS/Card.css'
import './CSS/Users.css'
import './CSS/studentDetails.css'
import "./CSS/ChangePassword.css"
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() =>
    {
      if(localStorage.getItem("User") !== null)
      {
        dispatch(dataAvailable(JSON.parse(localStorage.getItem("User"))))
        // console.log("After refresh data is loaded into redux using local storage")
      }
    },[])

  return (
    <>
    <BrowserRouter>
      <ToastContainer/>
      <ReactRouter/>
    </BrowserRouter>
    </>
  )
}

export default App
