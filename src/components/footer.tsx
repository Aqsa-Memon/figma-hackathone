

import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1E1B4B] text-white py-10">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Menu Section */}
          <div>
            <h3 className="font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">New Arrivals</a></li>
              <li><a href="#" className="hover:underline">Best Sellers</a></li>
              <li><a href="#" className="hover:underline">Recently Viewed</a></li>
              <li><a href="#" className="hover:underline">Popular This Week</a></li>
              <li><a href="/allProducts" className="hover:underline">All Products</a></li>
            </ul>
          </div>
          {/* Categories Section */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Cookery</a></li>
              <li><a href="#" className="hover:underline">Furniture</a></li>
              <li><a href="#" className="hover:underline">Hardware</a></li>
              <li><a href="#" className="hover:underline">Plant Pots</a></li>
              <li><a href="#" className="hover:underline">Chairs</a></li>
            </ul>
          </div>
          {/* Our Company Section */}
          <div>
            <h3 className="font-semibold mb-4">Our Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Newsletter</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Returns Policy</a></li>
            </ul>
          </div>
          {/* Newsletter Section */}
          <div>
            <h3 className="font-semibold mb-4">Join our mailing list</h3>
            <form className="flex flex-col sm:flex-row items-center sm:space-x-2">
              <input
                type="email"
                placeholder="youremail@domain.com"
                className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <button
                type="submit"
                className="mt-2 sm:mt-0 px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-all"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10">
          <p className="text-sm">Copyright 2024 Nexus LTD</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Pinterest" className="text-gray-400 hover:text-white transition">
              <FaPinterest />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
