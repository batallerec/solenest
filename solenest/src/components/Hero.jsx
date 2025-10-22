import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary-50 to-primary-100 overflow-hidden">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-700 leading-tight">
                Where Comfort Meets{' '}
                <span className="text-accent-500">Style</span>
              </h1>
              <p className="text-lg sm:text-xl text-primary-600 leading-relaxed max-w-lg">
                Premium business-casual clog slippers crafted with suede and ergonomic cork soles. 
                Perfect for students, professionals, and hybrid workers.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Shop Now
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>

            {/* Social Proof */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-700">1000+</div>
                <div className="text-sm text-primary-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-700">4.8★</div>
                <div className="text-sm text-primary-600">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-700">PH</div>
                <div className="text-sm text-primary-600">Made in Philippines</div>
              </div>
            </div>
          </div>

          {/* Right Product Image */}
          <div className="relative animate-slide-up">
            <div className="relative z-10">
              {/* Product Image Placeholder */}
              <div className="bg-gradient-to-br from-accent-200 to-accent-300 rounded-2xl p-8 shadow-2xl animate-float">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="aspect-square bg-gradient-to-br from-primary-200 to-primary-300 rounded-lg flex items-center justify-center">
                    <svg className="w-32 h-32 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Feature Tags */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <span className="text-sm font-medium text-primary-700">Premium Suede</span>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <span className="text-sm font-medium text-primary-700">Cork Sole</span>
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent-200 rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-200 rounded-full opacity-50 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
