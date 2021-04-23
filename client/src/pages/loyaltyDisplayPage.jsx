import React from 'react';
import LoyaltyDisplayPageLeftSide from '../components/LoyaltyDisplayPageLeftSide';
import LoyaltyRightSide from '../components/LoyaltyRightSide';

function LoyaltyDisplayPage() {
  return (
    <main className='main-wrapper'>
      <LoyaltyDisplayPageLeftSide />
      <LoyaltyRightSide />
    </main>
  );
}

export default LoyaltyDisplayPage;
