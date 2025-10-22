import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-max">
        <div className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary-700">
              SOLENEST
            </h1>
            <p className="text-sm text-primary-500 -mt-1">clogs shop</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-primary-700 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Home
              </a>
              <a href="#products" className="text-primary-700 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Shop
              </a>
              <a href="#about" className="text-primary-700 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors duration-200">
                About
              </a>
              <a href="#contact" className="text-primary-700 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          {/* Utility Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-primary-700 hover:text-primary-500 transition-colors duration-200">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-primary-700 hover:text-primary-500 transition-colors duration-200">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button className="text-primary-700 hover:text-primary-500 transition-colors duration-200">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-primary-700 hover:text-primary-500 focus:outline-none focus:text-primary-500"
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-primary-100">
              <a href="#home" className="text-primary-700 hover:text-primary-500 block px-3 py-2 text-base font-medium">
                Home
              </a>
              <a href="#products" className="text-primary-700 hover:text-primary-500 block px-3 py-2 text-base font-medium">
                Shop
              </a>
              <a href="#about" className="text-primary-700 hover:text-primary-500 block px-3 py-2 text-base font-medium">
                About
              </a>
              <a href="#contact" className="text-primary-700 hover:text-primary-500 block px-3 py-2 text-base font-medium">
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
