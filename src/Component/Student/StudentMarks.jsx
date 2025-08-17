import React from 'react'

const StudentMarks = ({student}) => {
    console.log(student)
    var number = 1
    // const sortedKeys = Object.keys(student).sort((a,b) => a.localeCompare(b));
    // const sortedKeyValue = {};
    // sortedKeys.forEach(key => 
    // {
    //     sortedKeyValue[key] = student[key];
    // }
    // )
    return (
        <>
            {

                Object.keys(student).map( 
                    key => {
                        return(
                            <tr key={key}>
                                <td>{number++}</td>
                                <td>{key}</td>
                                <td>{student[key]}</td>
                            </tr>
                        )
                    }
                    // <tr key={key}>
                    //     <td></td>
                    // </tr>
                )
            }       
        </>
    )
}

export default StudentMarks
