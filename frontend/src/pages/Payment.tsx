


// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import axios from "axios";

// const Payment = () => {
//   const { cart } = useCart();
//   const navigate = useNavigate();

//   // Calculate total price
//   const totalPrice = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

//   const loadRazorpay = () => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     script.onload = () => handlePayment();
//     document.body.appendChild(script);
//   };

//   const handleCheckout = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/api/email/send-order-confirmation", {
//         name: "kumar", // Get actual user name
//         email: "kardamkumar13@gmail.com", // Get actual user email
//         cart: cart,
//         totalPrice,
//       });
//       alert(response.data.message);
//     } catch (error) {
//       alert("Failed to send order confirmation email.");
//     }
//   };

//   const handlePayment = () => {
//     const options = {
//       key: "rzp_test_AOZA9FvJqbOWam", // Replace with your Razorpay Key
//       amount: totalPrice * 100, // Convert to paisa
//       currency: "INR",
//       name: "Your Store",
//       description: "Order Payment",
//       image: "/your-logo.png",
//       handler: function (response: any) {
//         alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        
//         // Ensure smooth navigation
//         setTimeout(() => {
//           navigate("/"); // Redirect to Home
//         }, 1000); // Delay to ensure payment completion

//         // Fallback in case navigate doesn't work
//         setTimeout(() => {
//           window.location.href = "/";
//         }, 2000);
//       },
//       prefill: {
//         name: "User Name",
//         email: "user@example.com",
//         contact: "9999999999",
//       },
//       theme: {
//         color: "#3c1618",
//       },
//     };

//     const paymentObject = new (window as any).Razorpay(options);
//     paymentObject.open();
//   };

//   useEffect(() => {
//     loadRazorpay();
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <h2 className="text-2xl font-bold text-[#3c1618] mb-6">Processing Payment...</h2>
//     </div>
//   );
// };

// export default Payment;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import axios from "axios";
import Checkout from "./Checkout";

const Payment = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  const loadRazorpay = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => handlePayment();
    document.body.appendChild(script);
  };

  const handleCheckout = async (paymentId) => {
    try {
      const response = await axios.post("http://localhost:5000/api/email/send-order-confirmation", {
        name: "Kumar", // Replace with actual user data
        email: "kardamkumar13@gmail.com", // Replace with actual user email
        cart: cart,
        totalPrice,
        paymentId, // Include the payment ID for reference
        
      });

      alert(response.data.message);
    } catch (error) {
      alert("Failed to send order confirmation email.");
      console.error("Email Error:", error);
    }
  };

  const handlePayment = () => {
    const options = {
      key: "rzp_test_AOZA9FvJqbOWam", // Replace with your Razorpay Key
      amount: totalPrice * 100, // Convert to paisa
      currency: "INR",
      name: "Your Store",
      description: "Order Payment",
      image: "/your-logo.png",
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);

        // Send email after successful payment
        handleCheckout(response.razorpay_payment_id);

        // Ensure smooth navigation
        setTimeout(() => {
          navigate("/"); // Redirect to Home
        }, 1000);
      },
      prefill: {
        name: "User Name", // Replace dynamically
        email: "user@example.com", // Replace dynamically
        contact: "9999999999", // Replace dynamically
      },
      theme: {
        color: "#3c1618",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  useEffect(() => {
    loadRazorpay();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold text-[#3c1618] mb-6">Processing Payment...</h2>
    </div>
  );
};

export default Payment;
