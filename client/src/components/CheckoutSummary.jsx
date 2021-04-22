import React from 'react';
import { Row, Col } from 'react-bootstrap';

function CheckoutSummary({ basket }) {
  const total = basket.reduce(
    (accumulator, current) => accumulator + current.price,
    0
  );

  return (
    <>
      <Row>
        <Col>
          <p>Subtotal</p>
        </Col>
        <Col>
          <p>£{total}</p>
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
          <p>£{total}</p>
        </Col>
      </Row>
    </>
  );
}

export default CheckoutSummary;
