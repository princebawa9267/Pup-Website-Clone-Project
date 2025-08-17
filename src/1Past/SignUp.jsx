import React from 'react'
import { app } from '../Firebase/Index';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from 'react';
import bcrypt from "bcryptjs";
import { useForm } from 'react-hook-form'
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import { HashLoader } from 'react-spinners';

//Creating an instance of getAuth
const Auth = getAuth(app);
const db = getFirestore(app);

const SignUp = () => {

    //SignUp time First Name, Last name, Email and password
    const [FName, setFName] = useState("");
    const [LName, setLName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors },watch, } = useForm();
    const password = watch("Password");

    const setData = (data) =>
    {
        setFName(data.FName),
        setLName(data.LName),
        setEmail(data.Email_ID),
        setPassword(data.Password),
        signUpUser();
    }

    //Creating account using Email and password
    const signUpUser = async (e) => {
        setLoading(true);  
        try {
            console.log(Password);
            console.log(Email)
            await createUserWithEmailAndPassword(Auth, Email, Password).then(() => console.log("Account created successfully")).finally(() => setLoading(false))
            const user = Auth.currentUser;
            if (user) {
                const hashedPassword = bcrypt.hashSync(Password, 10)
                await setDoc(doc(db, "User", user.uid), {
                    Email: Email,
                    FirstName: FName,
                    LastName: LName,
                    Password: hashedPassword
                })
            }
        }
        catch (error) {
            console.log("hello", error.message);
        }
    }

    return (
        <>
            <h4 style={{ textAlign: "center" }}>SignUp</h4>
            <form onSubmit={handleSubmit(setData)}>
                <input type='text' placeholder='Enter your first name' {...register("FName", { required: "**Enter your First Name", pattern: { value: /^[a-zA-Z]{3,16}$/, message: "Please enter valid first name", }, })} />
                <label>Enter your first name</label>
                <br/>
                {errors.FName && (
                    <span className="redMessage">
                        {errors.FName.message}
                    </span>
                )}
                <br />
                <input type='text' placeholder='Enter your last name' {...register("LName", { required: "**Enter your Last Name", pattern: { value: /^[a-zA-Z]{3,16}$/, message: "Please enter valid last name", }, })} />
                <label>Enter your last name</label>
                <br/>
                {errors.LName && (
                    <span className="redMessage">
                        {errors.LName.message}
                    </span>
                )}
                <br />
                <input type='Email' placeholder='Enter your Email Address' {...register("Email_ID", { required: "**Enter your Email Address" })} />
                <label>Email Address</label>
                <br/>
                {errors.Email_ID && (
                    <span className="redMessage">
                        {errors.Email_ID.message}
                    </span>
                )}
                <br />
                <input type='password' placeholder='Enter your password' {...register("Password", { required: "**Enter your password", pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/, message: "Password should contain 8 character with a-z,A-Z,0-9,special character", }, })} />
                <label>Password</label>
                <br/>
                {errors.Password && (
                    <span className="redMessage">
                        {errors.Password.message}
                    </span>
                )}
                <br/>
                <input type='password' placeholder='Enter confirm password' {...register("CPassword", { required: "**Enter your password", validate : value => value === password || "Password doesn't match"})} />
                <label>Confirm Password</label>
                <br/>
                {errors.CPassword && (
                    <span className="redMessage">
                        {errors.CPassword.message}
                    </span>
                )}
                <br />
                <HashLoader loading={loading}/>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default SignUp