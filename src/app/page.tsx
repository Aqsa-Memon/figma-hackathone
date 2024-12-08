import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Label from '@/components/label'
import Header from '@/components/navbar'
import React from 'react'
import Ceramics from './ceramics/page'
import PopularProducts from './popularproduct/page'
import Signup from '@/components/signup '

const Page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Label />
      <Ceramics />
      <PopularProducts />
      <Signup />
       <Footer />
    </div>
  )
}

export default Page
