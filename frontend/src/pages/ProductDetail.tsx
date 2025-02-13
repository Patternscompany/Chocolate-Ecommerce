

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));
    const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-[#3c1618]">Product not found</h2>
        <button
          onClick={() => navigate('/')}
          className="mt-4 text-[#3c1618] hover:underline inline-flex items-center"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </button>
      </div>
    );
  }

  
  const handleAddToCart = () => {
    addToCart(product);
    navigate("/checkout"); // Redirect to checkout after adding to cart
  };
  
  // Filter related products by category (excluding the current product)
  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <button
        onClick={() => navigate('/')}
        className="text-[#3c1618] hover:underline inline-flex items-center mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Products
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden rounded-2xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-[#3c1618]">{product.name}</h1>
          <p className="text-3xl font-bold text-[#3c1618]">${product.price}</p>
          <div className="h-px bg-gray-200" />
          <p className="text-gray-600 text-lg leading-relaxed">
            {product.description}
          </p>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-[#3c1618]">Product Details</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Handcrafted with premium ingredients</li>
              <li>Made with ethically sourced cocoa</li>
              <li>No artificial preservatives</li>
              <li>Best consumed within 14 days</li>
            </ul>
          </div>
          
          <button
            onClick={handleAddToCart}
            className="w-full bg-[#3c1618] text-white py-4 rounded-full font-semibold hover:bg-[#2a1011] transition-colors flex items-center justify-center"
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#3c1618] mb-6">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((related) => (
              <div
                key={related.id}
                className="cursor-pointer hover:shadow-lg transition-shadow rounded-xl overflow-hidden border"
                onClick={() => navigate(`/product/${related.id}`)}
              >
                <img
                  src={related.image}
                  alt={related.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#3c1618]">{related.name}</h3>
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

export default ProductDetail;
