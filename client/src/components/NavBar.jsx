import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import Logo from '../assets/images/tiger_head_sgrey.png';

function NavBar() {
  return (
    <div>
      <h4>PAPER TIGER</h4>
      <img src={Logo} alt='' />
      <Breadcrumb>
        <Breadcrumb.Item href='#'>Home</Breadcrumb.Item>
        <Breadcrumb.Item href='https://getbootstrap.com/docs/4.0/components/breadcrumb/'>
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default NavBar;
