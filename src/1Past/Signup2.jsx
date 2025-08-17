import React from 'react'
import { useForm } from "react-hook-form";
import bcrypt from "bcryptjs";
import "../CSS/SignUp.css"
import { LiaUser } from "react-icons/lia";
import { RxLockClosed } from "react-icons/rx";
import { Link } from 'react-router-dom';
// import {Link,useNavigate} from "react-router-dom"

export default function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
      } = useForm();

    //   const navigate = useNavigate();
      const password = watch("password");
      const onSubmit = (data) => {
      const hashedPassword = bcrypt.hashSync(data.password , 10);
        // Initally value assgin
      const existingUser = JSON.parse(localStorage.getItem("user")) || [];

        //New user account created
      const newUser = {userName : data.userName, password : hashedPassword};
        //Pushing element into array
      existingUser.push(newUser);
        // Array of object is converted into string
      localStorage.setItem("user",JSON.stringify(existingUser));
    //   navigate('/Login');
  };
  return (
    <div className='SignUpBox' style={{display :"flex" , justifyContent :"center", margin : "6rem"}}>
        <form onSubmit={handleSubmit(onSubmit)} className="pageForm">
        <h1>Create Account</h1>
        <div className="items">
        {/* Username input */}
        <div className="form-floating mb-3 col-15">
          <input
            type="text"
            className="form-control"
            placeholder="name@example.com"
            {...register("userName", { required: "**Enter userName first", pattern : {value : /^[a-zA-Z]{3,16}$/ , message : "Please enter valid username",},
               validate : value => { const existingUser = JSON.parse(localStorage.getItem("user")) || [] ; return !existingUser.some(user => user.userName === value) || "User already exist"} 
              // validate : value => !JSON.parse(localStorage.getItem("user")).some(user => user.userName === value) || "user already exist"
              })}
          />
          <label htmlFor="floatingInput"><LiaUser /> Username</label>
        </div>
        {errors.userName && (
          <span className="redMessage">
            {errors.userName.message}
          </span>
        )}

        {/* Password input */}
        <div className="form-floating mb-3 col-15">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            {...register("password", { required: "**Enter password first" , minLength : {value : 5 , message : "Length should be greater than 5"}, maxLength : {value : 8 , message : "Length should be less than 8"},  })}
          />
          <label htmlFor="floatingPassword"><RxLockClosed /> Password</label>
        </div>

        {errors.password && (
          <span className="redMessage">
            {errors.password.message}
          </span>
        )}

        {/* Confirm Password */}
        <div className="form-floating mb-3 col-15">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "**Enter confirm password first", validate : value => value === password || "Password doesn't match"
            })}
          />
          <label htmlFor="floatingConfirmPassword"><RxLockClosed /> Confirm Password</label>
        </div>
        {errors.confirmPassword && (
          <span className="redMessage">
            {errors.confirmPassword.message}
          </span>
        )}
        </div>
        <br />
        <button type="submit" className="btn btn-success">
          Submit
        </button>
        <br/>
        <Link to = "/Login">Already have account?</Link>
      </form>
    </div>
  )
}
