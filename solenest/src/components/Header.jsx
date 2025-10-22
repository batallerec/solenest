import React, { useState, useEffect, useRef } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/10 backdrop-blur-xl" ref={menuRef}>
      <nav className="container-max">
        <div className="flex items-center justify-between py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
          {/* Navigation - Left Side */}
          <div className="hidden md:block flex-1">
            <div className="flex items-center space-x-8">
              <a href="#home" className="nav-link px-3 py-2 text-sm font-semibold">
                Home
              </a>
              <a href="#products" className="nav-link px-3 py-2 text-sm font-semibold">
                Shop
              </a>
              <a href="#about" className="nav-link px-3 py-2 text-sm font-semibold">
                About
              </a>
              <a href="#contact" className="nav-link px-3 py-2 text-sm font-semibold">
                Contact
              </a>
            </div>
          </div>

          {/* Logo - Center */}
          <div className="flex-shrink-0 group cursor-pointer">
            <h1 className="text-2xl sm:text-3xl font-bold text-luxury-platinum font-display tracking-wider">
              SOLENEST
            </h1>
          </div>

          {/* Utility Icons - Right Side */}
          <div className="hidden md:flex items-center space-x-6 flex-1 justify-end">
            <button className="text-luxury-platinum hover:text-gold-500 transition-all duration-300 transform hover:scale-110 p-2 rounded-lg hover:bg-white/5">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-luxury-platinum hover:text-gold-500 transition-all duration-300 transform hover:scale-110 p-2 rounded-lg hover:bg-white/5">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button className="relative text-luxury-platinum hover:text-gold-500 transition-all duration-300 transform hover:scale-110 p-2 rounded-lg hover:bg-white/5">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              {/* Cart Badge */}
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-gold-500 to-gold-600 text-luxury-dark text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-glow">
                3
              </span>
            </button>
          </div>

          {/* Mobile menu button and icons */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile utility icons */}
            <button className="text-luxury-platinum hover:text-gold-500 transition-all duration-300 transform hover:scale-110 p-2 rounded-lg hover:bg-white/5">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="relative text-luxury-platinum hover:text-gold-500 transition-all duration-300 transform hover:scale-110 p-2 rounded-lg hover:bg-white/5">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              {/* Cart Badge */}
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-gold-500 to-gold-600 text-luxury-dark text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-glow">
                3
              </span>
            </button>
            <button
              onClick={toggleMenu}
              className="text-luxury-platinum hover:text-gold-500 focus:outline-none focus:text-gold-500 transition-colors duration-300 p-2 rounded-lg hover:bg-white/5"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-down">
            <div className="px-4 pt-2 pb-4 space-y-2 glass-dark border-t border-white/10 backdrop-blur-xl">
              <a 
                href="#home" 
                className="nav-link block px-4 py-3 text-base font-semibold rounded-lg hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#products" 
                className="nav-link block px-4 py-3 text-base font-semibold rounded-lg hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </a>
              <a 
                href="#about" 
                className="nav-link block px-4 py-3 text-base font-semibold rounded-lg hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="nav-link block px-4 py-3 text-base font-semibold rounded-lg hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
