import React from 'react';
import { Image } from 'react-bootstrap';
import Loyalty from '../assets/images/Loyalty.png';

function LoyaltySchemeAd() {
  return (
    <div>
      <h6>Sign up today and start collecting!</h6>
      <Image src={Loyalty} alt='card' rounded fluid />
      <p>Points after this purchase: 80 </p>
    </div>
  );
}

export default LoyaltySchemeAd;
