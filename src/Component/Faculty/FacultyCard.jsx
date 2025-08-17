import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./CSS/Card.css"

const FacultyCard = (props) => {
  return (
    <div className='CardContainer'>
        <Card className='CardItem'  >
        <Card.Img variant="top" src={props.img} alt="Teacher Picture" className='FacutlyImage'/>
        <Card.Body>
          <Card.Title>{props.Name}</Card.Title>
          <Card.Text>
            <div style={{color:"green"}}>{props.Designation}</div>
            <div><b>Email ID : </b>{props.Email_ID}</div>
            <div><b>Phone : </b>{props.Mobile}</div>
          </Card.Text>
          <Button variant="primary" class="btn btn-success"href={props.Profile} target='_blank'>View more about</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default FacultyCard
