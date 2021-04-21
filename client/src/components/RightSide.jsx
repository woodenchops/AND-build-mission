import React, { useState } from 'react';
import CheckoutSummary from './CheckoutSummary';
import DiscountCode from './DiscountCode';
import LoyaltySchemeAd from './LoyaltySchemeAd';
import ProductBasket from './ProductBasket';

function RightSide() {
  const [basket, setBasket] = useState([
    {
      name: 'Salted Caramel Milk Chocolate',
      quantity: 1,
      price: 4.0,
      picture:
        'https://cdn.shopify.com/s/files/1/0923/6150/products/salted_caramel_8b6b8de6-3163-4a52-a81f-197b6b50113a_1024x1024.jpg?v=1557763223',
    },
    {
      name: 'Middle Aged Spread Card',
      quantity: 1,
      price: 4.0,
      picture:
        'https://cdn.shopify.com/s/files/1/0923/6150/products/48dff39b080563b2034460c0dac0095b9b4fdda8_1024x1024.jpg?v=1618928729',
    },
  ]);

  return (
    <section className='right-side section-container'>
      <div>
        <ProductBasket basket={basket} />
        <DiscountCode />
        <CheckoutSummary basket={basket} />
        <LoyaltySchemeAd />
      </div>
    </section>
  );
}

export default RightSide;
