import React from 'react';
import CarouselComp from './CarouselComp';

function LoyaltyRightSide() {
  const recommendedProducts = [
    {
      name: "Don't Grow Up! Letterpress Birthday Card",
      price: 4.0,
      image:
        'https://cdn.shopify.com/s/files/1/0923/6150/products/20210311_154518_1024x1024.jpg?v=1616151286',
    },
    {
      name: "Daddy Cool Father's Day Card",
      price: 3.0,
      image:
        'https://cdn.shopify.com/s/files/1/0923/6150/products/1412dc1a91d8f05d9b01034152afbd00041daad0_1024x1024.jpg?v=1618928751',
    },
    {
      name: 'West End St John’s Church Corner Lothian Road Sketcher Card',
      price: 3.0,
      image:
        'https://cdn.shopify.com/s/files/1/0923/6150/products/c71b22149adf7626c5fa29a6ad892f72f7ee3cb2_1024x1024.jpg?v=1537790724',
    },
  ];

  return <CarouselComp products={recommendedProducts} />;
}

export default LoyaltyRightSide;
