import React from "react";
import { useCart } from "../context/CartContext";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  // Group products by id and calculate quantity
  const groupedCart = cart.reduce((acc, item) => {
    if (acc[item.id]) {
      acc[item.id].quantity += 1;
    } else {
      acc[item.id] = { ...item, quantity: 1 };
    }
    return acc;
  }, {});

  const cartItems = Object.values(groupedCart);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Side - Billing Form */}
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <button
          onClick={() => navigate("/")}
          className="text-[#3c1618] hover:underline inline-flex items-center mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </button>
        <h2 className="text-2xl font-bold text-[#3c1618] mb-6">Billing Details</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-lg" required />
          <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-lg" required />
          <input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded-lg" required />
          <input type="text" placeholder="City" className="w-full p-3 border rounded-lg" required />
          <input type="text" placeholder="Street Address" className="w-full p-3 border rounded-lg" required />
          <input type="text" placeholder="Country" className="w-full p-3 border rounded-lg" required />
          <button className="w-full bg-[#3c1618] text-white py-3 rounded-lg font-semibold hover:bg-[#2a1011] transition-colors">
            Proceed to Payment
          </button>
        </form>
      </div>

      {/* Right Side - Order Summary */}
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-[#3c1618] mb-6">Order Summary</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center border p-4 rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#3c1618]">{item.name}</h3>
                  <p className="text-gray-600">${item.price} <span className="px-4"> Quantity :</span>  {item.quantity}</p>
                </div>
              </div>
            ))}
            <div className="text-xl font-bold text-[#3c1618] border-t pt-4">
              Total: ${totalPrice.toFixed(2)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;