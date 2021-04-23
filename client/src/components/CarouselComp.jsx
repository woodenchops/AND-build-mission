import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselComp({ title, products }) {
  return (
    <div>
      <h4>{title}</h4>
      <Carousel style={{ height: '350px', width: '350px' }}>
        {products.map((product, i) => (
          <Carousel.Item key={i}>
            <img className='d-block w-100' src={product.image} alt='' />
            <Carousel.Caption>
              <h3>
                {product.name} £{product.price}
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselComp;
