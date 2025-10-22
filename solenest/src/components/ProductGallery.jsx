import React from 'react'

const ProductGallery = () => {
  const products = [
    {
      id: 1,
      name: "Classic Suede Clogs",
      price: "₱2,499",
      originalPrice: "₱2,999",
      badge: "Best Seller",
      badgeColor: "bg-accent-500",
      colors: ["bg-primary-300", "bg-primary-500", "bg-white"],
      image: "classic-suede"
    },
    {
      id: 2,
      name: "Professional Cork Slippers",
      price: "₱2,199",
      originalPrice: null,
      badge: "New",
      badgeColor: "bg-green-500",
      colors: ["bg-primary-300", "bg-primary-700"],
      image: "professional-cork"
    },
    {
      id: 3,
      name: "Adjustable Comfort Clogs",
      price: "₱2,799",
      originalPrice: null,
      badge: "Premium",
      badgeColor: "bg-purple-500",
      colors: ["bg-white", "bg-primary-300", "bg-primary-700"],
      image: "adjustable-comfort"
    },
    {
      id: 4,
      name: "Business Casual Slippers",
      price: "₱2,299",
      originalPrice: null,
      badge: null,
      badgeColor: "",
      colors: ["bg-primary-300", "bg-primary-700"],
      image: "business-casual"
    }
  ]

  return (
    <section id="products" className="bg-white section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-700 mb-6">
            Featured Products
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Discover our collection of premium clog slippers designed for comfort, 
            style, and versatility in your daily life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-primary-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative">
                {/* Product Image Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center p-6">
                  <div className="w-full h-full bg-white rounded-xl flex items-center justify-center shadow-inner">
                    <svg className="w-20 h-20 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Product Badge */}
                {product.badge && (
                  <div className={`absolute top-3 left-3 ${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {product.badge}
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-primary-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-600">
                    Quick View
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary-700 mb-2">
                  {product.name}
                </h3>
                
                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold text-primary-700">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-primary-500 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Color Options */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-primary-600">Colors:</span>
                  <div className="flex gap-1">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className={`w-4 h-4 rounded-full ${color} border-2 border-white shadow-sm hover:scale-110 transition-transform duration-200 cursor-pointer`}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full mt-4 bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <button className="btn-secondary">
            View All Products
          </button>
        </div>

        {/* Product Categories */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-primary-700 mb-4">
              Shop by Category
            </h3>
            <p className="text-primary-600">
              Find the perfect pair for your lifestyle
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-primary-700 mb-2">Classic Collection</h4>
              <p className="text-primary-600 text-sm">Timeless designs for everyday comfort</p>
            </div>

            <div className="bg-gradient-to-br from-accent-100 to-accent-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-600 transition-colors duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm2-2a1 1 0 011-1h2a1 1 0 011 1v1H8V4zm6 4H4v6h12V8z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-primary-700 mb-2">Professional</h4>
              <p className="text-primary-600 text-sm">Business-ready styles for the workplace</p>
            </div>

            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer group sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-primary-700 mb-2">Premium</h4>
              <p className="text-primary-600 text-sm">Luxury materials and superior craftsmanship</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductGallery
