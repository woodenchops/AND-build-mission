import React from 'react'
import CheckoutSummary from './CheckoutSummary'
import DiscountCode from './DiscountCode'
import LoyaltySchemeAd from './LoyaltySchemeAd'
import ProductBasket from './ProductBasket'



function RightSide() {
  return (
    <div>
      <ProductBasket/>
      <DiscountCode/>
      <CheckoutSummary/>
      <LoyaltySchemeAd/>
    </div>
  )
}

export default RightSide
