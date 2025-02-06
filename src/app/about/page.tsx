
import Image from "next/image";

export default function AboutPage() {
  return (
  <div className="bg-white">
          {/* Header Section */}
          <header className="bg-gray-100 py-16 px-4 md:px-10">
              <div className="max-w-3xl mx-auto text-center">
                  <h6 className="text-3xl md:text-5xl  mb-6">
                      A brand built on the love of craftsmanship, quality, and outstanding customer service
                  </h6>
                  <button className="px-6 py-3 mt-4 bg-gray-800 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-gray-700">
                      View our products
                  </button>
              </div>
          </header>

          {/* Section 1 */}
          <section className="py-16 px-4 md:px-10">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left Block */}
                  <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg flex flex-col justify-center">
                      <h2 className="text-2xl font-semibold mb-4">It started with a small idea</h2>
                      <p className="text-gray-300 mb-6">
                          A global brand with local beginnings, our story began in a small studio in South London in early 2014.
                      </p>
                      <button className="px-6 py-3 bg-gray-700 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-gray-600">
                          View collection
                      </button>
                  </div>

                  {/* Right Block */}
                  <div className="flex items-center">
                      <Image
                          src="/about2.png"
                          alt="Interior Design"
                          width={500}
                          height={300}
                          className="rounded-lg shadow-lg w-full" />
                  </div>
              </div>
          </section>

          {/* Section 2 */}
          <section className="py-16 px-4 md:px-10">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left Block */}
                  <div className="flex items-center">
                      <Image
                          src="/about1.png"
                          alt="Furniture Setup"
                          width={500}
                          height={300}
                          className="rounded-lg shadow-lg w-full" />
                  </div>

                  {/* Right Block */}
                  <div className="flex flex-col justify-center">
                      <h2 className="text-2xl font-semibold mb-4">
                          Our service isnt just personal, its actually hyper-personally exquisite
                      </h2>
                      <p className="text-gray-500 mb-6">
                          When we started Avion, the idea was simple: Make high-quality furniture affordable and available for the mass
                          market.
                          <br />
                          <br />
                          Handmade, locally crafted furniture and homewares with a twist, blending bold design with comfort and luxury.
                      </p>
                      <button className="px-6 py-3 bg-gray-800 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-gray-700">
                          Get in touch
                      </button>
                  </div>
              </div>
          </section>
      </div> 
  );
}
