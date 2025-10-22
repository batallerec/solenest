import React from 'react'

const About = () => {
  return (
    <section id="about" className="bg-white section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-primary-700">
                Our Story
              </h2>
              <p className="text-lg text-primary-600 leading-relaxed">
                Born from a passion for creating the perfect blend of comfort and style, 
                Solenest was founded with a simple mission: to craft premium footwear 
                that adapts to your lifestyle.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary-700">
                Crafted for the Modern Filipino
              </h3>
              <p className="text-lg text-primary-600 leading-relaxed">
                We understand the needs of today's professionals, students, and hybrid workers. 
                Our clog slippers are designed to seamlessly transition from home to office, 
                from study sessions to casual outings, providing unmatched comfort without 
                compromising on style.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary-700">
                Premium Materials, Sustainable Choices
              </h3>
              <p className="text-lg text-primary-600 leading-relaxed">
                Every pair of Solenest slippers features premium suede uppers and natural 
                cork soles sourced responsibly. We believe in creating products that not 
                only feel good but also contribute to a more sustainable future.
              </p>
            </div>

            {/* Brand Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-700">2023</div>
                <div className="text-sm text-primary-600">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-700">100%</div>
                <div className="text-sm text-primary-600">Handcrafted</div>
              </div>
            </div>
          </div>

          {/* Right Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-primary-200 to-primary-300 rounded-xl p-8 aspect-square flex items-center justify-center">
                <svg className="w-16 h-16 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="bg-gradient-to-br from-accent-200 to-accent-300 rounded-xl p-8 aspect-square flex items-center justify-center">
                <svg className="w-16 h-16 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-gradient-to-br from-primary-300 to-primary-400 rounded-xl p-8 aspect-square flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="bg-gradient-to-br from-accent-300 to-accent-400 rounded-xl p-8 aspect-square flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
