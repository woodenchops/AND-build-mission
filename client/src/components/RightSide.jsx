import React, { useContext } from 'react';
import CheckoutSummary from './CheckoutSummary';
import DiscountCode from './DiscountCode';
import LoyaltySchemeAd from './LoyaltySchemeAd';
import ProductBasket from './ProductBasket';
import { BasketContext } from '../context/basketContext';

function RightSide() {
  const { basket } = useContext(BasketContext);

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
