import React from 'react';
import { Gift, Truck, Users, Coffee } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Custom Gift Boxes",
      description: "Create personalized chocolate gift boxes for any occasion. Choose from our premium selection and we'll package them beautifully."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Corporate Orders",
      description: "Bulk orders for corporate events, with custom branding options. Special pricing available for large quantities."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Chocolate Workshops",
      description: "Join our master chocolatiers for hands-on workshops. Learn the art of chocolate making in our state-of-the-art facility."
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Chocolate Tasting Events",
      description: "Experience guided chocolate tasting sessions. Discover the nuances of fine chocolate with our experts."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[#3c1618] mb-4">Our Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our range of chocolate services, from custom gifts to corporate solutions.
          We're dedicated to bringing the finest chocolate experiences to you.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-[#3c1618] text-white p-4 rounded-full w-fit mb-6">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#3c1618] mb-4">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-[#fcf5ef] rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl font-bold text-[#3c1618] mb-6">Book a Service</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              Service Type
            </label>
            <select
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-[#d4a373] focus:border-[#d4a373]"
            >
              <option value="">Select a service</option>
              <option value="gift">Custom Gift Box</option>
              <option value="corporate">Corporate Order</option>
              <option value="workshop">Chocolate Workshop</option>
              <option value="tasting">Tasting Event</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Date
            </label>
            <input
              type="date"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-[#d4a373] focus:border-[#d4a373]"
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Additional Notes
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:ring-[#d4a373] focus:border-[#d4a373]"
            ></textarea>
          </div>
          
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-[#3c1618] text-white py-3 rounded-full font-semibold hover:bg-[#2a1011] transition-colors"
            >
              Book Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Services;