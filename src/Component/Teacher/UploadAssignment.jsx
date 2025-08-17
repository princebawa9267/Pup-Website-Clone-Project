import React, { useState } from 'react'
import Button from './Button';
import {app} from "../Firebase/Index"

const UploadAssignment = () =>
{
    const Teacher = useSelector(state => state.User.SubjectTeacher);  //This is used to show subject before setting marks
    return(
        <>
            <div><span style={{display:'flex',alignContent:"end"}}>Upload</span></div>
        </>
    )
}
