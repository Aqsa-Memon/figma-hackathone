import Image from "next/image";

export default function Ceramics() {
    return (
      <div className="bg-white min-h-screen flex flex-col items-center py-10 px-4 md:px-10">
        <h1 className="text-2xl md:text-4xl font-bold mb-8">New ceramics</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl">
          {/* Item 1 */}
          <div className="flex flex-col items-center">
            <Image
              src="Product Card1.png"
              alt="The Dandy Chair"
              className="rounded-lg shadow-md w-full"
            />
            <h2 className="text-lg mt-4 font-semibold">The Dandy Chair</h2>
            <p className="text-gray-500 mt-2">£250</p>
          </div>
          {/* Item 2 */}
          <div className="flex flex-col items-center">
            <Image
              src="Product Card2.png"
              alt="Rustic Vase Set"
              className="rounded-lg shadow-md w-full"
            />
            <h2 className="text-lg mt-4 font-semibold">Rustic Vase Set</h2>
            <p className="text-gray-500 mt-2">£155</p>
          </div>
          {/* Item 3 */}
          <div className="flex flex-col items-center">
            <Image
              src="Product Card3.png"
              alt="The Silky Vase"
              className="rounded-lg shadow-md w-full"
            />
            <h2 className="text-lg mt-4 font-semibold">The Silky Vase</h2>
            <p className="text-gray-500 mt-2">£125</p>
          </div>
          {/* Item 4 */}
          <div className="flex flex-col items-center">
            <Image
              src="Product Card4.png"
              alt="The Lucky Lamp"
              className="rounded-lg shadow-md w-full"
            />
            <h2 className="text-lg mt-4 font-semibold">The Lucky Lamp</h2>
            <p className="text-gray-500 mt-2">£399</p>
          </div>
        </div>
        <button className="mt-10 px-6 py-3 bg-gray-800 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-gray-700">
          View collection
        </button>
      </div>
    );
  }
  