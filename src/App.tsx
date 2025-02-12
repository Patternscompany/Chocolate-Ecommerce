import React, { useState } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Menu, X, ChevronRight } from 'lucide-react';
import { Product, products } from './data';
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import Services from './pages/Services';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<Product[]>([]);
  const navigate = useNavigate();

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-[#fcfaf8]">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-2xl font-bold text-[#3c1618]">
                Chocolatier
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link to="/" className="text-[#3c1618] hover:text-[#d4a373] transition-colors">
                  Home
                </Link>
                <Link to="/services" className="text-[#3c1618] hover:text-[#d4a373] transition-colors">
                  Services
                </Link>
                <Link to="/contact" className="text-[#3c1618] hover:text-[#d4a373] transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Heart className="w-6 h-6 text-[#3c1618]" />
              </button>
              <button 
                className="p-2 hover:bg-gray-100 rounded-full relative"
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <ShoppingCart className="w-6 h-6 text-[#3c1618]" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#d4a373] text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/checkout" element={<Checkout cart={cart} />} />
        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/" element={
          <>
            {/* Hero Section */}
            <div className="relative bg-[#3c1618] h-[500px] overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&q=80"
                  alt="Chocolate background"
                  className="w-full h-full object-cover opacity-50"
                />
              </div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                <div className="text-white">
                  <h2 className="text-4xl md:text-6xl font-bold mb-4">
                    Indulge in Pure Luxury
                  </h2>
                  <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                    Discover our handcrafted chocolate collections made from the finest ingredients
                  </p>
                  <button className="bg-[#d4a373] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#bc916a] transition-colors flex items-center">
                    Shop Now <ChevronRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <h3 className="text-2xl font-bold text-[#3c1618] mb-8">Featured Products</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <div 
                    key={product.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-[#3c1618] mb-2">{product.name}</h4>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-[#3c1618]">${product.price}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(product);
                          }}
                          className="bg-[#d4a373] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#bc916a] transition-colors"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        } />
      </Routes>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-[#3c1618]">Shopping Cart</h3>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-6 h-6 text-[#3c1618]" />
                </button>
              </div>
              {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty</p>
              ) : (
                <div>
                  {cart.map((item, index) => (
                    <div key={index} className="flex items-center py-4 border-b">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="ml-4 flex-1">
                        <h4 className="font-semibold text-[#3c1618]">{item.name}</h4>
                        <p className="text-gray-600">${item.price}</p>
                      </div>
                    </div>
                  ))}
                  <div className="mt-6">
                    <div className="flex justify-between mb-4">
                      <span className="font-semibold">Total:</span>
                      <span className="font-bold text-[#3c1618]">
                        ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                      </span>
                    </div>
                    <button 
                      onClick={handleCheckout}
                      className="w-full bg-[#3c1618] text-white py-3 rounded-full font-semibold hover:bg-[#2a1011] transition-colors"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;