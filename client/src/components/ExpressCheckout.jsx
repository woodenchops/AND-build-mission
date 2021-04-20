import React from 'react'
import styles from '../styles/expressCheckout.module.css';


function ExpressCheckout() {
  return (
    <div className={styles.Express}>
      <h5>ExpressCheckout</h5>
      <div className="payment-types-wrapper">
        <button className="shopPay btn">shopPay</button>
        <button className="googlePay muhbtn">googlePay</button>
        <button className="payPal btn">payPal</button>
      </div>
    </div>
  )
}

export default ExpressCheckout
