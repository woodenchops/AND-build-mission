import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import Logo from './Logo';

function NavBar() {
  return (
    <div>
      <Logo />
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
