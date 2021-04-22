import React, { useContext } from 'react';
import CheckoutSummary from '../components/CheckoutSummary';
import { BasketContext } from '../context/basketContext';
import BottomPart from '../components/BottomPart';

function ThankYouPage() {
  const { basket } = useContext(BasketContext);

  return (
    <section className='thank-you section-container'>
      <div>
        <CheckoutSummary basket={basket} />
        <BottomPart />
      </div>
    </section>
  );
}

export default ThankYouPage;
