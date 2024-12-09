import Image from "next/image";

export default function Ceramics() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-10 px-4 md:px-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
        New Ceramics
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 w-full max-w-7xl">
        {/* Item 1 */}
        <div className="flex flex-col items-center">
          <Image
            src="/Product Card1.png"
            alt="The Dandy Chair"
            width={200}
            height={200}
            className="rounded-lg shadow-md w-full object-cover"
          />
          <h2 className="text-lg sm:text-xl mt-4 font-semibold text-center">
            The Dandy Chair
          </h2>
          <p className="text-gray-500 mt-2 text-center">£250</p>
        </div>
        {/* Item 2 */}
        <div className="flex flex-col items-center">
          <Image
            src="/Product Card2.png"
            alt="Rustic Vase Set"
            width={200}
            height={200}
            className="rounded-lg shadow-md w-full object-cover"
          />
          <h2 className="text-lg sm:text-xl mt-4 font-semibold text-center">
            Rustic Vase Set
          </h2>
          <p className="text-gray-500 mt-2 text-center">£155</p>
        </div>
        {/* Item 3 */}
        <div className="flex flex-col items-center">
          <Image
            src="/Product Card3.png"
            alt="The Silky Vase"
            width={200}
            height={200}
            className="rounded-lg shadow-md w-full object-cover"
          />
          <h2 className="text-lg sm:text-xl mt-4 font-semibold text-center">
            The Silky Vase
          </h2>
          <p className="text-gray-500 mt-2 text-center">£125</p>
        </div>
        {/* Item 4 */}
        <div className="flex flex-col items-center">
          <Image
            src="/Product Card4.png"
            alt="The Lucky Lamp"
            width={200}
            height={200}
            className="rounded-lg shadow-md w-full object-cover"
          />
          <h2 className="text-lg sm:text-xl mt-4 font-semibold text-center">
            The Lucky Lamp
          </h2>
          <p className="text-gray-500 mt-2 text-center">£399</p>
        </div>
      </div>
      <button className="mt-10 px-6 py-3 bg-gray-800 text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-gray-700 transition-all">
        View Collection
      </button>
    </div>
  );
}
