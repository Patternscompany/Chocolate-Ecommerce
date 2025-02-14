// import React from "react";
// import { useCart } from "../context/CartContext";
// import { ArrowLeft } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const Checkout = () => {
//   const { cart } = useCart();
//   const navigate = useNavigate();

//   // Group products by id and calculate quantity
//   const groupedCart = cart.reduce((acc, item) => {
//     if (acc[item.id]) {
//       acc[item.id].quantity += 1;
//     } else {
//       acc[item.id] = { ...item, quantity: 1 };
//     }
//     return acc;
//   }, {});

//   const cartItems = Object.values(groupedCart);
//   const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
//       {/* Left Side - Billing Form */}
//       <div className="bg-white p-6 shadow-lg rounded-lg">
//         <button
//           onClick={() => navigate("/")}
//           className="text-[#3c1618] hover:underline inline-flex items-center mb-4"
//         >
//           <ArrowLeft className="w-4 h-4 mr-2" />
//           Back to Products
//         </button>
//         <h2 className="text-2xl font-bold text-[#3c1618] mb-6">Billing Details</h2>
//         <form className="space-y-4">
//           <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-lg" required />
//           <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-lg" required />
//           <input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded-lg" required />
//           <input type="text" placeholder="City" className="w-full p-3 border rounded-lg" required />
//           <input type="text" placeholder="Street Address" className="w-full p-3 border rounded-lg" required />
//           <input type="text" placeholder="Country" className="w-full p-3 border rounded-lg" required />
//           <button className="w-full bg-[#3c1618] text-white py-3 rounded-lg font-semibold hover:bg-[#2a1011] transition-colors">
//             Proceed to Payment
//           </button>
//         </form>
//       </div>

//       {/* Right Side - Order Summary */}
//       <div className="bg-white p-6 shadow-lg rounded-lg">
//         <h2 className="text-2xl font-bold text-[#3c1618] mb-6">Order Summary</h2>
//         {cartItems.length === 0 ? (
//           <p className="text-gray-600">Your cart is empty.</p>
//         ) : (
//           <div className="space-y-6">
//             {cartItems.map((item) => (
//               <div key={item.id} className="flex items-center border p-4 rounded-lg">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-24 h-24 object-cover rounded-lg mr-4"
//                 />
//                 <div className="flex-1">
//                   <h3 className="text-lg font-semibold text-[#3c1618]">{item.name}</h3>
//                   <p className="text-gray-600">${item.price} <span className="px-4"> Quantity :</span>  {item.quantity}</p>
//                 </div>
//               </div>
//             ))}
//             <div className="text-xl font-bold text-[#3c1618] border-t pt-4">
//               Total: ${totalPrice.toFixed(2)}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Checkout;



// import React from "react";
// import { useCart } from "../context/CartContext";
// import { ArrowLeft } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { products } from "../data";

// const Checkout = () => {
//   const { cart } = useCart();
//   const navigate = useNavigate();
//    const product = products.find(p => p.id === Number(id));

//   // Group products by id and calculate quantity
//   const groupedCart = cart.reduce((acc, item) => {
//     if (acc[item.id]) {
//       acc[item.id].quantity += 1;
//     } else {
//       acc[item.id] = { ...item, quantity: 1 };
//     }
//     return acc;
//   }, {} as Record<string, any>);

//   const cartItems = Object.values(groupedCart);
//   const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

 

//    const relatedProducts = products.filter(
//       (p) => p.category === product.category && p.id !== product?.id
//     );

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
//       {/* Left Side - Billing Form */}
//       <div className="bg-white p-6 shadow-lg rounded-lg">
//         <button
//           onClick={() => navigate("/")}
//           className="text-[#3c1618] hover:underline inline-flex items-center mb-4"
//         >
//           <ArrowLeft className="w-4 h-4 mr-2" />
//           Back to Products
//         </button>
//         <h2 className="text-2xl font-bold text-[#3c1618] mb-6">Billing Details</h2>
//         <form className="space-y-4">
//           <input type="name" placeholder="Full Name" className="w-full p-3 border rounded-lg" required />
//           <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-lg" required />
//           <input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded-lg" required />
//           <input type="text" placeholder="City" className="w-full p-3 border rounded-lg" required />
//           <input type="text" placeholder="Street Address" className="w-full p-3 border rounded-lg" required />
//           <input type="text" placeholder="Country" className="w-full p-3 border rounded-lg" required />
//           <button
//             type="button"
//             onClick={() => navigate("/payment")}
//             className="w-full bg-[#3c1618] text-white py-3 rounded-lg font-semibold hover:bg-[#2a1011] transition-colors"
//           >
//             Proceed to Payment
//           </button>
//         </form>
//       </div>

//       {/* Right Side - Order Summary */}
//       <div className="bg-white p-6 shadow-lg rounded-lg">
//         <h2 className="text-2xl font-bold text-[#3c1618] mb-6">Order Summary</h2>
//         {cartItems.length === 0 ? (
//           <p className="text-gray-600">Your cart is empty.</p>
//         ) : (
//           <div className="space-y-6">
//             {cartItems.map((item) => (
//               <div key={item.id} className="flex items-center border p-4 rounded-lg">
//                 <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg mr-4" />
//                 <div className="flex-1">
//                   <h3 className="text-lg font-semibold text-[#3c1618]">{item.name}</h3>
//                   <p className="text-gray-600">
//                     ${item.price} <span className="px-4"> Quantity :</span> {item.quantity}
//                   </p>
//                 </div>
//               </div>
//             ))}
//             <div className="text-xl font-bold text-[#3c1618] border-t pt-4">
//               Total: ${totalPrice.toFixed(2)}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Realated Products */}
//       {
//         relatedProducts.length >0 && (
//           <div className="mt-16">
//              <h2 className="text-2xl font-bold text-[#3c1618] mb-6">Related Products</h2>
//              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//              {relatedProducts.map((related) => (
//               <div
//                 key={related.id}
//                 className="cursor-pointer hover:shadow-lg transition-shadow rounded-xl overflow-hidden border"
//                 onClick={() => navigate(`/product/${related.id}`)}
//               >
//                 <img
//                   src={related.image}
//                   alt={related.name}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold text-[#3c1618]">{related.name}</h3>
//                   <p className="text-[#3c1618] font-bold">${related.price}</p>
//                 </div>
//               </div>
//             ))}
              
//               </div>
//           </div>
//         )
//       }


//     </div>
//   );
// };

// export default Checkout;

import React from "react";
import { useCart } from "../context/CartContext";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { products } from "../data";

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
  }, {} as Record<string, any>);

  const cartItems = Object.values(groupedCart);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // 1️⃣ Get categories from cart items
  const cartCategories = [...new Set(cart.map((item) => item.category))];

  // 2️⃣ Find related products from the same categories but exclude cart items
  const relatedProducts = products.filter(
    (p) => cartCategories.includes(p.category) && !cart.some((item) => item.id === p.id)
  );

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
          <input type="name" placeholder="Full Name" className="w-full p-3 border rounded-lg" required />
          <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-lg" required />
          <input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded-lg" required />
          <input type="text" placeholder="City" className="w-full p-3 border rounded-lg" required />
          <input type="text" placeholder="Street Address" className="w-full p-3 border rounded-lg" required />
          <input type="text" placeholder="Country" className="w-full p-3 border rounded-lg" required />
          <button
            type="button"
            onClick={() => navigate("/payment")}
            className="w-full bg-[#3c1618] text-white py-3 rounded-lg font-semibold hover:bg-[#2a1011] transition-colors"
          >
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
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg mr-4" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#3c1618]">{item.name}</h3>
                  <p className="text-gray-600">
                    ${item.price} <span className="px-4"> Quantity :</span> {item.quantity}
                  </p>
                </div>
              </div>
            ))}
            <div className="text-xl font-bold text-[#3c1618] border-t pt-4">
              Total: ${totalPrice.toFixed(2)}
            </div>
          </div>
        )}
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
  <div className="mt-16">
    <h2 className="text-2xl font-bold text-[#3c1618] mb-6">Related Products</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {relatedProducts.map((related) => (
        <div
          key={related.id}
          className="cursor-pointer border rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          onClick={() => navigate(`/product/${related.id}`)}
        >
          <img
            src={related.image}
            alt={related.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 bg-white">
            <h3 className="text-lg font-semibold text-[#3c1618] truncate">{related.name}</h3>
            <p className="text-[#3c1618] font-bold">${related.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

    </div>
  );
};

export default Checkout;

