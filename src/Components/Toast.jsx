import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function MyToast({Message,setToastVisible}) {
  const [show, setShow] = useState(true);

  return (
    <Row>
      <Col xs={6}>
        <Toast bg={"danger"} onClose={() => {setToastVisible(false);setShow(false)}} show={show} delay={4000} autohide>
          <Toast.Body style={{color:"white"}}>{Message}</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default MyToast;