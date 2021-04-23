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

  const recentlyViewed = [
    {
      name: '4Ocean Reusable Face Masks Pack of 2',
      price: 22.0,
      image:
        'https://cdn.shopify.com/s/files/1/0923/6150/products/4ocean_masks_1024x1024.jpg?v=1607446279',
    },
    {
      name: 'Nailo Translucent Cobalt Blue Bracelet',
      price: 5.0,
      image:
        'https://cdn.shopify.com/s/files/1/0923/6150/products/8564eaf344b898742b990898ca372402b1cc57fd_1024x1024.jpg?v=1608050857',
    },
    {
      name: 'Captain Haddock Insults Tintin T-Shirt',
      price: 25.99,
      image:
        'https://cdn.shopify.com/s/files/1/0923/6150/products/20200707_211349_1024x1024.jpg?v=1594152887',
    },
  ];

  const offers = [
    {
      name: "'Wild Shore' & 'The Walled Garden' Notebooks by Angie Lewin",
      price: 6.0,
      image:
        'https://cdn.shopify.com/s/files/1/0923/6150/products/8873cb2a2fccfe95e0434780540b23cf6937f23b_1024x1024.jpg?v=1611930676',
    },
    {
      name: 'Pollinator Beebom Seedbom',
      price: 4.0,
      image:
        'https://cdn.shopify.com/s/files/1/0923/6150/products/07ce899fb47990111fa0dbfe816ac37ebd539867_1024x1024.png?v=1486984581',
    },
    {
      name: '2021/2022 Mid Year Calendar',
      price: 11.0,
      image:
        'https://cdn.shopify.com/s/files/1/0923/6150/products/daf55d8fff3fdec6cd307ecf2ac65aa690e5b686_1024x1024.jpg?v=1615219193',
    },
  ];

  return (
    <section>
      <CarouselComp
        title={'Recommended for you'}
        products={recommendedProducts}
      />
      <CarouselComp title={'Recently Viewed'} products={recentlyViewed} />
      <CarouselComp title={'Offers'} products={offers} />
    </section>
  );
}

export default LoyaltyRightSide;
