import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function passwords() {
  return (
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
}

function ContactInformation() {
  const [passwordVisible, setPasswordVisible] = useState({
    visible: false,
  });

  return (
    <div>
      <h>Contact Information - Already have an account? Log in</h>
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

        {(() => {
          if (passwordVisible.visible) {
            return passwords();
          }
        })()}

        <p>Delivery Options</p>
        <Form.Group controlId='formBasicCheckbox' label='Delivery Options'>
          <Form.Check type='radio' name='group1' label='Ship' />
          <Form.Check type='radio' name='group1' label='Pick up' />
        </Form.Group>

        <p>Delivery locations</p>
        <Form.Group controlId='formBasicCheckbox' label='Pickup Location'>
          <Form.Check
            type='radio'
            name='group2'
            label='5a/71 Edinburgh Street'
          />
          <Form.Check
            type='radio'
            name='group2'
            label='22 NotEdinburgh Street'
          />
        </Form.Group>

        {(() => {
          if (passwordVisible.visible) {
            return (
              <Button variant='primary' type='submit'>
                Continue to Payment and create account
              </Button>
            );
          } else {
            return (
              <Button variant='primary' type='submit'>
                Continue to payment
              </Button>
            );
          }
        })()}
      </Form>
    </div>
  );
}

export default ContactInformation;
