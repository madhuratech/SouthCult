import React from 'react'
import Hero from '../components/Label/hero'
import TraditionalVsSouthCult from '../components/Label/TraditionalVsSouthCult'
import TransparentRevenue from '../components/Label/TransparentRevenue'
import Navbar from '../components/Layout/navbar'
import Footer from '../components/Layout/footer'
import FAQ from '../components/Label/faq'

function Label() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <TraditionalVsSouthCult/>
      <TransparentRevenue/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default Label