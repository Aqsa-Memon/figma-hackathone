import Ceramics2 from '@/components/ceramics';
import Club from '@/components/club';
import Studio from '@/components/studio';
import React from 'react';
import ProductsPage from './products/page';
import Brand from '@/components/brand';
import Hero from './hero';

const page = () => {
  return (
    <div>
      <Hero/>
      <Brand/>
      <ProductsPage />
      <Ceramics2 />
      <Club/>
      <Studio/>
    </div>
  )
}

export default page;