import { Key } from "react";

export interface Products {
    _id: Key | null | undefined;
    id: number;
    name: string;
    price: string;
    image: string;
}
export const products = [
    {
        id: 1,
        name: "The Dandy Chair",
        price: "£250",
        image: "/hero.png",
    },
    {
        id: 2,
        name: "Rustic Vase Set",
        price: "£155",
        image: "/Parent.png",
    },
    {
        id: 3,
        name: "The Silky Vase",
        price: "£125",
        image: "/silk.png",
    },
    {
        id: 4,
        name: "The Lucy Lamp",
        price: "£399",
        image: "/lamp.png",
    },
];















// import React, { useEffect, useState } from 'react';
// import { client } from '@/sanity/lib/client';
// import Image from 'next/image';
// import { urlFor } from '@/sanity/lib/image';

// type Product = {
//   _id: string;
//   name: string;
//   price: number;
//   image: any;
//   slug: { current: string };
//   description: string;
// };

// type CartItem = {
//   product: Product;
//   quantity: number;
// };

// const CollectionPage = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     async function fetchProducts() {
//       const fetchedProducts: Product[] = await client.fetch('*[_type == "product"]');
//       setProducts(fetchedProducts);
//     }

//     fetchProducts();
//   }, []);

//   const handleAddToCart = (product: Product) => {
//     if (!product) {
//       console.error('Product is undefined');
//       return;
//     }

//     // Get the cart from localStorage or initialize an empty array
//     const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');

//     // Check if the product already exists in the cart
//     const existingItem = cartItems.find((item: CartItem) => item.product._id === product._id);

//     if (existingItem) {
//       // If product exists, increase the quantity
//       existingItem.quantity += 1;
//     } else {
//       // Add product to cart with quantity 1
//       cartItems.push({ product, quantity: 1 });
//     }

//     // Save updated cart in localStorage
//     localStorage.setItem('cart', JSON.stringify(cartItems));

//     console.log('Product added to cart:', product);
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold mb-6 text-center">All Products</h1>
      
//       {/* Products Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div key={product._id} className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
//             <h2 className="font-semibold text-lg mb-2">{product.name}</h2>
//             {product.image && (
//               <Image
//                 src={urlFor(product.image).url()}
//                 alt={product.name}
//                 width={200}
//                 height={200}
//                 className="h-40 object-cover rounded-md"
//               />
//             )}
//             <p className="mt-2 font-medium text-gray-700">${product.price}</p>

//             {/* Add to Cart Button */}
//             <button
//               onClick={() => handleAddToCart(product)} // Add the product to the cart
//               className="mt-4 bg-[#2A254B] text-white px-4 py-2 rounded-md transition"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CollectionPage;




