import React from 'react';
import { Form } from 'react-bootstrap';

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
  return (
    <div>
      <h>
        Contact Information - Already have an account? <a href='#'>Log in</a>
      </h>
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
