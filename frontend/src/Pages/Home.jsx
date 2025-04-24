import React from 'react'
import Hero from '../Components/layout/Userlayout/Hero'
import GenderCollection from '../Components/Products/GenderCollection'
import NewArrival from '../Components/Products/NewArrival'
import ProductDetails from '../Components/Products/ProductDetail'
import FeaturedCollection from '../Components/Products/FeaturedCollection'
import FeaturedSection from '../Components/Products/FeaturedSection'
export default function Home() {
  return (
    <div>
        <Hero/>
        <GenderCollection/>
        <NewArrival/>
        <ProductDetails/>
        <FeaturedCollection/>
        <FeaturedSection/>
    </div>
  )
}
