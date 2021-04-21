import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import Logo from '../assets/images/tiger_head_sgrey.png';

function NavBar() {
  return (
    <div>
      <h4>PAPER TIGER</h4>
      <img src={Logo} alt='' />
      <Breadcrumb>
        <Breadcrumb.Item href='#'>Cart</Breadcrumb.Item>
        <Breadcrumb.Item active>Information </Breadcrumb.Item>
        <Breadcrumb.Item href='#'>Payment</Breadcrumb.Item>
        <Breadcrumb.Item href='#'>Review</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default NavBar;
