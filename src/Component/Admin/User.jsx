import React, { useEffect, useState } from 'react'
import { app } from '../Firebase/Index';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { HashLoader } from 'react-spinners';
import UserData from './UserData';

// Creating instance of firestore
const db = getFirestore(app);

const User = () => {

  var [Students, setStudents] = useState([]);
  var [Teachers, setTeachers] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    Details();
  }, [])

  const Details = async () => {
    try {
      const CollectionRef = collection(db, "User");
      const StudentSnap = await getDocs(query(CollectionRef, where("Role", "==", 2)));
      const TeacherSnap = await getDocs(query(CollectionRef, where("Role", "==", 1)));
      if (!StudentSnap.empty) {
        const userDoc = StudentSnap.docs;
        userDoc.map((studentData) => { Students.push(studentData.data()) });
      }
      else {

      }
      if (!TeacherSnap.empty) {
        const userDoc = TeacherSnap.docs;
        userDoc.map((teacherData) => { Teachers.push(teacherData.data()) });
      }
      setLoading(false)
    }
    catch (error) {
      setLoading(false)
    }
    console.log("My", Students);
  }

  const [selected, setSelected] = useState(1);

  return (
    <div className='Users'>
      <div style={{ display: "flex", justifyContent: "right", alignContent: "center" }}>
        <span style={{ fontFamily: 'cursive', paddingBottom: "2%", fontSize: "300%" }}>Users : </span><span style={{ margin: "2%" }}><ToggleButtonGroup type="radio" name="options" defaultValue={1}>
          <ToggleButton className='toggle-btn' id="tbg-radio-1" variant='secondary' value={1} onClick={() => setSelected(1)} style={{ backgroundColor: (selected == 1) ? "rgb(69, 71, 75)" : "rgb(245, 247, 248)", color: (selected == 1) ? "rgb(245, 247, 248)" : "rgb(69, 71, 75)" }} >
            Student
          </ToggleButton>
          <ToggleButton className='toggle-btn' id="tbg-radio-2" variant='secondary' value={2} onClick={() => setSelected(2)} style={{ backgroundColor: (selected == 2) ? "rgb(69, 71, 75)" : "rgb(245, 247, 248)", color: (selected == 2) ? "rgb(245, 247, 248)" : "rgb(69, 71, 75)" }}>
            Both
          </ToggleButton>
          <ToggleButton className='toggle-btn' id="tbg-radio-3" variant='secondary' value={3} onClick={() => setSelected(3)} style={{ backgroundColor: (selected == 3) ? "rgb(69, 71, 75)" : "rgb(245, 247, 248)", color: (selected == 3) ? "rgb(245, 247, 248)" : "rgb(69, 71, 75)" }}>
            Teacher
          </ToggleButton>
        </ToggleButtonGroup></span>
      </div>

      {
        (Loading) ? <div style={{ marginTop: "100%" }}><HashLoader loading={Loading} size={150} style={{ textAlign: "center" }} /></div> : <div style={{ margin: "3%", marginTop: "0.2%" }}>
          <table className="table" style={{ textAlign: "center" }}>
            <thead className="thead-dark">
              <tr>
                <th scope="col" style={{ fontSize: 'large', width: '22%' }}>
                  <u><b>Unique Id</b></u>
                </th>
                <th scope="col" style={{ fontSize: 'large', width: '20%' }}>
                  <u><b>Full Name</b></u>
                </th>
                <th scope="col" style={{ fontSize: 'large', width: '33%' }}>
                  <u><b>Email Address</b></u>
                </th>
                <th scope="col" style={{ fontSize: 'large', width: '13%' }}>
                  <u><b>Gender</b></u>
                </th>
                <th scope="col" style={{ fontSize: 'large', width: '13%' }}>
                  <u><b>Role</b></u>
                </th>
              </tr>
            </thead>

            {(selected == 1) ? <tbody><UserData users={Students} /></tbody> : <>{(selected == 2) ? <tbody><UserData users={Teachers} /><UserData users={Students} /></tbody> : <tbody><UserData users={Teachers} /></tbody>}</>}
          </table>
          {(selected == 1 && Students.length === 0) ? <div style={{ display: "flex", justifyContent: 'center' }}>Yet, not any student's account is created</div> : <>{(selected == 3 && Teachers.length === 0) ? <div style={{ display: "flex", justifyContent: 'center' }}>Yet any teacher's account is not created</div> : <>{(selected == 2 && Teachers.length === 0 && Students.length === 0) ? <div style={{ display: "flex", justifyContent: 'center' }}>Yet any student and teacher's account is not created</div> : <></>}</>}</>}
        </div>
      }

    </div>
  )
}

export default User
