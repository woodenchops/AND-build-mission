import React from 'react';
import { Form, Button } from 'react-bootstrap';

function PickupLocations({ passwordVisible }) {
  return (
    <div>
      <p>Delivery locations</p>
      <Form.Group controlId='formBasicCheckbox' label='Pickup Location'>
        <Form.Check type='radio' name='group2' label='5a/71 Edinburgh Street' />
        <Form.Check type='radio' name='group2' label='22 NotEdinburgh Street' />
      </Form.Group>

      <Button variant='primary' type='submit'>
        {passwordVisible.visible
          ? 'Continue to Payment and create account'
          : 'Continue to payment'}
      </Button>
    </div>
  );
}

export default PickupLocations;
