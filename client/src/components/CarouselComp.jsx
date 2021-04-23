import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselComp({ products }) {
  return (
    <Carousel>
      {products.map((product) => (
        <Carousel.Item>
          <img className='d-block w-100' src={product.image} alt='' />
          <Carousel.Caption>
            <h3>
              {product.name} £{product.price}
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComp;
