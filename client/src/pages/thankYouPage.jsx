import React from 'react';
import React, { useContext } from 'react';
import CheckoutSummary from './CheckoutSummary';
import { BasketContext } from '../context/basketContext';

function thankYouPage() {
  const { basket } = useContext(BasketContext);

  return (
    <section className='thank-you section-container'>
      <div>
        <CheckoutSummary basket={basket} />
      </div>
    </section>
  );
}

export default thankYouPage;
