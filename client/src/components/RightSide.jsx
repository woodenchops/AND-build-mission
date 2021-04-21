import React, { useState } from 'react';
import CheckoutSummary from './CheckoutSummary';
import DiscountCode from './DiscountCode';
import LoyaltySchemeAd from './LoyaltySchemeAd';
import ProductBasket from './ProductBasket';

function RightSide() {
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
