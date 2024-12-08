import Image from "next/image";

export default function Outlats() {
    return (
      <section className="bg-purple-100 flex justify-center items-center py-16 px-4">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg shadow-md overflow-hidden">
          {/* Left Side: Text Content */}
          <div className="p-10 flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-snug mb-6">
              From products to services that enable seamless experiences
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We are committed to delivering solutions that improve everyday life. Take steps today to ensure a brighter and more efficient tomorrow.
            </p>
            <button className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition-all text-lg">
              Learn More
            </button>
          </div>
  
          {/* Right Side: Image */}
          <div className="h-full">
            <Image
              src="/Image.png" // Replace with your actual image path
              alt="Interior Design"height={100}width={100}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
    );
  }
  