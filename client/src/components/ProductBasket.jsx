import React from 'react';
import { Container } from 'react-bootstrap';
import CheckoutProduct from './CheckoutProduct';

function ProductBasket({ basket }) {
  return (
    <div>
      <Container>
        {basket &&
          basket.length > 0 &&
          basket.map((product) => (
            <CheckoutProduct
              picture={product.picture}
              quantity={product.quantity}
              name={product.name}
              price={product.price}
            />
          ))}
      </Container>
    </div>
  );
}

export default ProductBasket;
