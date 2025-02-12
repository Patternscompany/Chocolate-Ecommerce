import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, ChevronRight, X, Trash2 } from "lucide-react";
import { Product, products } from "../data";
import { useCart } from "../context/CartContext";

function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<Product[]>([]);
  const navigate = useNavigate();
  const { addToCart } = useCart();


  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-[#fcfaf8] relative overflow-auto">
      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 flex flex-col overflow-y-auto`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h3 className="text-xl font-semibold">Shopping Cart</h3>
          <button onClick={() => setIsCartOpen(false)}>
            <X className="w-6 h-6 text-[#3c1618]" />
          </button>
        </div>
{/* 
        <div className="p-4 flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li key={index} className="flex items-center space-x-4 border-b pb-2">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                  <div className="flex-1">
                    <p className="text-[#3c1618] font-semibold">{item.name}</p>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                  <button onClick={() => removeFromCart(index)}>
                    <Trash2 className="w-5 h-5 text-red-500" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div> */}

        {/* {cart.length > 0 && (
          <div className="p-4 border-t">
            <button
              className="w-full bg-[#d4a373] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#bc916a] transition-colors"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        )} */}
      </div>

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
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Indulge in Pure Luxury</h2>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16">
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
