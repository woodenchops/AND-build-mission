import React, { useContext } from 'react';
import TopPart from '../components/TopPart';
import MiddlePart from '../components/MiddlePart';
import { BasketContext } from '../context/basketContext';
import BottomPart from '../components/BottomPart';

function ThankYouPage() {
  const { basket } = useContext(BasketContext);

  return (
    <section className='thank-you section-container'>
      <TopPart />
      <MiddlePart />
      <div>
        <CheckoutSummary basket={basket} />
        <BottomPart />
      </div>
    </section>
  );
}

export default ThankYouPage;
