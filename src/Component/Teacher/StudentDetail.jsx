import React, { useEffect, useState } from 'react'
import app from '../Firebase/firebase.js'
import { collection, getDoc, doc, getDocs, getFirestore, query } from 'firebase/firestore';
import StudentTable from './StudentTable.jsx';
import { HashLoader } from 'react-spinners';
import { useSelector } from 'react-redux';

//Creating an instance of getFirestore
const firestore = getFirestore(app);

const StudentDetail = () => {

    const [studentDetail, setStudentDetail] = useState([]);
    const [Loading, setLoading] = useState(true);
    const Teacher = useSelector(state => state.User.SubjectTeacher);  //This is used to show subject before setting marks

    var SubjectTeacher = null; // This is used to get marks of subject, Teacher is not used because taking data from Redux take little amount of delay which can cause unavailablity of data.
    useEffect(() => {
        SDetails();
    }, [])

    const SDetails = async () => {
        try {
            const CollectionRef = collection(firestore, "Student Marks");
            const snapshot = await getDocs(CollectionRef);

            const studentData = await Promise.all(snapshot.docs.map(async (studentData) => {
                const id = studentData.id;
                const Subjects = studentData.data();
                const userDocSnap = await getDoc(doc(firestore, "User", id));
                SubjectTeacher = (JSON.parse(localStorage.getItem("User"))).Subject;
                console.log(SubjectTeacher);
                if (userDocSnap.exists()) {
                    return {
                        id: id,
                        FirstName: userDocSnap.data().FirstName,
                        LastName: userDocSnap.data().LastName,
                        EmailId: userDocSnap.data().Email,
                        Marks: Subjects[SubjectTeacher],
                    }
                }
            }));

            setStudentDetail(studentData);
            localStorage.setItem("Details", JSON.stringify(studentData));
            setLoading(false);
        }
        catch (error) {
            console.error("Error in fetching data")
            setLoading(false);
        }
    }
    return (
        <div className="StudentData">
            <span >
                <h4 style={{ textAlign: "center", fontFamily: "cursive", fontWeight: "bold", margin: "1%", marginTop: "2%" }}>Student Marks of {Teacher}</h4>
            </span>
            {
                (Loading) ? <div style={{ marginTop: "100%" }}><HashLoader loading={Loading} size={150} style={{ textAlign: "center" }} /></div> :
                (studentDetail.length == 0) ? <div style={{textAlign:"center", marginTop:"30px",fontSize:"medium",fontStyle:"italic",fontFamily:"cursive"}}>Yet, student data is not available  </div> : <div className='studentDetails' style={{ margin: "3%", marginTop: "1%" }}>
                    <table className="table" style={{textAlign: "center"}}>
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col" style={{ fontSize: "large" }}><u><b>Roll Number</b></u></th>
                                <th scope="col" style={{ fontSize: "large" }}><u><b>Full Name</b></u></th>
                                <th scope='col' style={{ fontSize: "large" }}><u><b>Email Address</b></u></th>
                                <th scope='col' style={{ fontSize: "large" }}><u><b>Marks</b></u></th>
                                <th scope='col' style={{ fontSize: "large" }}></th>
                            </tr>
                        </thead>
                        <tbody><StudentTable student={studentDetail} /></tbody>
                    </table>
                </div>
            }
        </div>
    )
}

export default StudentDetail
