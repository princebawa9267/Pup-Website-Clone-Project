import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Icon } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { getFirestore, updateDoc,doc } from 'firebase/firestore';
import {app} from '../Component/Firebase/Index';
import { HashLoader } from 'react-spinners';
import { useDispatch } from 'react-redux';
import {changeFirstName,changeLastName} from "../Component/Redux/index"
import { toast } from 'react-toastify';

const Profile = () => {

  const dispatch = useDispatch();
  const firestore = getFirestore(app);

  // const FirstName = useSelector(state => state.User.FirstName);
  // const LastName = useSelector(state => state.User.LastName);
  const Role = useSelector(state => state.User.Role);
  const Gender = useSelector(state => state.User.Gender);
  const EmailId = useSelector(state => state.User.EmailId);
  // const UniqueId = useSelector(state => state.User.UniqueId)
  const TeacherSubject = useSelector(state => state.User.SubjectTeacher);

  const Object = JSON.parse(localStorage.getItem("User"));

  const FirstName = Object.FirstName;
  const LastName = Object.LastName;
  const UniqueId = Object.UniqueId;

  const [fName , setFName] = useState(FirstName);
  const [lName , setLName] = useState(LastName || " ");
  const [inputFName , setInputFName] = useState(false);
  const [inputLName, setInputLName] = useState(false);
  const [FNameLoading , setFNameLoading] = useState(false);
  const [LNameLoading , setLNameLoading] = useState(false);

  const navigate = useNavigate();

  const changeFName = async() =>
  {
    setFNameLoading(true)
    try
    {
      if(fName == "")
      {
        setFName(FirstName);
        toast.error("Enter some data");
        console.log("Enter some data");
      }
      else
      {
        Object.FirstName = fName;
        localStorage.setItem("User",JSON.stringify(Object));
        console.log(Object)
        await updateDoc((doc(firestore,"User",String(UniqueId))),{FirstName : fName});
        dispatch(changeFirstName(fName));
        toast.success("Your first name changed successfully")
      }
    }
    catch(error)
    {
      console.log("Error in updating first name")
    }
    setFNameLoading(false)
    setInputFName(false);
  }
  const changeLName = async() =>
  {
    setLNameLoading(true);
    try
    {
      if(lName == "")
      {
        setLName(LastName);
        console.log("Enter some data");
        toast.error("Enter some data");
      }
      else
      {
        Object.LastName = lName;
        console.log(Object);
        await updateDoc((doc(firestore,"User",String(UniqueId))),{LastName : lName});
        dispatch(changeLastName(lName));
        localStorage.setItem("User",JSON.stringify(Object));
        toast.success("Your last name changed successfully")
      }
    }
    catch(error)
    {
      console.log("Error in updating last name")
    }
    setLNameLoading(false)
    setInputLName(false);
  }

  return (
    <div>
      <div className="card text-center" style={{marginLeft:"10%",marginRight:"10%",marginTop:"4%", minHeight:"80vh"}}>
        <div className="card-header" style={{fontSize:"larger", fontWeight:"bolder"}}>
          <u><b>Profile</b></u>
        </div>
        <div className="card-body"style={{textAlign:"center"}}>
        <table className="table" style={{textAlign:"center"}}>
                    <thead className="thead-dark">
                        <tr>
                            <th width={"50%"}><b>First Name</b></th>
                            <td width={"50%"} >{(inputFName) ? <>{ (FNameLoading) ? <HashLoader size={20}/> : <><input type='text' value={fName} width={"2%"} onChange={(e) => setFName(e.target.value)} style={{textAlign:"center"}}/><button style={{border:"none", backgroundColor:"white"}} onClick={() => changeFName()}><Icon name='save'/></button></> }</> : <>{fName}{" "}
                            <button style={{border:"none", backgroundColor:"white"}} onClick={() => setInputFName(true)}><Icon name='edit'/></button></>
                            }
                            </td>
                        </tr>
                        <tr>
                            <th width={"50%"}><b>Last Name</b></th>
                            <td width={"50%"} >{(inputLName) ? <>{(LNameLoading) ? <HashLoader size={20}/> : <><input type='text'value={lName} onChange={(e) => setLName(e.target.value)} style={{textAlign:"center"}} /><button style={{border:"none", backgroundColor:"white"}} onClick={() => changeLName()}><Icon name='save'/></button></>}</> : <> {lName}{" "}
                            <button style={{border:"none", backgroundColor:"white"}} onClick={() => setInputLName(true)}><Icon name='edit'/></button></>}
                            </td>
                        </tr>
                        <tr>
                            <th><b>Gender</b></th>
                            <td>{Gender}</td>
                        </tr>
                        <tr>
                            <th><b>Role</b></th>
                            <td>{(Role == 0) ? <>Admin</> : (Role == 1) ? <>Teacher</> : <>Student</>}</td>
                        </tr>
                        {
                          (Role != 0) ? <tr>
                          <th><b>Unique Id</b></th>
                          <td>{UniqueId}</td>
                          </tr> : <></>
                        }
                        
                        <tr>
                            <th><b>Email Address</b></th>
                            <td>{EmailId}</td>
                        </tr>
                        <tr>
                          <th><b>Password</b></th>
                          <td>{"▪▪▪▪▪▪▪▪ " }
                          <button style={{border:"none", backgroundColor:"white"}} onClick={() => navigate("/reset")}><Icon name='edit'/></button>
                          </td>
                        </tr>
                        {(TeacherSubject !== null) ? <tr><th><b>Subject Assigned</b></th><td>{TeacherSubject}</td></tr> : <span></span>}
                    </thead>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Profile
