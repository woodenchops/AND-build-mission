import React from 'react';
import { Container } from 'react-bootstrap';
import CheckoutProduct from './CheckoutProduct';

function ProductBasket(basket, setBasket) {
  return (
    <div>
      <Container>
        {basket &&
          basket.length > 0 &&
          basket.map((product) => (
            <CheckoutProduct product={product} setBasket={setBasket} />
          ))}
      </Container>
    </div>
  );
}

export default ProductBasket;
