import React from 'react';
import LeftSide from '../components/LeftSide';
import RightSide from '../components/RightSide';
import { BasketProvider } from '../context/basketContext';

function CheckoutPage() {
  return (
    <main className='main-wrapper'>
      <LeftSide />
      <BasketProvider>
        <RightSide />
      </BasketProvider>
    </main>
  );
}

export default CheckoutPage;
