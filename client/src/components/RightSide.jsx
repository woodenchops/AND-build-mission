import React from 'react';
import CheckoutSummary from './CheckoutSummary';
import DiscountCode from './DiscountCode';
import LoyaltySchemeAd from './LoyaltySchemeAd';
import ProductBasket from './ProductBasket';

function RightSide() {
  return (
    <section className='right-side section-container'>
      <div>
        <ProductBasket />
        <DiscountCode />
        <CheckoutSummary />
        <LoyaltySchemeAd />
      </div>
    </section>
  );
}

export default RightSide;
