import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ShoppingCart, Trash2, X } from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import { useCart } from "../context/CartContext"; // Import useCart

const Navbar = () => {
  const { user, logout } = useContext(AuthContext) ?? { user: null, logout: () => {} };
  const { cart, removeFromCart } = useCart(); // Get cart from global context
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="text-2xl font-bold text-[#3c1618]">Chocolatier</Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-[#3c1618] hover:text-[#d4a373] transition-colors">Home</Link>
              <Link to="/services" className="text-[#3c1618] hover:text-[#d4a373] transition-colors">Services</Link>
              <Link to="/contact" className="text-[#3c1618] hover:text-[#d4a373] transition-colors">Contact</Link>
              {user ? (
                <>
                  <span className="text-[#3c1618]">Welcome, {user.email}</span>
                  <button onClick={logout} className="text-[#3c1618] hover:text-[#d4a373] transition-colors">Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-[#3c1618] hover:text-[#d4a373] transition-colors">Login</Link>
                  <Link to="/signup" className="text-[#3c1618] hover:text-[#d4a373] transition-colors">Signup</Link>
                </>
              )}
            </div>

            {/* Cart Icon */}
            <button className="p-2 hover:bg-gray-100 rounded-full relative" onClick={() => setIsCartOpen(!isCartOpen)}>
              <ShoppingCart className="w-6 h-6 text-[#3c1618]" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#d4a373] text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Cart Dropdown */}
      {isCartOpen && (
        <div className="absolute right-4 top-16 bg-white shadow-lg rounded-lg w-80 p-4 z-50">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-[#3c1618]">Shopping Cart</h3>
            <button onClick={() => setIsCartOpen(false)}>
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {cart.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li key={index} className="flex items-center space-x-4 border-b pb-2">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                  <p className="text-[#3c1618] font-semibold">{item.name}</p>
                  <button onClick={() => removeFromCart(item.id)}>
                    <Trash2 className="w-5 h-5 text-red-500" />
                  </button>
                  
                  <p>${item.price}</p>
                </li>
                
              ))}
            </ul>
          )}

          {cart.length > 0 && (
            
            <div className="p-4 border-t">
              {/* Total Price Section */}
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold text-[#3c1618]">Total:</h4>
                <p className="text-xl font-bold text-[#3c1618]">
                  ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
                </p>
              </div>

              {/* Proceed to Checkout Button */}
              <button
                className="w-full bg-[#d4a373] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#bc916a] transition-colors"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
