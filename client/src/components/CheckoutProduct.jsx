import React from 'react';
import { Row, Col } from 'react-bootstrap';

function CheckoutProduct({ product }) {
  return (
    <div>
      <Row>
        <Col>{product.picture}</Col>
        <Col>{product.quantity}</Col>
        <Col>{product.name}</Col>
        <Col>{product.price}</Col>
      </Row>
    </div>
  );
}

export default CheckoutProduct;
