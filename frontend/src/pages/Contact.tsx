import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-[#3c1618] mb-12 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-[#3c1618]">Get in Touch</h2>
          <p className="text-gray-600">
            Have questions about our chocolates? We'd love to hear from you. Send us a message
            and we'll respond as soon as possible.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-[#3c1618] p-3 rounded-full">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#3c1618]">Email</h3>
                <p className="text-gray-600">info@chocolatier.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-[#3c1618] p-3 rounded-full">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#3c1618]">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-[#3c1618] p-3 rounded-full">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#3c1618]">Address</h3>
                <p className="text-gray-600">123 Chocolate Lane<br />Sweet City, SC 12345</p>
              </div>
            </div>
          </div>
        </div>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-[#d4a373] focus:border-[#d4a373]"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-[#d4a373] focus:border-[#d4a373]"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              required
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:ring-[#d4a373] focus:border-[#d4a373]"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-[#3c1618] text-white py-3 rounded-full font-semibold hover:bg-[#2a1011] transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;