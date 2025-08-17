import React from 'react'
import Card from "react-bootstrap/Card";

const ContactCard = (props) => {
  return (
    <div>
      <Card className="contactCard">
  <Card.Body className="d-flex align-items-center justify-content-center">
    
    {/* Icon */}
    <div className="contact-icon">
      {props.img}
    </div>

    {/* Text */}
    <div className="ms-3 text-start">
      <Card.Title className="title">
        <b>{props.contactType}</b>
      </Card.Title>
      <Card.Text className="detail">
        {props.contactDetails}
      </Card.Text>
    </div>

  </Card.Body>
</Card>

    </div>
  )
}

export default ContactCard
