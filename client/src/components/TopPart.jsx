import React, { useContext } from 'react';
import OrderSummary from './OrderSummary';
import { BasketContext } from '../context/basketContext';

function TopPart() {
  const { basket } = useContext(BasketContext);

  return (
    <section className='top-part section-container'>
      <div>
        <center>
          <h1>THANK YOU!</h1>
          <h5>
            Your order has now been placed and you've successfully registered
            with our new loyalty scheme.
          </h5>
        </center>
        <hr />
        <OrderSummary basket={basket} />
        <p>
          Please see your <a href='#'>Tracking Information</a>
        </p>
      </div>
    </section>
  );
}

export default TopPart;
