import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Label from '@/components/label'
import Header from '@/components/header'
import React from 'react'
import Ceramics from './ceramics/page'
import Signup from '@/components/signup '
import Outlats from '@/components/outlats'
import PopularProducts from '@/components/popularProduct'

const Page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Label />
      <Ceramics />
      <PopularProducts />
      <Signup />
      <Outlats />
       <Footer />
    </div>
  )
}

export default Page
