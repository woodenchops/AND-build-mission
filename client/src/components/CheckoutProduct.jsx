import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

function CheckoutProduct({ name, price, picture, quantity }) {
  return (
    <div>
      <Row>
        {picture && (
          <Col>
            <Image src={picture} alt='image not found' thumbnail />
          </Col>
        )}
        {quantity && <Col>x{quantity}</Col>}
        <Col>
          <b>{name}</b>
        </Col>
        <Col>£{price}</Col>
      </Row>
    </div>
  );
}

export default CheckoutProduct;
