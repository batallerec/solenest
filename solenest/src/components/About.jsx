import React from 'react'
import bgStory1 from '../assets/bg-story1.jpg'
import bgStory2 from '../assets/bg-story2.jpg'
import bgStory3 from '../assets/bg-story3.jpg'
import bgStory from '../assets/bg-story.jpg'

const About = () => {
  return (
    <section id="about" className="relative section-padding luxury-bg">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-l from-gold-500/5 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-gold-400/5 to-transparent rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-12 animate-luxury-fade">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="heading-secondary text-luxury-platinum">
                  Our Story
                </h2>
                <div className="luxury-divider w-16"></div>
              </div>
              <p className="text-xl text-luxury-platinum leading-relaxed font-light">
                Born from a passion for creating the perfect blend of comfort and style, 
                Solenest was founded with a simple mission: to craft premium footwear 
                that adapts to your lifestyle with uncompromising luxury.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-luxury-platinum">
                Crafted for the Modern Filipino
              </h3>
              <p className="text-lg text-luxury-platinum leading-relaxed font-light">
                We understand the needs of today's professionals, students, and hybrid workers. 
                Our clog slippers are designed to seamlessly transition from home to office, 
                from study sessions to casual outings, providing unmatched comfort without 
                compromising on style.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-luxury-platinum">
                Premium Materials, Sustainable Choices
              </h3>
              <p className="text-lg text-luxury-platinum leading-relaxed font-light">
                Every pair of Solenest slippers features premium suede uppers and natural 
                cork soles sourced responsibly. We believe in creating products that not 
                only feel good but also contribute to a more sustainable future.
              </p>
            </div>

            {/* Brand Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="text-center group">
                <div className="text-5xl font-bold text-luxury-platinum mb-2 group-hover:scale-110 transition-transform duration-300">2023</div>
                <div className="text-sm text-luxury-platinum font-medium uppercase tracking-wider">Founded</div>
              </div>
              <div className="text-center group">
                <div className="text-5xl font-bold text-luxury-platinum mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-sm text-luxury-platinum font-medium uppercase tracking-wider">Handcrafted</div>
              </div>
            </div>
          </div>

          {/* Right Image Gallery */}
          <div className="grid grid-cols-2 gap-6 animate-luxury-slide">
            <div className="space-y-6">
              <div className="luxury-card p-0 aspect-square flex items-center justify-center group luxury-card-hover overflow-hidden">
                <img 
                  src={bgStory1} 
                  alt="Solenest Craftsmanship - Handmade Process" 
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="luxury-card p-0 aspect-square flex items-center justify-center group luxury-card-hover overflow-hidden">
                <img 
                  src={bgStory2} 
                  alt="Solenest Workshop - Material Preparation" 
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="luxury-card p-0 aspect-square flex items-center justify-center group luxury-card-hover overflow-hidden">
                <img 
                  src={bgStory3} 
                  alt="Solenest Heritage - Traditional Craftsmanship" 
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="luxury-card p-0 aspect-square flex items-center justify-center group luxury-card-hover overflow-hidden">
                <img 
                  src={bgStory} 
                  alt="Solenest Story - Quality Materials" 
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Luxury Elements */}
        <div className="mt-20 text-center">
          <div className="luxury-card p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-luxury-platinum mb-6">Our Commitment to Excellence</h3>
            <p className="text-lg text-luxury-platinum leading-relaxed font-light max-w-3xl mx-auto">
              Every Solenest product is meticulously crafted with attention to detail, 
              ensuring that luxury and comfort are never compromised. We believe that 
              premium footwear should enhance your daily experience, not just protect your feet.
            </p>
            <div className="luxury-divider w-32 mx-auto mt-8"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About