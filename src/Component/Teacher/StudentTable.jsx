import React, { useState } from 'react'
import Button from './Button';


const StudentTable = ({student}) => {
    return (
        <>
                {console.log("user",student)}
                {
                    student.map((user) =>
                        {
                        const {id,FirstName,LastName,Marks,EmailId} = user;
                        return(
                            <tr key={id}>
                                <td width={"25%"}>{id}</td>
                                <td width={"25%"}>{FirstName}{" "}{LastName}</td>
                                <td width={"25%"}>{EmailId}</td>
                                {/* <td width={"25%"}>{Marks}</td> */}
                                <Button Id={id} Subject={Marks} Name={FirstName + " " + LastName}/>
                            </tr>
                        )
                    } 
                    )
                }
        </>
    )
}

export default StudentTable
 