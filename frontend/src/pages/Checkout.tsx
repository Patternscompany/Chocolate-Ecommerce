import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../data';

interface CheckoutProps {
  cart: Product[];
}

interface DeliveryDetails {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

interface PaymentDetails {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
}

const Checkout: React.FC<CheckoutProps> = ({ cart }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState<'delivery' | 'payment'>('delivery');
  const [deliveryDetails, setDeliveryDetails] = useState<DeliveryDetails>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
  });

  const handleDeliverySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically process the payment
    alert('Order placed successfully!');
    navigate('/');
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between mb-8">
        <button
          onClick={() => navigate('/')}
          className="text-[#3c1618] hover:underline"
        >
          ← Back to Shopping
        </button>
        <div className="flex space-x-4">
          <span className={`font-semibold ${step === 'delivery' ? 'text-[#3c1618]' : 'text-gray-400'}`}>
            Delivery
          </span>
          <span>→</span>
          <span className={`font-semibold ${step === 'payment' ? 'text-[#3c1618]' : 'text-gray-400'}`}>
            Payment
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {step === 'delivery' ? (
            <form onSubmit={handleDeliverySubmit} className="space-y-6">
              <h2 className="text-2xl font-bold text-[#3c1618] mb-6">Delivery Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    value={deliveryDetails.firstName}
                    onChange={(e) => setDeliveryDetails({ ...deliveryDetails, firstName: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-[#d4a373] focus:border-[#d4a373]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    value={deliveryDetails.lastName}
                    onChange={(e) => setDeliveryDetails({ ...deliveryDetails, lastName: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-[#d4a373] focus:border-[#d4a373]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={deliveryDetails.email}
                  onChange={(e) => setDeliveryDetails({ ...deliveryDetails, email: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-[#d4a373] focus:border-[#d4a373]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  required
                  value={deliveryDetails.address}
                  onChange={(e) => setDeliveryDetails({ ...deliveryDetails, address: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-[#d4a373] focus:border-[#d4a373]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    required
                    value={deliveryDetails.city}
                    onChange={(e) => setDeliveryDetails({ ...deliveryDetails, city: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-[#d4a373] focus:border-[#d4a373]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    required
                    value={deliveryDetails.postalCode}
                    onChange={(e) => setDeliveryDetails({ ...deliveryDetails, postalCode: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-[#d4a373] focus:border-[#d4a373]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <input
                  type="text"
                  required
                  value={deliveryDetails.country}
                  onChange={(e) => setDeliveryDetails({ ...deliveryDetails, country: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-[#d4a373] focus:border-[#d4a373]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#3c1618] text-white py-3 rounded-full font-semibold hover:bg-[#2a1011] transition-colors"
              >
                Continue to Payment
              </button>
            </form>
          ) : (
            <form onSubmit={handlePaymentSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold text-[#3c1618] mb-6">Payment Details</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  required
                  placeholder="1234 5678 9012 3456"
                  value={paymentDetails.cardNumber}
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-[#d4a373] focus:border-[#d4a373]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Holder Name
                </label>
                <input
                  type="text"
                  required
                  value={paymentDetails.cardHolder}
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, cardHolder: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-[#d4a373] focus:border-[#d4a373]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="MM/YY"
                    value={paymentDetails.expiryDate}
                    onChange={(e) => setPaymentDetails({ ...paymentDetails, expiryDate: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-[#d4a373] focus:border-[#d4a373]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CVV
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="123"
                    value={paymentDetails.cvv}
                    onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-[#d4a373] focus:border-[#d4a373]"
                  />
                </div>
              </div>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setStep('delivery')}
                  className="flex-1 bg-gray-100 text-gray-800 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#3c1618] text-white py-3 rounded-full font-semibold hover:bg-[#2a1011] transition-colors"
                >
                  Place Order
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md h-fit">
          <h3 className="text-lg font-semibold text-[#3c1618] mb-4">Order Summary</h3>
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div key={index} className="flex items-center py-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-[#3c1618]">{item.name}</h4>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
            ))}
            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold text-lg">
                <span>Total:</span>
                <span className="text-[#3c1618]">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;