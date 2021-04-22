import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import CheckoutProduct from './CheckoutProduct';

function OrderSummary({ basket }) {
  const total = basket.reduce(
    (accumulator, current) => accumulator + current.price,
    0
  );

  return (
    <>
      <p>
        <center>
          <b>Order Summary</b>
        </center>
      </p>
      <Container>
        {basket &&
          basket.length > 0 &&
          basket.map((product) => (
            <CheckoutProduct name={product.name} price={product.price} />
          ))}
      </Container>
      <Row>
        <Col>
          <p>Pickup</p>
        </Col>
        <Col>
          <p>Free</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>Total</h5>
        </Col>
        <Col>
          <p>
            <b>£{total}</b>
          </p>
        </Col>
      </Row>
    </>
  );
}

export default OrderSummary;
