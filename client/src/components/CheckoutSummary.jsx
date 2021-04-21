import React from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';

function CheckoutSummary() {
  return (
    <>
      <h4>CheckoutSummary</h4>
      <Row>
        <Col>
          <p>Subtotal</p>
        </Col>
        <Col>
          <p>£4.00</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Pickup</p>
        </Col>
        <Col>
          <p>Free</p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <h5>Total</h5>
        </Col>
        <Col>
          <p>£4.00</p>
        </Col>
      </Row>
    </>
  );
}

export default CheckoutSummary;
