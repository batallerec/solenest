import React from 'react'
import clogs3 from '../assets/clogs3.jpg'
import clogs4 from '../assets/clogs4.jpg'
import clogs5 from '../assets/clogs5.jpg'
import clogs22 from '../assets/clogs22.jpg'
import clogs33 from '../assets/clogs33.jpg'
import clogs444 from '../assets/clogs444.jpg'
import clogs55 from '../assets/clogs55.jpg'
import clogs555 from '../assets/clogs555.jpg'

const ProductGallery = () => {
  const products = [
    {
      id: 1,
      name: "Classic Suede Slippers",
      price: "₱2,499",
      originalPrice: "₱2,999",
      badge: "Best Seller",
      badgeColor: "bg-gradient-to-r from-gold-500 to-gold-600",
      image: clogs3
    },
    {
      id: 2,
      name: "Professional Cork Slippers",
      price: "₱2,199",
      originalPrice: null,
      badge: "New",
      badgeColor: "bg-gradient-to-r from-green-500 to-green-600",
      image: clogs4
    },
    {
      id: 3,
      name: "Adjustable Comfort Clogs",
      price: "₱2,799",
      originalPrice: null,
      badge: "Premium",
      badgeColor: "bg-gradient-to-r from-purple-500 to-purple-600",
      image: clogs5
    },
    {
      id: 4,
      name: "Business Casual Slippers",
      price: "₱2,299",
      originalPrice: null,
      badge: null,
      badgeColor: "",
      image: clogs22
    }
  ]

  return (
    <section id="products" className="relative section-padding luxury-bg">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-gold-500/5 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-gold-400/5 to-transparent rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center mb-20 animate-luxury-fade">
          <div className="space-y-6">
            <h2 className="heading-secondary text-luxury-platinum">
              Featured Products
            </h2>
            <div className="luxury-divider w-24 mx-auto"></div>
            <p className="text-xl text-luxury-platinum max-w-4xl mx-auto leading-relaxed font-light">
              Discover our collection of premium clog slippers designed for comfort, 
              style, and versatility in your daily life.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="product-card group animate-luxury-fade"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                {/* Product Image */}
                <div className="aspect-square bg-gradient-to-br from-luxury-charcoal/30 to-luxury-slate/30 flex items-center justify-center p-8 relative overflow-hidden">
                  <div className="w-full h-full luxury-card flex items-center justify-center shadow-inner-luxury">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Product Badge */}
                {product.badge && (
                  <div className={`absolute top-4 left-4 ${product.badgeColor} text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-glow`}>
                    {product.badge}
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 bg-luxury-dark text-luxury-platinum hover:bg-gold-500 hover:text-luxury-dark text-sm px-6 py-3 rounded-xl font-semibold shadow-luxury">
                    + Quick Add
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-luxury-platinum mb-4">
                  {product.name}
                </h3>
                
                {/* Price */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl font-bold text-luxury-platinum">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-luxury line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>


                {/* Add to Cart Button */}
                <button className="w-full btn-primary text-sm py-3">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center mb-20">
          <button className="btn-secondary">
            View All Products
          </button>
        </div>

        {/* Product Categories */}
        <div className="animate-luxury-slide">
          <div className="text-center mb-16">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-luxury-platinum">
                Shop by Category
              </h3>
              <div className="luxury-divider w-16 mx-auto"></div>
              <p className="text-luxury-platinum font-light">
                Find the perfect pair for your lifestyle
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="luxury-card p-10 text-center luxury-card-hover group cursor-pointer">
              <div className="w-20 h-20 bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-glow transition-all duration-500">
                <svg className="w-10 h-10 text-gold-500 group-hover:text-gold-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-luxury-platinum mb-3">Classic Collection</h4>
              <p className="text-luxury-platinum font-light">Timeless designs for everyday comfort</p>
            </div>

            <div className="luxury-card p-10 text-center luxury-card-hover group cursor-pointer">
              <div className="w-20 h-20 bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-glow transition-all duration-500">
                <svg className="w-10 h-10 text-gold-500 group-hover:text-gold-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm2-2a1 1 0 011-1h2a1 1 0 011 1v1H8V4zm6 4H4v6h12V8z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-luxury-platinum mb-3">Professional</h4>
              <p className="text-luxury-platinum font-light">Business-ready styles for the workplace</p>
            </div>

            <div className="luxury-card p-10 text-center luxury-card-hover group cursor-pointer sm:col-span-2 lg:col-span-1">
              <div className="w-20 h-20 bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-glow transition-all duration-500">
                <svg className="w-10 h-10 text-gold-500 group-hover:text-gold-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-luxury-platinum mb-3">Premium</h4>
              <p className="text-luxury-platinum font-light">Luxury materials and superior craftsmanship</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductGallery