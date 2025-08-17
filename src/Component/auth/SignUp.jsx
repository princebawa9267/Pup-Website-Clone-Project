import React, { useState,useRef } from 'react'
import { app } from '../Firebase/Index';
import bcrypt from "bcryptjs";
import { useForm } from 'react-hook-form'
import { getFirestore, setDoc, doc, getDoc,getDocs,collection,query,where } from 'firebase/firestore';
import { HashLoader } from 'react-spinners';
import { toast } from 'react-toastify';


//Creating an instance of getFirestore
const db = getFirestore(app);

const SignUp = () => {

    //SignUp time First Name, Last name, Email and password
    // const [FName, setFName] = useState("");
    // const [LName, setLName] = useState("");
    // const [Email, setEmail] = useState("");
    // const [Password, setPassword] = useState("");
    // const [Gender, setGender] = useState(null);
    // const [UserType, setUserType] = useState(null);
    // const [UniqueId, setUniqueId] = useState(null);
    // const [subject, setSubject] = useState("");
    // const [CPlusMarks, setCPlusMarks] = useState(null);
    // const [DSAMarks, setDSAMarks] = useState(null);
    // const [PythonMarks, setMarks] = useState(null);
    // const [JavaMarks, setJavaMarks] = useState(null);

    const form = useRef(null);

    const [loading, setLoading] = useState(false);
    const [visibleButton, setVisibleButton] = useState(true);

    const { register, handleSubmit, formState: { errors }, watch,reset } = useForm();
    // const password = watch("Password");
    const isUser = watch("User");

    // const setData = (data) => {
    //     setFName(data.FName),
    //         setLName(data.LName),
    //         setEmail(data.Email_ID),
    //         setPassword(data.Password),
    //         setGender(data.Gender),
    //         setUniqueId(parseInt(data.UniqueId)),
    //         setUserType(parseInt(data.User)),
    //         signUpUser(data);
    // }

    //Creating account using Email and password
    const signUpUser = async (data) => {
        setVisibleButton(false)
        setLoading(true);

        const docRef = doc(db, "User", data.UniqueId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document Already exists");
            toast.error("This id already exists");
            setLoading(false);
            setVisibleButton(true);
            form.current.reset();
            return;
        }
        try {
            const CollectionRef = collection(db,"User")
            const q = query(CollectionRef, where('Email',"==",data.Email_ID));
            const snap = await getDocs(q);
            if(!snap.empty)
            {
                console.log("This email already exists");
                toast.info("This email already exists")
                setLoading(false);
                setVisibleButton(true);
                form.current.reset();
                return;
            }

            //Creating a password
            const Password = data.FName + "@123"

            // const hashedPassword = bcrypt.hashSync(data.Password, 10)
            const hashedPassword = bcrypt.hashSync(Password,10)
            const UserData = {
                UniqueId: parseInt(data.UniqueId),
                FirstName: data.FName,
                LastName: data.LName,
                Gender: data.Gender,
                Role: parseInt(data.User),
                Email: data.Email_ID,
                Password: hashedPassword,
            }
            if (data.User == 1) {
                UserData.Subject = data.Subject;
            }
            else {
                await setDoc(doc(db, "Student Marks", data.UniqueId), {
                    // CPlus: parseInt(data.CPlusMarks),
                    // DSA: parseInt(data.DSAMarks),
                    // Python: parseInt(data.PythonMarks),
                    // Java: parseInt(data.JavaMarks)
                })
            }
            await setDoc(doc(db, "User", data.UniqueId), UserData)
            setLoading(false);
            toast.success("Account created successfully")
            console.log("Account Created")
            form.current.reset();
            setVisibleButton(true);
        }
        catch (error) {
            console.log("hello", error.message);
            toast.error(error.message)
            setLoading(false);
        }
    }
    return (
        <div>
            <div className='SignUpPage'>

                <h1 style={{ textAlign: "center", fontFamily: 'cursive', paddingBottom: "2%", fontSize: "300%" }}>Create Account</h1>

                <form ref={form} onSubmit={handleSubmit(signUpUser)}>
                    <div className='Column'>
                        <div className="form-floating col-40">
                            <input type='text' className="form-control" placeholder='' {...register("FName", { required: "**Enter First Name", pattern: { value: /^[a-zA-Z]{3,16}$/, message: "Please enter valid first name", }, })} />
                            <label>Enter first name</label>
                        </div>
                    </div>
                    <div className='Column'>
                        {errors.FName && (
                            <span className="redMessage">
                                {errors.FName.message}
                                <br />
                            </span>
                        )}
                    </div>
                    <div className='Column'>
                        <div className="form-floating mt-3 col-40">
                            <input type='text' className="form-control" placeholder='Enter last name' {...register("LName", { required: "**Enter Last Name", pattern: { value: /^[a-zA-Z]{3,16}$/, message: "Please enter valid last name", }, })} />
                            <label>Enter last name</label>
                        </div>
                    </div>
                    <div className='Column'>
                        {errors.LName && (
                            <span className="redMessage">
                                {errors.LName.message}
                                <br />
                            </span>
                        )}
                    </div>
                    <div className='Column mt-3'>
                    <div>
                        <pre style={{ display: 'inline',fontWeight: "bold",fontSize:"medium"}}>Gender : </pre>
                        <input type='radio' name='Gender' value="Male" {...register("Gender", { required: "**Select gender" })} /><label htmlFor="Gender">Male</label>
                        <input type='radio' name='Gender' value="Female" {...register("Gender", { required: "**Select gender" })} /><label htmlFor="Gender">Female</label>
                    </div>
                    </div>
                    <div className='Column'>
                        {errors.Gender && (
                            <span className="redMessage">
                                {errors.Gender.message}
                                <br />
                            </span>
                        )}
                    </div>
                    <div className='Column mt-3'>
                        <div >
                            <pre style={{ display: 'inline', fontWeight: "bold",fontSize:"medium" }}>Role : </pre>
                            <input type='radio' name='User' value={1} {...register("User", { required: "**Select user type" })} /><label htmlFor="Teacher">Teacher</label>
                            <input type='radio' name='User' value={2} {...register("User", { required: "**Select user type" })} /><label htmlFor="Student">Student</label>
                        </div>
                    </div>
                    <div className='Column'>
                        {errors.User && (
                            <span className="redMessage">
                                {errors.User.message}
                            </span>
                        )}
                    </div>
                    {(isUser == 1) ?
                        <span>
                            <div className='Column'>
                            <div className='mt-3'>
                                <pre style={{ display: 'inline', fontWeight: "bold",fontSize:"medium" }}>Assign subject : </pre>
                                <input type='radio' name='Subject' value="CPlus" {...register("Subject", { required: "**Enter subject of Teacher" })} /><label htmlFor="CPlus">C++</label>
                                <input type='radio' name='Subject' value="DSA" {...register("Subject", { required: "**Enter subject of Teacher" })} /><label htmlFor="DSA">D.S.A</label>
                                <input type='radio' name='Subject' value="Java" {...register("Subject", { required: "**Enter subject of Teacher" })} /><label htmlFor="Java">Java</label>
                                <input type='radio' name='Subject' value="Python" {...register("Subject", { required: "**Enter subject of Teacher" })} /><label htmlFor="Python">Python</label>
                            </div>
                            </div>
                            <div className='Column'>
                                {errors.Subject && (
                                    <span className="redMessage">
                                        {errors.Subject.message}
                                        <br />
                                    </span>
                                )}
                            </div>
                        </span> : <span></span>
                    }
                    {
                        (isUser == 1) ? <>
                            {/* <div className='Column'>
                                <div className="form-floating mt-3 col-40">
                                    <input className="form-control" type='number' name='SubjectMarks' placeholder='Enter C++ marks' {...register("CPlusMarks", { required: "**Enter marks of C++", max: { value: 100, message: "Enter valid marks <= 100" }, min: { value: 0, message: "Marks cann't be negative" } })} />
                                    <label htmlFor="CPlusMarks">Enter C++ marks</label>
                                </div>
                            </div>
                            <div className='Column'>
                                {errors.CPlusMarks && (
                                    <span className="redMessage">
                                        {errors.CPlusMarks.message}
                                        <br />
                                    </span>
                                )}
                            </div>
                            <div className='Column'>
                                <div className="form-floating mt-3 col-40">
                                    <input className="form-control" type='number' name='SubjectMarks' placeholder='Enter D.S.A marks' {...register("DSAMarks", { required: "**Enter marks of D.S.A", max: { value: 100, message: "Enter valid marks <= 100" }, min: { value: 0, message: "Marks cann't be negative" } })} /><label htmlFor="DSAMarks">D.S.A</label>
                                </div>
                            </div>
                            <div className='Column'>
                                {errors.DSAMarks && (
                                    <span className="redMessage">
                                        {errors.DSAMarks.message}
                                        <br />
                                    </span>
                                )}
                            </div>
                            <div className='Column'>
                                <div className="form-floating mt-3 col-40">
                                    <input type='number' className="form-control" name='SubjectMarks' placeholder='Enter Java marks'  {...register("JavaMarks", { required: "**Enter marks of Java", max: { value: 100, message: "Enter valid marks <= 100" }, min: { value: 0, message: "Marks cann't be negative" } })} /><label htmlFor="JavaMarks">Java</label>
                                </div>
                            </div>
                            <div className='Column'>
                                {errors.JavaMarks && (
                                    <span className="redMessage">
                                        {errors.JavaMarks.message}
                                        <br />
                                    </span>
                                )}
                            </div>
                            <div className='Column'>
                                <div className="form-floating mt-3 col-40">
                                    <input className="form-control" type='number' name='SubjectMarks' placeholder='Enter Python marks' {...register("PythonMarks", { required: "**Enter marks of Python", max: { value: 100, message: "Enter valid marks <= 100" }, min: { value: 0, message: "Marks cann't be negative" } })} /><label htmlFor="PythonMarks">Python</label>
                                </div>
                            </div>
                            <div className='Column'>
                                {errors.PythonMarks && (
                                    <span className="redMessage">
                                        {errors.PythonMarks.message}
                                        <br />
                                    </span>
                                )}
                            </div> */}
                        </> : <span></span>
                    }
                    <div className='Column'>
                        <div className="form-floating mt-3 col-15" >
                            <input type='number' className="form-control" placeholder='Enter unique id' {...register("UniqueId", { required: "**Enter unique id", maxLength: { value: 8, message: "Enter valid unique id of 8 digit" }, minLength: { value: 8, message: "Enter valid unique id of 8 digit" } })} />
                            <label>Enter unique Id</label>
                        </div>
                    </div>
                    <div className='Column'>
                        {errors.UniqueId && (
                            <span className="redMessage">
                                {errors.UniqueId.message}
                                <br />
                            </span>
                        )}
                    </div>
                    <div className='Column'>
                        <div className="form-floating mt-3 col-15">
                            <input type='Email' className="form-control" placeholder='Enter Email Address' {...register("Email_ID", { required: "**Enter Email Address" })} />
                            <label>Email Address</label>
                        </div>
                    </div>
                    <div className='Column'>
                        {errors.Email_ID && (
                            <span className="redMessage">
                                {errors.Email_ID.message}
                                <br />
                            </span>
                        )}
                    </div>
                    
                    {/* <div className='Column'>
                        <div className="form-floating mt-3 col-15">
                            <input type='password' className="form-control" placeholder='Enter your password' {...register("Password", { required: "**Enter password", pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/, message: "Password should contain 8 character with a-z,A-Z,0-9,special character", }, })} />
                            <label>Password</label>
                        </div>
                    </div>
                    <div className='Column'>
                    {errors.Password && (
                        <span className="redMessage">
                            {errors.Password.message}
                            <br />
                        </span>

                    )}
                    </div> */}

                    {/* Password should be assign automatically */}
                    {/* <div className='Column'>
                        <div className="form-floating mt-3 col-15">
                            <input type='password' className="form-control" placeholder='Enter confirm password' {...register("CPassword", { required: "**Enter your password", validate: value => value === password || "Password doesn't match" })} />
                            <label>Confirm Password</label>
                        </div>
                    </div>
                    <div className='Column'>
                        {errors.CPassword && (
                            <span className="redMessage">
                                {errors.CPassword.message}
                            </span>
                        )}
                    </div> */}
                    <div className='Column mt-3' style={{ marginBottom: "50px" }}>
                        {(visibleButton) ? <span><button type="submit" id='submitButton' className="btn btn-success">Submit</button></span> : <div style={{ display: "flex", justifyContent: "center" }}><HashLoader /></div>}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp