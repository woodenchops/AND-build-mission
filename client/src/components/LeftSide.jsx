import React from 'react';
import ContactInformation from './ContactInformation';
import DeliveryMethod from './DeliveryMethod';
import ExpressCheckout from './ExpressCheckout';
import NavBar from './NavBar';
import PickupLocations from './PickupLocations';

function LeftSide() {
  return (
    <section className='left-side section-container'>
      <div>
        <NavBar />
        <ExpressCheckout />
        <ContactInformation />
        <DeliveryMethod />
        <PickupLocations />
      </div>
    </section>
  );
}

export default LeftSide;
