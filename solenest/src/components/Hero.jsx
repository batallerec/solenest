import React from 'react'
import clogs5 from '../assets/clogs-solenest.jpg'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen luxury-bg overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gold-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-gold-400/10 to-transparent rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-gold-600/5 to-transparent rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-12 animate-luxury-fade">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="heading-primary text-luxury-platinum">
                Where Comfort Meets{' '}
                  <span className="gradient-text font-luxury">Style</span>
              </h1>
                <div className="luxury-divider w-24"></div>
              </div>
              <p className="text-xl sm:text-2xl text-luxury-platinum leading-relaxed max-w-2xl font-light">
                Premium business-casual clog slippers crafted with suede and ergonomic cork soles. 
                Perfect for students, professionals, and hybrid workers seeking uncompromising luxury.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="btn-primary shimmer group">
                <span className="relative z-10">Shop Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              </button>
              <button className="btn-secondary group">
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              </button>
            </div>

            {/* Social Proof */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center group">
                <div className="text-4xl font-bold text-luxury-platinum mb-2 group-hover:scale-110 transition-transform duration-300">1000+</div>
                <div className="text-sm text-luxury-platinum font-medium uppercase tracking-wider">Happy Customers</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-luxury-platinum mb-2 group-hover:scale-110 transition-transform duration-300">4.8★</div>
                <div className="text-sm text-luxury-platinum font-medium uppercase tracking-wider">Customer Rating</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-luxury-platinum mb-2 group-hover:scale-110 transition-transform duration-300">PH</div>
                <div className="text-sm text-luxury-platinum font-medium uppercase tracking-wider">Made in Philippines</div>
              </div>
            </div>
          </div>

          {/* Right Product Image */}
          <div className="relative animate-luxury-slide">
            <div className="relative z-10">
              {/* Main Product Container */}
              <div className="relative">
                {/* Product Image */}
                <div className="luxury-card p-12 shadow-luxury-lg animate-float group">
                  <div className="bg-gradient-to-br from-luxury-charcoal/50 to-luxury-slate/50 rounded-3xl p-8 shadow-inner-luxury backdrop-blur-sm">
                    <div className="aspect-square rounded-2xl overflow-hidden relative">
                      <img 
                        src={clogs5} 
                        alt="Premium Solenest Clogs" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Shimmer overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-shimmer"></div>
                    </div>
                </div>
              </div>

              {/* Feature Tags */}
                <div className="absolute top-6 right-6 glass rounded-2xl px-6 py-3 shadow-luxury backdrop-blur-xl">
                  <span className="text-sm font-semibold text-luxury-platinum">Premium Suede</span>
                </div>
                <div className="absolute bottom-6 left-6 glass rounded-2xl px-6 py-3 shadow-luxury backdrop-blur-xl">
                  <span className="text-sm font-semibold text-luxury-platinum">Cork Sole</span>
              </div>

                {/* Floating Elements */}
                <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-full blur-xl animate-pulse-slow"></div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-gold-400/20 to-gold-500/20 rounded-full blur-xl animate-pulse-slow delay-1000"></div>
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br from-gold-500/10 to-transparent rounded-full blur-2xl animate-float"></div>
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-br from-gold-400/10 to-transparent rounded-full blur-2xl animate-float delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="glass rounded-full p-3 shadow-luxury backdrop-blur-xl">
          <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
        </div>
      </div>

      {/* Luxury Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
    </section>
  )
}

export default Hero