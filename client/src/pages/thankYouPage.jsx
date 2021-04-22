import React, { useContext } from 'react';
import TopPart from '../components/TopPart';
import { BasketContext } from '../context/basketContext';

function ThankYouPage() {
  const { basket } = useContext(BasketContext);

  return (
    <section className='thank-you section-container'>
      <TopPart />
    </section>
  );
}

export default ThankYouPage;
