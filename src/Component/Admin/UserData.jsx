import React from 'react'

const UserData = ({users}) => {
    {console.log("Hello",users)}
  return (
    <>
      {
        users.map((user)=>
        {
            const {UniqueId,FirstName,LastName,Email,Gender,Role,Subject} = user;
            return(
                <tr key={UniqueId}>
                <td width={"20%"}>{UniqueId}</td>
                <td width={"20%"}>{FirstName}{" "}{LastName}</td>
                <td width={"32%"}>{Email}</td>
                <td width={"20%"}>{Gender}</td>
                <td width={"20%"}>{(Role == 1) ? <span style={{color:"red"}}>Teacher({Subject})</span> : <span style={{color:"green"}}>Student</span>}</td>
                </tr>
            )
        })
      }
    </>
  )
}

export default UserData
