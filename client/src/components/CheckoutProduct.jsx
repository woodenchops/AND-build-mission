import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

function CheckoutProduct({ name, price, picture, quantity }) {
  return (
    <div>
      <Row>
        <Col>
          {picture && <Image src={picture} alt='image not found' thumbnail />}
        </Col>
        <Col>{quantity && `x ${quantity}`}</Col>
        <Col>{name}</Col>
        <Col>£{price}</Col>
      </Row>
    </div>
  );
}

export default CheckoutProduct;
