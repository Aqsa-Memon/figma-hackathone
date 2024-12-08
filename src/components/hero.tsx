// import Navbar from "./navbar";

// export default function Home() {
//   return (
//     <div>
//       <Navbar />
//       <main className="p-4">
//         <h1 className="text-xl">Welcome to Avion</h1>
//       </main>
//     </div>
//   );
// }
import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1440px] mx-auto grid grid-cols-12 gap-4 px-4 lg:px-8 py-16">
      {/* Left Section */}
      <div className="col-span-12 md:col-span-6 bg-[#2E2249] p-8 rounded-lg text-white">
        <h1 className="text-4xl font-bold leading-tight">
          The furniture brand for the future, with timeless designs
        </h1>
        <button className="mt-6 px-6 py-3 bg-white text-[#2E2249] font-semibold rounded-lg hover:bg-gray-200">
          View collection
        </button>
        <p className="mt-8 text-gray-300 ">
          A new era in eco-friendly furniture with Avion, the French luxury
          retail brand with nice fonts, tasteful colors, and a beautiful way
          to display things digitally using modern web technologies.
        </p>
      </div>

      {/* Right Section */}
      <div className="col-span-12 md:col-span-6 flex items-center justify-center bg-[#D6DFE5] rounded-lg">
        <img
          src="/container.png"
          alt="Modern Chair"
          className="w-[80%] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
