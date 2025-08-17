import React, {useState} from 'react'
import { app } from '../Firebase/Index';
import bcrypt from "bcryptjs"
import { collection, getDocs, getFirestore, query ,where } from 'firebase/firestore';
import {useDispatch} from 'react-redux'
import { login } from '../Redux';
import { useForm } from 'react-hook-form'
import { LiaUser } from "react-icons/lia";
import { RxLockClosed } from "react-icons/rx";
import { HashLoader } from 'react-spinners';
import MyToast from '../../Components/Toast';
import { useNavigate } from 'react-router-dom';

//Creating an instance of getFirestore
const db = getFirestore(app);

const SignIn = () =>
{
    const [Message, setMessage] = useState("");
    const [visibleButton, setVisibleButton] = useState(true);
    const [ToastVisible , setToastVisible] = useState(false);


    const {register , handleSubmit ,formState : {errors},reset} = useForm();
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
      const setData = (data) =>
      {
        setMessage("  ")
        loginUser(data.EmailID,data.Password,reset);
      }

        const loginUser = async (Email,Passcode,resetForm) =>
            {
              setVisibleButton(false);
              try {
                const CollectionRef = collection(db,"User")
                const q = query(CollectionRef, where('Email',"==",Email));
                const snap = await getDocs(q);
                if(!snap.empty)
                  {
                    const userDoc = snap.docs[0];
                    const hashpass = userDoc.data().Password;
                    bcrypt.compare(Passcode,hashpass,function (err,isMatch) {
                      if(isMatch)
                        {
                          //Here login is redux
                          dispatch(login(userDoc.data()));
                          localStorage.setItem("isLoggedIn",true);
                          localStorage.setItem("Role",userDoc.data().Role)
                          setVisibleButton(true);
                          (userDoc.data().Role == 0) ? navigate("/users") : ((userDoc.data().Role == 2) ? navigate("/dashboard") : navigate("/student-detail"))
                      }
                      else
                      {
                        setMessage("Password is incorrect");
                        setToastVisible(true);
                        setVisibleButton(true);
                        resetForm({EmailID : Email,Password : ""});
                      }
                  })
                }
                else
                {
                  setMessage("Entered Email Address doesn't exists");
                  setToastVisible(true);
                  console.log("Email Id doesn't exists");
                  setVisibleButton(true);
                  resetForm({EmailID : Email,Password : ""});
                }
              }
              catch(err)
              {
                console.log(err.message)
                setMessage("Failed to fetch data due to network issue")
                setToastVisible(true);
                setVisibleButton(true);
              }
              
            }

    return(
      <div className='container'>
        <div style={{marginLeft:"35%",height:"4rem"} }>
          {
            (ToastVisible) ? <MyToast setToastVisible={setToastVisible} Message={Message}/> : <span></span>
          }
         </div>
        <div className='LoginPage'>
      <h1 style={{fontFamily:"cursive", paddingBottom:"2%", fontSize:"300%"}}>Login Page</h1>
      <form onSubmit={handleSubmit(setData) }>
      <div className="form-floating mb-3 col-40">
      <input type="text" className="form-control" placeholder="name@example.com" {...register("EmailID",{required : "**Enter your Email Address first" })} />
      <label htmlFor="floatingInput"><LiaUser /> Email Address</label>
      </div>
      {errors.EmailID && (
          <span className="redMessage">
            {errors.EmailID.message}
          </span> 
        )}
        
      <div className="form-floating mb-2 col-15" >
      <input type="password" className="form-control" placeholder="Password" {...register("Password",{required : "**Enter your password first"})}/>
      <label htmlFor="floatingPassword"><RxLockClosed /> Password</label>
      </div>
      {errors.Password && (
          <span className="redMessage">
            {errors.Password.message}
          </span>
        ) || <span id = "message" className="redMessage"></span>}
      <br/>
      {
        (visibleButton) ? <span><button type="submit" id='submitButton' className="btn btn-success">
        Submit
      </button></span> : <div style={{ display:"flex",justifyContent:"center"}}><HashLoader/></div>
      }
        <br/>
      </form>
    </div>
        </div>
    )
}

export default SignIn