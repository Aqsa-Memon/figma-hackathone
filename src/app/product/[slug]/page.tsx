"use client";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { addToCart } from "@/app/actions/actions";

interface ProductsPageProps {
  params: { slug: string }; // ✅ FIXED: Promise hata diya
}

const handleAddToCart = (e: React.MouseEvent, product: Product) => {
  e.preventDefault();
  Swal.fire({
    position: "top-right",
    icon: "success",
    title: `${product.name} added to cart`,
    showConfirmButton: false,
    timer: 1000,
  });
  addToCart(product);
};

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      slug,
      "category": category->title,
      image,
      price,
      quantity,
      tags,
      description,
      features,
      dimensions
    }`,
    { slug }
  );
}

export default async function ProductsPage({ params }: ProductsPageProps) {
  const { slug } = params; // ✅ FIXED: Await hata diya
  const product = await getProduct(slug);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative ml-auto">
          {product?.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={450}
              height={250}
              className="rounded-lg shadow-xl object-cover transform hover:scale-105 transition-transform duration-300"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-6">
          {/* Custom Badge */}
          <span className="text-lg bg-blue-500 text-white w-fit px-4 py-2 rounded-full">
            {product.category}
          </span>

          <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>

          <p className="text-2xl font-semibold text-green-600">${product.price}</p>

          <p className="text-lg text-gray-600">{product.description}</p>

          {/* Features List */}
          {product.features && Array.isArray(product.features) && (
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {product.features.map((feature, index) => (
                <li key={index} className="text-base font-medium">
                  ✅ {String(feature)}
                </li>
              ))}
            </ul>
          )}

          {/* Dimensions */}
          {product.dimensions && typeof product.dimensions === "object" && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Dimensions:</h3>
              <p className="text-gray-700">
                {product.dimensions?.height} x {product.dimensions?.width} x {product.dimensions?.depth}
              </p>
            </div>
          )}

          {/* Custom Button */}
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg transition-all duration-300"
            onClick={(e) => handleAddToCart(e, product)}
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
