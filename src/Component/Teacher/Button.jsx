import React ,{ useState } from 'react'
import { HashLoader } from 'react-spinners';
import {app} from "../Firebase/Index"
import {doc,updateDoc, getFirestore} from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';


const Button = ({Id,Subject,Name}) => {

    const firestore = getFirestore(app);

    const [showEdit,setShowEdit] = useState(true);
    const initialMarks = Subject;
    const [Marks,setMarks] = useState(Subject);
    const [Loading,setLoading] = useState(false);

    const SubjectAssigned = useSelector(state => state.User.SubjectTeacher);

    const changeMarks = (e) =>
    {
        if(e <= 100 && e >= 0 )
        {
            setMarks(e);
        }
        else
        {
            toast.error("Marks should be in 0-100")
        }
    }

    const MarksUpdate = async () =>
        {
            setLoading(true)
            try{
                const userDocRef = doc(firestore,"Student Marks",Id);
                await updateDoc(userDocRef,{[SubjectAssigned] : parseInt(Marks)});
                setShowEdit(true)
                setLoading(false)
                console.log("Marks updated");
                toast.success(Name + "'s marks changed from " + initialMarks + " to " + Marks);
            }
            catch(error)
            {
                console.log(error)
                setMarks(initialMarks);
                toast.error("Error in changing marks of "+Name);
            }
            setShowEdit(true)
            setLoading(false)
        }
    return(
        <>
            <td width={"25%"}>{(showEdit) ? (Marks === undefined) ? <span style={{color:"red",fontWeight:"bold"}}>Not assigned</span>:Marks : <input type='number' value={Marks} style={{width:"30%"}} onChange={(e) => changeMarks(e.target.value)} max={100}/>}</td>
            <td width={"25%"}>{(showEdit)?<button type="button" className="btn btn-danger" onClick={() => setShowEdit(false)}>✎Edit</button> : <button type="button" className="btn btn-success" onClick={() => MarksUpdate()}>{(Loading) ? <HashLoader loading={Loading} size={15}/> : <>Submit</>}</button> }</td>
        </>
    )
}

export default Button
