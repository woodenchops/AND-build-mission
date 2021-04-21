import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import CheckoutProduct from './CheckoutProduct';

function ProductBasket() {
  const [basket, setBasket] = useState([
    {
      name: 'chocolate',
      quantity: 1,
      price: 4,
      picture: 'image',
    },
    {
      name: 'card',
      quantity: 1,
      price: 4,
      picture: 'image',
    },
  ]);
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
