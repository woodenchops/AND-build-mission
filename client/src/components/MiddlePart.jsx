import React from 'react';
import LoyaltySchemeAd from './LoyaltySchemeAd';

function MiddlePart() {
  return (
    <section>
      <div>
        Today you've earned <strong>180 points!</strong>
      </div>
      <div>You're 200 points away from</div>
      <LoyaltySchemeAd />
      <div>Click LINK to get more information on our loyalty programme.</div>
    </section>
  );
}

export default MiddlePart;
