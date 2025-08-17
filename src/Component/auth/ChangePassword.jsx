import React,{ useState } from 'react'
import { RxLockClosed } from "react-icons/rx";
import { useForm } from 'react-hook-form'
import { HashLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import {doc, getFirestore, updateDoc } from 'firebase/firestore';
import {app} from '../Firebase/Index';
import bcrypt from "bcryptjs"
import { toast } from 'react-toastify';


const ChangePassword = () => {

    const firestore = getFirestore(app);

    const {register , handleSubmit ,formState : {errors},watch,reset} = useForm();
    const password = watch("NewPassword");
    const navigate = useNavigate();

    // const UniqueId = useSelector(state => state.User.UniqueId);
    // const UniqueId = useSelector(state => state.User.user.UniqueId);
    // console.log(UniqueId)

    const obj = JSON.parse(localStorage.getItem("User"));
    const UniqueId = obj.UniqueId;
    // console.log(UniqueId)

    const [visibleButton, setVisibleButton] = useState(true);

    const setData = async (data) =>
    {
        setVisibleButton(false);
        try
        {
            const HashedPassword = bcrypt.hashSync(data.NewPassword,10);
            const userDocRef = doc(firestore,"User",String(UniqueId))
            await updateDoc(userDocRef,{Password : HashedPassword});
            console.log("Hello")
            setVisibleButton(true);
            reset({NewPassword : "",ConfirmPassword : "" })
            navigate("/profile")
            toast.success("Your password is changed")
        }
        catch(error)
        {
            console.log(error);
            toast.error("Failded to update password")
            setVisibleButton(true);
        }

    }

  return (
    <div>
      <div className='ChangePassword'>
      <h1 style={{fontFamily:"cursive", paddingBottom:"2%", fontSize:"300%", marginTop:"6%"}} > Change Password</h1>
      <form  onSubmit={handleSubmit(setData)} >
      <div className='Column'>
      <div className="form-floating mb-2 col-15">
      <input type="password" className="form-control" placeholder="Password" {...register("NewPassword",{required : "**Enter your new password" , pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/, message: "Password should contain 8 character with a-z,A-Z,0-9,special character", }})}/>
      <label htmlFor="floatingPassword"><RxLockClosed />{" "}New Password</label>
      </div>
      </div>
      {errors.NewPassword && (
          <span className="redMessage">
            {errors.NewPassword.message}
          </span>
        ) || <span id = "message" className="redMessage"></span>}
      <div className='Column'>
      <div className="form-floating mb-2 mt-2" >
      <input type="password" className="form-control" placeholder="Password" {...register("ConfirmPassword",{required : "**Enter your confirm password", validate: value => value === password || "Password doesn't match"})}/>
      <label htmlFor="floatingPassword"><RxLockClosed />{" "}Confirm Password</label>
      </div>
      </div>
      {errors.ConfirmPassword && (
          <span className="redMessage">
            {errors.ConfirmPassword.message}
          </span>
        ) || <span id = "message" className="redMessage"></span>}
        <br/>
        {
        (visibleButton) ? <span><button type="submit" id='submitButton' className="btn btn-success mt-2">
        Submit
      </button></span> : <div style={{ display:"flex",justifyContent:"center"}}><HashLoader/></div>
      }
      </form>
      </div>
    </div>
  )
}

export default ChangePassword
