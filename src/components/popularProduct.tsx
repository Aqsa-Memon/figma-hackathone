import Image from "next/image";

export default function PopularProducts() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold text-center mb-8">Our popular products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Poplar Suede Sofa */}
        <div className="flex flex-col items-center">
          <div className="w-full h-[300px] relative">
            <Image
              src="/sofa.png" // Update with actual image path
              alt="The Poplar Suede Sofa"
              layout="fill"
              objectFit="cover"
              className="rounded-md "

              
              
            />
          </div>
          <h3 className="text-lg font-medium mt-4">The Poplar suede sofa</h3>
          <p className="text-lg font-medium text-gray-700">£980</p>
        </div>

        {/* The Dandy Chair 1 */}
        <div className="flex flex-col items-center">
          <div className="w-full h-[300px] relative">
            <Image
              src="/chair1.png" // Update with actual image path
              // 
              alt="The Dandy Chair"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
              

          />
          </div>
          <h3 className="text-lg font-medium mt-4">The Dandy chair</h3>
          <p className="text-lg font-medium text-gray-700">£250</p>
        </div>

        {/* The Dandy Chair 2 */}
        <div className="flex flex-col items-center">
          <div className="w-full h-[300px] relative">
            <Image
              src="/chair2.png" // Update with actual image path
              alt="The Dandy Chair"
              layout="fill"
              objectFit="cover"
              className="rounded-md"

    
            />
          </div>
          <h3 className="text-lg font-medium mt-4">The Dandy chair</h3>
          <p className="text-lg font-medium text-gray-700">£250</p>
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition">
          View collection
        </button>
      </div>
    </section>
  );
}
