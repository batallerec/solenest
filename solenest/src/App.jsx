import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import ProductGallery from './components/ProductGallery'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen bg-primary-50">
      <Header />
      <Hero />
      <About />
      <Features />
      <ProductGallery />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
