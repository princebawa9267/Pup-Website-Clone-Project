import React from 'react'
import { useForm } from 'react-hook-form'
import bcrypt from "bcryptjs"
import { LiaUser } from "react-icons/lia";
import { RxLockClosed } from "react-icons/rx";
import { Link } from 'react-router-dom';

import "../CSS/Login.css"

const Login = () => {

    const {register , handleSubmit ,formState : {errors}} = useForm();
    const onSubmit = (data) =>
        {
        const userGenuine = JSON.parse(localStorage.getItem("user")) || [];
        if(userGenuine.some(users => users.userName === data.loginUserName)) 
          {
            const index = userGenuine.findIndex(users => users.userName === data.loginUserName);
            const user = userGenuine[index];
            
            bcrypt.compare(data.Password,user.password,function(err,isMatch)
            {
            if(err)
              {
                sessionStorage.clear();
                throw err;
              }
              else if(!isMatch)
                {
                  document.getElementById("message").innerHTML = "Id or password is wrong";
                  sessionStorage.clear();
                }
              else
              {
                console.log("password match")
                sessionStorage.setItem("loggedIn",true);
                // navigate("/dashboard");
              }
          });
          }
          else
          {
            document.getElementById("message").innerHTML = "Id or password is wrong";
            console.log("Hello")
            console.log(data.loginUserName);
            sessionStorage.clear();
          }
        }

  return (
      <div className='LoginPage'>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit(onSubmit) }>

      <div className="form-floating mb-3 col-40">
      <input type="text" className="form-control" placeholder="name@example.com" {...register("loginUserName",{required : "**Enter your userName first" })} />
      <label htmlFor="floatingInput"><LiaUser /> Username</label>
      </div>
      {errors.loginUserName && (
          <span className="redMessage">
            {errors.loginUserName.message}
          </span>
        )}


      <div className="form-floating mb-3 col-15" >
      <input type="password" className="form-control" placeholder="Password" {...register("Password",{required : "**Enter your password first"})}/>
      <label htmlFor="floatingPassword"><RxLockClosed /> Password</label>
      </div>
      {errors.Password && (
          <span className="redMessage">
            {errors.Password.message}
          </span>
        ) || <span id = "message" className="redMessage"></span>}

        <button type="submit" className="btn btn-success">
          Submit
        </button>
        <br/>
      <Link to = "/SignUp">Create account</Link>
        {/* <Link to = "/Register">Create account</Link> */}
      </form>
    </div>
  )
}

export default Login
