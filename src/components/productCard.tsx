'use client';

import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

type ProductCardProps = {
  product: {
    _id: string;
    name: string;
    price: number;
    image: SanityImageSource; // ✅ Corrected Type
  };
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
      <h2 className="font-semibold text-lg mb-2">{product.name}</h2>
      {product.image && (
        <Image
          src={urlFor(product.image).url()}
          alt={product.name}
          width={200}
          height={200}
          className="h-40 object-cover rounded-md"
        />
      )}
      <p className="mt-2 font-medium text-gray-700">${product.price}</p>
    </div>
  );
};

export default ProductCard;
