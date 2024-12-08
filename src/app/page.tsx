import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Label from '@/components/label'
import Header from '@/components/navbar'
import Navbar from '@/components/navbar'
import React from 'react'
import Ceramics from './ceramics/page'
import PopularProducts from './popularproduct/page'

const Page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Label />
      <Ceramics />
      <PopularProducts />
       <Footer />
    </div>
  )
}

export default Page
