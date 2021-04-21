import React from 'react';
import { Form, Button } from 'react-bootstrap';

function ContactInformation() {
  return (
    <div>
      <h4>ContactInformation</h4>

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
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ContactInformation;
