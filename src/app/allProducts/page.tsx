import Header from "@/components/header";
import Image from "next/image";

export default function ProductPage() {
  return (
    <><Header /><section className="bg-white min-h-screen px-4 md:px-10 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl md:text-4xl font-bold mb-8">All products</h1>

        {/* Filters (Optional - Add links or buttons as necessary) */}
        <div className="flex justify-between items-center mb-6">
          <div className="space-x-4">
            <button className="text-sm font-medium text-gray-500 hover:text-gray-700">
              Category
            </button>
            <button className="text-sm font-medium text-gray-500 hover:text-gray-700">
              Product Type
            </button>
            <button className="text-sm font-medium text-gray-500 hover:text-gray-700">
              Price
            </button>
            <button className="text-sm font-medium text-gray-500 hover:text-gray-700">
              Brand
            </button>
          </div>
          <button className="text-sm font-medium text-gray-500 hover:text-gray-700">
            Sort by: Date Added
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Product 1 */}
          <div className="flex flex-col items-center">
            <Image
              src="/Product Card1.png"
              alt="The Dandy Chair"
              width={300}
              height={300}
              className="rounded-lg shadow-md w-full" />
            <h2 className="text-lg mt-4 font-semibold">The Dandy Chair</h2>
            <p className="text-gray-500 mt-2">£250</p>
          </div>

          {/* Product 2 */}
          <div className="flex flex-col items-center">
            <Image
              src="/Product Card2.png"
              alt="Rustic Vase Set"
              width={300}
              height={300}
              className="rounded-lg shadow-md w-full" />
            <h2 className="text-lg mt-4 font-semibold">Rustic Vase Set</h2>
            <p className="text-gray-500 mt-2">£155</p>
          </div>

          {/* Product 3 */}
          <div className="flex flex-col items-center">
            <Image
              src="/Product Card3.png"
              alt="The Silky Vase"
              width={300}
              height={300}
              className="rounded-lg shadow-md w-full" />
            <h2 className="text-lg mt-4 font-semibold">The Silky Vase</h2>
            <p className="text-gray-500 mt-2">£125</p>
          </div>

          {/* Product 4 */}
          <div className="flex flex-col items-center">
            <Image
              src="/Product Card4.png"
              alt="The Lucky Lamp"
              width={300}
              height={300}
              className="rounded-lg shadow-md w-full" />
            <h2 className="text-lg mt-4 font-semibold">The Lucky Lamp</h2>
            <p className="text-gray-500 mt-2">£399</p>
          </div>

          {/* Repeat similar blocks for more products */}
        </div>

        {/* View Collection Button */}
        <div className="text-center mt-10">
          <button className="px-6 py-3 bg-gray-800 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-gray-700">
            View collection
          </button>
        </div>
      </div>
    </section></>
  );
}
