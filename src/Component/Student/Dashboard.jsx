import React from 'react'
import app from '../Firebase/firebase.js'
import { useState, useEffect } from 'react';
import { getDoc, doc, getFirestore } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { HashLoader } from 'react-spinners';

//Creating an instance of getFirestore
const firestore = getFirestore(app);

const Dashboard = () => {

    const Id = useSelector(state => state.User.UniqueId);
    const FirstName = useSelector(state => state.User.FirstName);
    const LastName = useSelector(state => state.User.LastName);
    const [StudentMark, setStudentMark] = useState([]); 
    const [dataAvailable,setDataAvailable] = useState(false);
    // let StudentMark = [];
    const [Loading, setLoading] = useState(true);
    console.log("Id", typeof (Id))
    var number = 0;

    useEffect(() => {
        Marks();
        console.log("I started.......")
    }, [])

    const Marks = async () => {
        try {
            const docRef = doc(firestore, "Student Marks", String(Id))
            const docSnap = await getDoc(docRef)
            // .then((e) => {console.log(e.data()),setDataAvailable(true)}).finally(() => {console.log("Hello",DATA)});
            // console.log(typeof("My type",docSnap))
            // data = docSnap.data();
            const DATA = docSnap.data()
            if(DATA == null)
            {
                setStudentMark(JSON.parse(localStorage.getItem("Marks")));
            }
            else
            {
                setStudentMark(DATA)
                localStorage.setItem("Marks",JSON.stringify(docSnap.data()));
            }
            setLoading(false);  
            setDataAvailable(true);
            // StudentMark.push(docSnap.data());
            // DATA = JSON.parse(JSON.parse(localStorage.getItem("Marks"))) || null;
            
            console.log("Hello")
            // localStorage.setItem("Marks",JSON.stringify(docSnap.data()) || localStorage.getItem("Marks"));
            // console.log(StudentMark);
            // const promise = new Promise((resolve,reject) => 
            // {
            //     if(data != null) 
            // }
            // )
            // for (const key in StudentMark[0]) {
            //     console.log(key, StudentMark[0][key])
            // }
        }
        catch (error) {
            console.error("Error in fetching data");
            setLoading(false);
        }
        finally
        {
            console.log("Data is feeded")
        }
    }
    return (
        <div>
            <div className='studentDetails' style={{ margin: "3%" }}>
            <h4 style={{textAlign:"center",fontFamily:"cursive",fontWeight:"bold",margin:"1%"}}>{FirstName}{" "}{LastName}, your report</h4>
                <table className="table" style={{ textAlign: "center" }}>
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col" style={{ fontSize: "large" }}><u><b>Sr. No.</b></u></th>
                            <th scope="col" style={{ fontSize: "large" }}><u><b>Subject</b></u></th>
                            <th scope='col' style={{ fontSize: "large" }}><u><b>Marks</b></u></th>
                            {/* <th scope='col' style={{ fontSize: "large" }}></th> */}
                        </tr>
                    </thead>
                    {
                        (Loading) ? <div style={{ marginTop: "100%" }}><HashLoader loading={Loading} size={150} style={{ textAlign: "center" }} /></div> : <tbody>{

                                Object.keys(StudentMark).map( 
                                    key => {
                                        return(
                                            <tr key={key}>
                                                <td>{++number}</td>
                                                <td>{key}</td>
                                                <td>{StudentMark[key]}</td>
                                            </tr>
                                        )
                                    }
                                )
                            }
                            
                    </tbody>
                    }
                </table>
                    {
                        (number == 0) ? <div style={{textAlign:"center", marginTop:"30px",fontSize:"medium",fontStyle:"italic",fontFamily:"cursive"}}>Yet, Marks of any subject is not given</div> : (number < 4) ? <div style={{textAlign:"center", marginTop:"30px",fontSize:"medium",fontStyle:"italic",fontFamily:"cursive"}}>Yet, marks of other subject is not given</div> : <span></span>
                    }
            </div>
        </div>
    )
}

export default Dashboard
