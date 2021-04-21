import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import ProductBasket from './ProductBasket';

function CheckoutProduct(props) {
  return (
    <div>
      <Row>
        <Col>
          <Image src={props.product.picture} alt='image not found' thumbnail />
        </Col>
        <Col>x{props.product.quantity}</Col>
        <Col>{props.product.name}</Col>
        <Col>£{props.product.price}</Col>
      </Row>
    </div>
  );
}

export default CheckoutProduct;
