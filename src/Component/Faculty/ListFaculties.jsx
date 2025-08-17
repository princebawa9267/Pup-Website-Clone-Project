import React from 'react'
import FacultyCard from './FacultyCard'
import {HA} from './Images/FacultyPictures.js'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const ListFaculties = (props) => {
    const data = props.data

    const ListItem = data.map((item) => {
        return (
            <FacultyCard id = {item.id} Name = {item.Name} img = {item.img} Designation = {item.Designation} Email_ID = {item.Email_ID}  Mobile = {item.Mobile} Profile = {item.Profile}/>
        )
    })

  return (
    <div>
        <h1 style={{textAlign:"center", marginTop : "2%", fontFamily : "cursive", fontWeight:"bolder"}}>Teaching Faculty</h1>
        <div className='HODCard'>
        <Card className='Card' >
        <Card.Img variant="top" src={HA} alt="Teacher Picture" className='Image' />
        <Card.Body>
          <Card.Title className='Name'>Dr.Himanshu Aggarwal</Card.Title>
          <Card.Text >
            <div className='Designation'>Head of the Department</div>
            <div style={{marginTop:"2%"}}><b>EMAIL ID :</b> himanshu@pbi.ac.in</div>
            <div><b>MOBILE :</b> 9872654748</div>
          </Card.Text>
          <Button variant="primary" class="btn btn-success" href='https://csepup.ac.in/pdf/Profile_04.pdf' target='_blank'>View more about</Button>
        </Card.Body>
      </Card>
        </div >
        <div className='list-item'>
            {ListItem}
        </div>
        </div>
  )
}

export default ListFaculties
