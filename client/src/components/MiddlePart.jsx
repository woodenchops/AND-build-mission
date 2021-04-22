import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import Loyalty from '../assets/images/Loyalty.png';

function MiddlePart() {
  return (
    <section>
      <div>
        Today you've earned <strong>180 points!</strong>
      </div>
      <div>You're 200 points away from</div>
      <Row>
        <Col>
          <Image src={Loyalty} alt='card' rounded fluid />
        </Col>
        <Col></Col>
      </Row>
      <div>Click LINK to get more information on our loyalty programme.</div>
    </section>
  );
}

export default MiddlePart;
