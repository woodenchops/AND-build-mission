import React from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';

function DiscountCode() {
  return (
    <div>
      <h4>DiscountCode</h4>
      <Row>
        <Col>
            <Form.Group controlId="formBasicDiscount">
                <Form.Control type="discount-code" placeholder="Gift Card or Discount Code" />
            </Form.Group>
        </Col>
        <Col>
            <Button>Apply</Button>
        </Col>
    </Row>
    </div>
  )
}

export default DiscountCode
