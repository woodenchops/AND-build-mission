import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function LoginModal({ handleClose, show }) {
  return (
    <>
      {/* <Button variant='primary' onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <Form>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Log in to your account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email address' />
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Enter password' />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
            <Button variant='primary' onClick={handleClose}>
              Sign in
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </>
  );
}

export default LoginModal;
