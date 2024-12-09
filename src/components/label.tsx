
import { FaShippingFast, FaHandHoldingHeart, FaTags, FaRecycle } from "react-icons/fa";

export default function BrandDifference() {
  return (
    <section className="bg-white py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          What makes our brand different
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <FaShippingFast className="text-4xl text-gray-800 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Next day as standard</h3>
            <p className="text-gray-500">
              Order before 9pm and get your items the next day as standard.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <FaHandHoldingHeart className="text-4xl text-gray-800 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Made by true artisans</h3>
            <p className="text-gray-500">
              Handmade crafted goods made with real passion and craftsmanship.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <FaTags className="text-4xl text-gray-800 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Unbeatable prices</h3>
            <p className="text-gray-500">
              For our materials and quality, you{ `won’t` }find better prices anywhere.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center">
            <FaRecycle className="text-4xl text-gray-800 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Recycled packaging</h3>
            <p className="text-gray-500">
              We use 100% recycled materials to reduce our footprint and make a
              sustainable impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
