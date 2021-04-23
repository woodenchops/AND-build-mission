import React, { useContext } from 'react';
import TopPart from '../components/TopPart';
import MiddlePart from '../components/MiddlePart';
import BottomPart from '../components/BottomPart';

function ThankYouPage() {
  return (
    <section className='thank-you section-container'>
      <TopPart />
      <MiddlePart />
      <hr />
      <BottomPart />
    </section>
  );
}

export default ThankYouPage;
