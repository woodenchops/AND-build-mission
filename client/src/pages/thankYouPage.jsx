import React, { useContext } from 'react';
import TopPart from '../components/TopPart';
import MiddlePart from '../components/MiddlePart';
import { BasketContext } from '../context/basketContext';

function ThankYouPage() {
  const { basket } = useContext(BasketContext);

  return (
    <section className='thank-you section-container'>
      <TopPart />
      <MiddlePart />
    </section>
  );
}

export default ThankYouPage;
