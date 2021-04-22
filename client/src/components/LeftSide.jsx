import React, { useState } from 'react';
import ContactInformation from './ContactInformation';
import DeliveryMethod from './DeliveryMethod';
import ExpressCheckout from './ExpressCheckout';
import NavBar from './NavBar';
import PickupLocations from './PickupLocations';

function LeftSide() {
  const [passwordVisible, setPasswordVisible] = useState({
    visible: false,
  });

  return (
    <section className='left-side section-container'>
      <div>
        <NavBar />
        <ExpressCheckout />
        <ContactInformation
          passwordVisible={passwordVisible}
          setPasswordVisible={setPasswordVisible}
        />
        <DeliveryMethod />
        <PickupLocations passwordVisible={passwordVisible} />
      </div>
    </section>
  );
}

export default LeftSide;
