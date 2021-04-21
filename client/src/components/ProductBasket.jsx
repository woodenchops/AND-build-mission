import React from 'react';
import { Container } from 'react-bootstrap';
import CheckoutProduct from './CheckoutProduct';

function ProductBasket(props) {
  return (
    <div>
      <Container>
        {props.basket &&
          props.basket.length > 0 &&
          props.basket.map((product) => <CheckoutProduct product={product} />)}
      </Container>
    </div>
  );
}

export default ProductBasket;
