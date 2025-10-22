import React from 'react'

const Features = () => {
  const features = [
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      ),
      title: "Premium Suede",
      description: "Soft, luxurious suede material that provides comfort and sophistication for any occasion."
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      title: "Ergonomic Cork Sole",
      description: "Natural cork sole that molds to your feet, providing superior comfort and arch support all day long."
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
      title: "Stylish Adjustable Design",
      description: "Versatile design with adjustable straps that adapts to your style and comfort preferences."
    }
  ]

  return (
    <section className="relative section-padding luxury-bg">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-gold-500/5 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-gradient-to-l from-gold-400/5 to-transparent rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center mb-20 animate-luxury-fade">
          <div className="space-y-6">
            <h2 className="heading-secondary text-luxury-platinum">
              Why Choose Solenest?
            </h2>
            <div className="luxury-divider w-24 mx-auto"></div>
            <p className="text-xl text-luxury-platinum max-w-4xl mx-auto leading-relaxed font-light">
              Every pair is crafted with attention to detail, combining premium materials 
              with innovative design for the perfect blend of comfort and style.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="luxury-card p-10 luxury-card-hover group animate-luxury-fade"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-2xl flex items-center justify-center text-gold-500 mx-auto mb-8 group-hover:scale-110 group-hover:shadow-glow transition-all duration-500 backdrop-blur-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-luxury-platinum mb-6">
                  {feature.title}
                </h3>
                <p className="text-luxury-platinum leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Target Audience Section */}
        <div className="animate-luxury-slide">
          <div className="text-center mb-16">
            <div className="space-y-6">
              <h2 className="heading-secondary text-luxury-platinum">
                Designed for Your Lifestyle
              </h2>
              <div className="luxury-divider w-24 mx-auto"></div>
              <p className="text-xl text-luxury-platinum max-w-4xl mx-auto leading-relaxed font-light">
                Whether you're studying, working, or living life on your terms, 
                Solenest adapts to your daily needs with uncompromising comfort and style.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Students */}
            <div className="luxury-card p-10 luxury-card-hover group">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-2xl flex items-center justify-center text-gold-500 mr-6 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.482 0l5.5-2.357a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-luxury-platinum">Students</h3>
                  <p className="text-gold-500 font-medium">Campus Comfort</p>
                </div>
              </div>
              <p className="text-luxury-platinum mb-6 leading-relaxed font-light">
                Perfect for long study sessions, campus walks, and dormitory life. 
                Comfortable enough for all-day wear.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-luxury-platinum">
                  <svg className="w-5 h-5 text-gold-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  All-day comfort
                </li>
                <li className="flex items-center text-luxury-platinum">
                  <svg className="w-5 h-5 text-gold-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Easy to slip on/off
                </li>
                <li className="flex items-center text-luxury-platinum">
                  <svg className="w-5 h-5 text-gold-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Versatile styling
                </li>
              </ul>
            </div>

            {/* Professionals */}
            <div className="luxury-card p-10 luxury-card-hover group">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-2xl flex items-center justify-center text-gold-500 mr-6 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm2-2a1 1 0 011-1h2a1 1 0 011 1v1H8V4zm6 4H4v6h12V8z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-luxury-platinum">Professionals</h3>
                  <p className="text-gold-500 font-medium">Office Ready</p>
                </div>
              </div>
              <p className="text-luxury-platinum mb-6 leading-relaxed font-light">
                Business-casual elegance meets comfort. Professional enough for the office, 
                comfortable for commuting.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-luxury-platinum">
                  <svg className="w-5 h-5 text-gold-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Business-casual style
                </li>
                <li className="flex items-center text-luxury-platinum">
                  <svg className="w-5 h-5 text-gold-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Professional appearance
                </li>
                <li className="flex items-center text-luxury-platinum">
                  <svg className="w-5 h-5 text-gold-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Commute-friendly
                </li>
              </ul>
            </div>

            {/* Hybrid Workers */}
            <div className="luxury-card p-10 luxury-card-hover group">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-2xl flex items-center justify-center text-gold-500 mr-6 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-luxury-platinum">Hybrid Workers</h3>
                  <p className="text-gold-500 font-medium">Work From Anywhere</p>
                </div>
              </div>
              <p className="text-luxury-platinum mb-6 leading-relaxed font-light">
                The perfect companion for hybrid work. Comfortable at home, presentable 
                for video calls, ready for quick errands.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-luxury-platinum">
                  <svg className="w-5 h-5 text-gold-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Home office comfort
                </li>
                <li className="flex items-center text-luxury-platinum">
                  <svg className="w-5 h-5 text-gold-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Video call ready
                </li>
                <li className="flex items-center text-luxury-platinum">
                  <svg className="w-5 h-5 text-gold-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Quick errands
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features