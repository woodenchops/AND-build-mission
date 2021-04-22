import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

function CheckoutProduct({ product }) {
  return (
    <div>
      <Row>
        <Col>
          <Image src={product.picture} alt='image not found' thumbnail />
        </Col>
        <Col>x{product.quantity}</Col>
        <Col>{product.name}</Col>
        <Col>£{product.price}</Col>
      </Row>
    </div>
  );
}

export default CheckoutProduct;
