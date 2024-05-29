
import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/Features'
import Footer from './components/Footer'
import Pricing from './components/Pricing'




const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Pricing/>
      <FeatureSection/>
      <Footer/>
    </div>
    
  )
}

export default App
