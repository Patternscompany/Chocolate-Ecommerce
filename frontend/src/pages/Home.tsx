import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ShoppingCart, Heart, ChevronRight } from "lucide-react";
import { Product, products } from "../data";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<Product[]>([]);
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext) ?? { user: null, logout: () => {} };

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
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
            <div className="hidden md:flex space-x-6  justify-center">
              <Link to="/" className="text-[#3c1618] hover:text-[#d4a373] transition-colors text-1.5xl text-bold">
                Home
              </Link>
              <Link to="/services" className="text-[#3c1618] hover:text-[#d4a373] transition-colors text-1.5xl text-bold">
                Services
              </Link>
              <Link to="/contact" className="text-[#3c1618] hover:text-[#d4a373] transition-colors text-1.5xl texr-bold">
                Contact
              </Link>
              {user ? (
                <>
                  <span className="text-[#3c1618]">Welcome, {user.email}</span>
                  <button onClick={logout} className="text-[#3c1618] hover:text-[#d4a373] transition-colors">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-[#3c1618] hover:text-[#d4a373] transition-colors">
                    Login
                  </Link>
                  <Link to="/signup" className="text-[#3c1618] hover:text-[#d4a373] transition-colors">
                    Signup
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>

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
              Discover our handcrafted chocolate collections made from the finest ingredients.
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
    </div>
  );
}

export default Home;
