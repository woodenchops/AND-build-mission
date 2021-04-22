import React from 'react';
import { Form } from 'react-bootstrap';

function DeliveryMethod() {
  return (
    <div>
      <p>Delivery Options</p>
      <Form.Group controlId='formBasicCheckbox' label='Delivery Options'>
        <Form.Check type='radio' name='group1' label='Ship' />
        <Form.Check type='radio' name='group1' label='Pick up' />
      </Form.Group>
    </div>
  );
}

export default DeliveryMethod;
