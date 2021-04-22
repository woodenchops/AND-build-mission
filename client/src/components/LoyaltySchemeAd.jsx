import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Loyalty from '../assets/images/Loyalty.png';

function LoyaltySchemeAd() {
  return (
    <div>
      <h6>Sign up today and start collecting!</h6>
      <Image src={Loyalty} alt='card' rounded fluid />
      <p>Points after this purchase: </p>
    </div>
  );
}

export default LoyaltySchemeAd;
