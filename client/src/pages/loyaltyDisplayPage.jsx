import React from 'react';
import Logo from '../components/Logo';
import LoyaltyDisplayPageLeftSide from '../components/LoyaltyDisplayPageLeftSide';
import LoyaltyRightSide from '../components/LoyaltyRightSide';

function LoyaltyDisplayPage() {
  return (
    <div>
      <Logo />
      <LoyaltyDisplayPageLeftSide />
      <LoyaltyRightSide />
    </div>
  );
}

export default LoyaltyDisplayPage;
