// 'use client';

// import React, { useEffect, useState } from 'react';
// import { client } from '@/sanity/lib/client';
// import Image from 'next/image';
// import { urlFor } from '@/sanity/lib/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation'; // Import useRouter for navigation
// import { Product } from '../../../types/products';

// const ProductsPage = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [showAll, setShowAll] = useState(false);
//   const productsPerPage = 4;

//   const router = useRouter(); // Initialize router for navigation

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const fetchedProducts: Product[] = await client.fetch(`*[_type == "product"] | order(_createdAt desc)`);
//         setProducts(fetchedProducts);
//         setVisibleProducts(fetchedProducts.slice(0, productsPerPage)); // Show only 4 initially
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const loadMoreProducts = () => {
//     setVisibleProducts(products); // Show all products on "View More" click
//     setShowAll(true);
//   };

//   const proceedToCheckout = () => {
//     router.push('/checkout'); // Redirect to checkout page
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold mb-6 text-center">Featured Products</h1>
      
//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
//         {visibleProducts.map((product) => (
//           <div
//             key={product._id}
//             className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
//           >
//             <Link href={`/product/${product.slug.current}`}>
//               <h2 className="font-semibold text-lg mb-2">{product.name}</h2>
//               {product.image && (
//                 <Image
//                   src={urlFor(product.image).url()}
//                   alt={product.name}
//                   width={400}
//                   height={350}
//                   className="h-40 object-cover rounded-md"
//                 />
//               )}
//               <p className="mt-2 font-medium text-gray-700">${product.price}</p>
//             </Link>
//           </div>
//         ))}
//       </div>

//       {/* View More Button */}
//       {!showAll && !loading && (
//         <div className="text-center mt-8">
//           <button
//             onClick={loadMoreProducts}
//             className="bg-[#2A254B] text-white px-6 py-2 rounded-md"
//           >
//             View More
//           </button>
//         </div>
//       )}

//       {/* Loading Indicator */}
//       {loading && (
//         <div className="text-center mt-8">
//           <span className="text-lg text-gray-500">Loading...</span>
//         </div>
//       )}

//       {/* Proceed to Checkout Button */}
//       <div className="text-center mt-8">
//         <Link href="/checkout">
//         <button
//           onClick={proceedToCheckout}
//           className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md text-lg transition-all duration-300"
//         >
//           Proceed to Checkout
//         </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;



'use client';

import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Product } from '../../../types/products';

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const productsPerPage = 4;

  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedProducts: Product[] = await client.fetch(
          `*[_type == "product"] | order(_createdAt desc)`
        );
        setProducts(fetchedProducts);
        setVisibleProducts(fetchedProducts.slice(0, productsPerPage));
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to load products. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const loadMoreProducts = () => {
    setVisibleProducts(products);
    setShowAll(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Featured Products</h1>

      {error && <p className="text-red-600 text-center">{error}</p>}

      {loading ? (
        <div className="text-center mt-8">
          <span className="text-lg text-gray-500">Loading...</span>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {visibleProducts.map((product) => (
              <div key={product._id} className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
                <Link href={`/product/${product.slug.current}`}>
                  <h2 className="font-semibold text-lg mb-2">{product.name}</h2>
                  {product.image && (
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.name}
                      width={400}
                      height={350}
                      className="h-40 object-cover rounded-md"
                    />
                  )}
                  <p className="mt-2 font-medium text-gray-700">${product.price}</p>
                </Link>
              </div>
            ))}
          </div>

          {!showAll && visibleProducts.length < products.length && (
            <div className="text-center mt-8">
              <button onClick={loadMoreProducts} className="bg-[#2A254B] text-white px-6 py-2 rounded-md">
                View More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductsPage;