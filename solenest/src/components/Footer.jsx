import React, { useState } from 'react'
import FloatingLabelInput from './FloatingLabelInput'
import MessageToast from './MessageToast'
import { sendEmail, formatContactFormData } from '../services/emailService'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  
  // Contact form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })

  // Email functionality state
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastType, setToastType] = useState('success')
  const [showToast, setShowToast] = useState(false)

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const handleFormChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }))
  }

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form data
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      showToastMessage('Please fill in all required fields.', 'error')
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      showToastMessage('Please enter a valid email address.', 'error')
      return
    }

    setIsSubmitting(true)
    showToastMessage('Sending message...', 'loading')

    try {
      // Format form data for email template
      const templateParams = formatContactFormData(formData)
      
      // Send email
      const result = await sendEmail(templateParams)
      
      if (result.success) {
        showToastMessage('Message sent successfully! We\'ll get back to you soon.', 'success')
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        showToastMessage(result.message || 'Failed to send message. Please try again.', 'error')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      showToastMessage('An unexpected error occurred. Please try again later.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Helper function to show toast messages
  const showToastMessage = (message, type = 'success') => {
    setToastMessage(message)
    setToastType(type)
    setShowToast(true)
  }

  // Helper function to close toast
  const closeToast = () => {
    setShowToast(false)
  }

  return (
    <>
      {/* CTA Section */}
      <section id="contact" className="relative section-padding luxury-bg">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gold-500/5 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-gold-400/5 to-transparent rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        </div>

        <div className="container-max text-center relative z-10">
          <div className="animate-luxury-fade mb-16">
            <h2 className="heading-secondary text-luxury-platinum mb-6">Get in Touch</h2>
            <div className="luxury-divider w-24 mx-auto mb-8"></div>
            <p className="text-xl text-luxury-platinum max-w-4xl mx-auto leading-relaxed font-light">
              Have questions about our products or need assistance with your order? 
              We're here to help and would love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="bg-gray-800/90 backdrop-blur-xl border border-gray-700 rounded-2xl p-10 animate-luxury-slide shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Send us a Message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <FloatingLabelInput
                    type="text"
                    label="First name"
                    value={formData.firstName}
                    onChange={handleFormChange('firstName')}
                  />
                  <FloatingLabelInput
                    type="text"
                    label="Last name"
                    value={formData.lastName}
                    onChange={handleFormChange('lastName')}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <FloatingLabelInput
                    type="email"
                    label="E-mail"
                    value={formData.email}
                    onChange={handleFormChange('email')}
                  />
                  <FloatingLabelInput
                    type="text"
                    label="What's this about?"
                    value={formData.subject}
                    onChange={handleFormChange('subject')}
                  />
                </div>
                <FloatingLabelInput
                  type="textarea"
                  label="Tell us how we can help you..."
                  value={formData.message}
                  onChange={handleFormChange('message')}
                  rows={4}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform shadow-lg hover:shadow-xl ${
                    isSubmitting 
                      ? 'bg-gray-500 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 hover:scale-105'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-12 animate-luxury-fade">
              <div>
                <h3 className="text-2xl font-bold text-luxury-platinum mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center group">
                    <div className="w-14 h-14 bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-luxury-platinum">Email</p>
                      <p className="text-luxury-platinum">hello@solenest.com</p>
                    </div>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-14 h-14 bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-luxury-platinum">Phone</p>
                      <p className="text-luxury-platinum">+63 917 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-14 h-14 bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-luxury-platinum">Address</p>
                      <p className="text-luxury-platinum">Manila, Philippines</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-luxury-platinum mb-8">Business Hours</h3>
                <div className="space-y-3 text-luxury-platinum">
                  <p><span className="font-semibold text-luxury-platinum">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                  <p><span className="font-semibold text-luxury-platinum">Saturday:</span> 10:00 AM - 4:00 PM</p>
                  <p><span className="font-semibold text-luxury-platinum">Sunday:</span> Closed</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-luxury-platinum mb-8">Follow Us</h3>
                <div className="flex space-x-4">
                  <button className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-glow transition-all duration-300 group">
                    <svg className="w-6 h-6 text-gold-500 group-hover:text-gold-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-glow transition-all duration-300 group">
                    <svg className="w-6 h-6 text-gold-500 group-hover:text-gold-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                    </svg>
                  </button>
                  <button className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-glow transition-all duration-300 group">
                    <svg className="w-6 h-6 text-gold-500 group-hover:text-gold-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-luxury-dark border-t border-white/10">
        <div className="container-max py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h3 className="text-3xl font-bold text-luxury-platinum mb-2 font-display tracking-wider">SOLENEST</h3>
              <p className="text-luxury-platinum mb-6 font-medium tracking-widest uppercase">clogs shop</p>
              <p className="text-luxury-platinum text-sm leading-relaxed mb-8 font-light">
                Premium business-casual clog slippers crafted with suede and cork soles. 
                Where comfort meets style for the modern Filipino lifestyle.
              </p>
              
              {/* Newsletter Signup */}
              <div className="mb-8">
                <h4 className="font-semibold text-luxury-platinum mb-3">Stay Updated</h4>
                <p className="text-luxury-platinum text-sm mb-4 font-light">
                  Get the latest updates on new products and exclusive offers.
                </p>
                <form onSubmit={handleEmailSubmit} className="flex">
                  <div className="flex-1 floating-label-group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={(e) => {
                        const label = e.target.parentElement.querySelector('.floating-label')
                        if (label) {
                          label.classList.add('focused', 'has-value')
                          label.classList.remove('unfocused')
                        }
                      }}
                      onBlur={(e) => {
                        const label = e.target.parentElement.querySelector('.floating-label')
                        if (label && !e.target.value) {
                          label.classList.remove('focused', 'has-value')
                          label.classList.add('unfocused')
                        }
                      }}
                      className="floating-label-input rounded-r-none"
                    />
                    <label className={`floating-label ${email ? 'focused has-value' : 'unfocused'}`}>
                      E-mail
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 px-6 py-3 rounded-r-xl transition-all duration-300 hover:shadow-glow"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </button>
                </form>
                {isSubscribed && (
                  <p className="text-green-400 text-sm mt-3 font-medium">Thank you for subscribing!</p>
                )}
              </div>
            </div>

            {/* Shop Links */}
            <div>
              <h4 className="font-semibold text-luxury-platinum mb-6">Shop</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-luxury-platinum hover:text-gold-500 transition-colors duration-300 font-light">All Products</a></li>
                <li><a href="#" className="text-luxury-platinum hover:text-gold-500 transition-colors duration-300 font-light">New Arrivals</a></li>
                <li><a href="#" className="text-luxury-platinum hover:text-gold-500 transition-colors duration-300 font-light">Best Sellers</a></li>
                <li><a href="#" className="text-luxury-platinum hover:text-gold-500 transition-colors duration-300 font-light">Sale</a></li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-semibold text-luxury-platinum mb-6">Support</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-luxury-platinum hover:text-gold-500 transition-colors duration-300 font-light">Size Guide</a></li>
                <li><a href="#" className="text-luxury-platinum hover:text-gold-500 transition-colors duration-300 font-light">Shipping Info</a></li>
                <li><a href="#" className="text-luxury-platinum hover:text-gold-500 transition-colors duration-300 font-light">Returns</a></li>
                <li><a href="#" className="text-luxury-platinum hover:text-gold-500 transition-colors duration-300 font-light">FAQ</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-luxury-platinum mb-6">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-luxury-platinum hover:text-gold-500 transition-colors duration-300 font-light">About Us</a></li>
                <li><a href="#" className="text-luxury-platinum hover:text-gold-500 transition-colors duration-300 font-light">Contact</a></li>
                <li><a href="#" className="text-luxury-platinum hover:text-gold-500 transition-colors duration-300 font-light">Careers</a></li>
                <li><a href="#" className="text-luxury-platinum hover:text-gold-500 transition-colors duration-300 font-light">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="luxury-divider mt-12 mb-8"></div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-luxury-platinum text-sm font-light">
              © 2024 SOLENEST clogs shop. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-6 md:mt-0">
              <span className="text-luxury-platinum text-sm font-light">Follow us:</span>
              <div className="flex space-x-3">
                <button className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-glow transition-all duration-300 group">
                  <svg className="w-5 h-5 text-gold-500 group-hover:text-gold-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-glow transition-all duration-300 group">
                  <svg className="w-5 h-5 text-gold-500 group-hover:text-gold-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-glow transition-all duration-300 group">
                  <svg className="w-5 h-5 text-gold-500 group-hover:text-gold-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Message Toast */}
      <MessageToast
        message={toastMessage}
        type={toastType}
        isVisible={showToast}
        onClose={closeToast}
        duration={toastType === 'error' ? 8000 : 5000}
      />
    </>
  )
}

export default Footer