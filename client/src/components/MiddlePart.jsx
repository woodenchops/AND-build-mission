import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import Loyalty from '../assets/images/Loyalty.png';

function MiddlePart() {
  return (
    <section>
      <div>
        Today you've earned <strong>80 points!</strong>
      </div>
      <div>You're 200 points away from your next reward</div>
      <Row>
        <Col>
          <Image src={Loyalty} alt='card' rounded fluid />
        </Col>
        <Col></Col>
      </Row>
      <div>
        Click <a href='#'>here</a> to get more information on our loyalty
        programme.
      </div>
    </section>
  );
}

export default MiddlePart;
