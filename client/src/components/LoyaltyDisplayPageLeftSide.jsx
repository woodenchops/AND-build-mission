import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import LoyaltyProgress from '../assets/images/LoyaltyProgress.jpg';

function LoyaltyDisplayPageLeftSide() {
  return (
    <section>
      <Col>
        <Row>
          <h5>You've earned XXX Points</h5>
        </Row>
        <Row>
          <Image src={LoyaltyProgress} width={400}></Image>
        </Row>
        <Row>
          <h5>What can I do with my loyalty points?</h5>
        </Row>
        <Row>
          <h6>Discount Shipping</h6>
        </Row>
        <Row>
          <ul>
            <li>Save on shipping costs when free shipping isn't available</li>
          </ul>
        </Row>
        <Row>
          <h6>Charity Donation</h6>
        </Row>
        <Row>
          <ul>
            <li>We're partnered with 4Ocean</li>
          </ul>
        </Row>
        <Row>
          <h6>Receive a gift</h6>
        </Row>
        <Row>
          <ul>
            <li>Receive a cool gift curated by our team</li>
          </ul>
        </Row>
        <Row>
          <h6>Discount off future purchases</h6>
        </Row>
        <Row>
          <ul>
            <li>Get a discount on your next order</li>
          </ul>
        </Row>
        <Row>
          <h6>Exclusive offers</h6>
        </Row>
        <Row>
          <ul>
            <li>
              Have the ability to purchase products not available to anyone else
            </li>
          </ul>
        </Row>
      </Col>
    </section>
  );
}

export default LoyaltyDisplayPageLeftSide;
