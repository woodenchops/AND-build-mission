import React from 'react';
import {Breadcrumb} from 'react-bootstrap';

function NavBar() {
  return (
    <div>
      <h4>Nav Bar</h4>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/"> Library </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

export default NavBar
