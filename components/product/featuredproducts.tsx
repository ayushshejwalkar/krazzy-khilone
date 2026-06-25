"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  description?: string;
  featured: boolean;
  images: {
    imageUrl: string;
  }[];
};

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");

        const data = await res.json();

        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("API Error:", data);
          setProducts([]);
        }

      } catch (error) {
        console.error("Fetch error:", error);
        setProducts([]);
      }
    }

    fetchProducts();
  }, []);


  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <div className="mb-12 text-center">
        <h2 className="text-5xl font-black">
          Featured Products
        </h2>

        <p className="mt-4 text-slate-400">
          Fan favorites and best sellers
        </p>
      </div>


      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {products.map((product) => (

          <Link
            href={`/products/${product.slug}`}
            key={product.id}
            className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-orange-500"
          >


            <div className="relative h-64">

              {product.images.length > 0 ? (

                <Image
                  src={product.images[0].imageUrl}
                  alt={product.name}
                  fill
                  sizes="(max-width:768px) 100vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

              ) : (

                <div className="flex h-full items-center justify-center bg-gray-100 text-gray-400">
                  No Image
                </div>

              )}

            </div>


            <div className="p-5">

              <h3 className="text-lg font-bold text-black">
                {product.name}
              </h3>


              <p className="mt-2 text-2xl font-black text-orange-500">
                ₹{product.price}
              </p>


              <button
                className="mt-4 w-full rounded-xl bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600"
              >
                View Product
              </button>

            </div>


          </Link>

        ))}


        {products.length === 0 && (
          <p className="col-span-4 text-center text-gray-500">
            No products available
          </p>
        )}


      </div>

    </section>
  );
}