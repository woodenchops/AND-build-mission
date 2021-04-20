import React from 'react'
import CheckoutSummary from './CheckoutSummary'
import DiscountCode from './DiscountCode'
import LoyaltySchemeAd from './LoyaltySchemeAd'
import SaltedCaramel from './SaltedCaramel'

function RightSide() {
  return (
    <div>
      <SaltedCaramel/>
      <DiscountCode/>
      <CheckoutSummary/>
      <LoyaltySchemeAd/>
    </div>
  )
}

export default RightSide
