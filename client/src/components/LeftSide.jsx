import React from 'react'
import ContactInformation from './ContactInformation'
import DeliveryMethod from './DeliveryMethod'
import ExpressCheckout from './ExpressCheckout'
import NavBar from './NavBar'
import PickupLocations from './PickupLocations'

function LeftSide() {
  return (
    <div>
      <NavBar/>
      <ExpressCheckout/>
      <ContactInformation/>
      <DeliveryMethod/>
      <PickupLocations/>
    </div>
  )
}

export default LeftSide
