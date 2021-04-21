import React from 'react'
import styles from '../styles/expressCheckout.module.css';
import {Button} from 'react-bootstrap';


function ExpressCheckout() {
  return (
    <div className={styles.Express}>
      <h5>ExpressCheckout</h5>
      <div className={['payment-types-wrapper', styles.Payment].join(' ')}>
        <Button variant="primary" className={['shopPay', 'payment-btn'].join(' ')}>shopPay</Button>
        <Button variant="dark" className={['googlePay', 'payment-btn'].join(' ')}>googlePay</Button>
        <Button variant="warning" className={['payPal', 'payment-btn'].join(' ')} >payPal</Button>
      </div>
    </div>
  )
}

export default ExpressCheckout
