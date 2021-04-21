import React from 'react'
import styles from '../styles/expressCheckout.module.css';


function ExpressCheckout() {
  return (
    <div className={styles.Express}>
      <h5>ExpressCheckout</h5>
      <div className="payment-types-wrapper">
        <button className="shopPay payment-btn">shopPay</button>
        <button className="googlePay payment-btn">googlePay</button>
        <button className="payPal payment-btn">payPal</button>
      </div>
    </div>
  )
}

export default ExpressCheckout
