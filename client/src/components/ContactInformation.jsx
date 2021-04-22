import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import LoginModal from '../components/Modal';

const passwords = (
  <>
    <Form.Group controlId='formBasicPassword'>
      <Form.Label>Password</Form.Label>
      <Form.Control type='password' placeholder='Password' />
      <Form.Text className='text-muted'></Form.Text>
    </Form.Group>

    <Form.Group controlId='formBasicPassword2'>
      <Form.Control type='password' placeholder='Re-enter Password' />
      <Form.Text className='text-muted'></Form.Text>
    </Form.Group>
  </>
);

function ContactInformation({ passwordVisible, setPasswordVisible }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <span>
        Contact Information - Already have an account?
        <Link onClick={handleShow} to='#'>
          Log in
        </Link>
      </span>
      <LoginModal
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
      <Form>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
          <Form.Text className='text-muted'></Form.Text>
        </Form.Group>

        <Form.Group controlId='formBasicCheckbox'>
          <Form.Check
            type='checkbox'
            label='Keep me up to date on news and exclusive offers'
          />
        </Form.Group>
        <Form.Group controlId='formBasicCheckbox'>
          <Form.Check
            type='checkbox'
            label='Sign up for loyalty scheme and create account'
            onChange={() =>
              setPasswordVisible({
                visible: !passwordVisible.visible,
              })
            }
          />
        </Form.Group>

        {passwordVisible.visible && passwords}
      </Form>
    </div>
  );
}

export default ContactInformation;
