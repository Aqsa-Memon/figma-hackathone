import React from 'react'

import { FaShoppingBag, FaTruck, FaMoneyCheckAlt, FaTags } from 'react-icons/fa';

const Label = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#2A254B] mb-8">What Makes Our Brand different </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-6">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
            <FaTruck className="text-black-700 text-4xl mx-auto mb-4" />

            <h3 className="text-xl font-semibold text-black-800">Next day as standerd</h3>
            <p className="text-gray-600 mt-2">Order before 3pm and get your order the next day as standerd.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
            <FaShoppingBag className="text-black-700 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-black-800">Made by true artisans</h3>
            <p className="text-gray-600 mt-2">Handmade crafted goods made with real passion and craftmanship.</p>
          </div>
          
        
          
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
            <FaMoneyCheckAlt className="black-700 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-black-800">Unbeattable prices</h3>
            <p className="text-gray-600 mt-2">For our materials and quality you won't find better prices anywhere.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
            <FaTags className="text-black-700 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-black-800">Recycled packaging</h3>
            <p className="text-gray-600 mt-2">We use 100% recycled packaging to ensure our footprint is manageable.</p>
          </div>

        </div>
      </div>
    </section>
  );
};


export default Label