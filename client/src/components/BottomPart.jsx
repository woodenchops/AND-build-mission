import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import RatingStars from '../assets/images/RatingStars.png';

function BottomPart() {
  return (
    <section>
      <Col>
        <Row>
          <h5>Customer Feedback!</h5>
        </Row>
        <Row>
          <p>
            We're all about our customer service, and we will always strive to
            improve where we can so we want to hear from you!
          </p>
        </Row>
        <Row>
          <p>How would you rate your experience today?</p>
        </Row>
        <Row>
          <p>
            Please spare 5 minutes to fill out a customer satisfactory feedback
            form: <Image src={RatingStars} />
          </p>
        </Row>
        <p>
          <a href='#'>Survey Monkey: Paper Tiger - Customer feedback form</a>
        </p>
      </Col>
    </section>
  );
}

export default BottomPart;
