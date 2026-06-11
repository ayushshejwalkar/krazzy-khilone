"use client";

import { useState } from "react";
import { products } from "@/data/product";
import Image from "next/image";

export default function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const [quantity, setQuantity] = useState(1);

  const product = products.find(
    (item) => item.id === params.id
  );

  if (!product) {
    return (
      <div className="min-h-screen bg-white p-10 text-black">
        Product not found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">

          {/* Product Image */}
          <div className="relative h-[500px] overflow-hidden rounded-3xl">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Product Info */}
          <div>
            <span className="rounded-full bg-orange-500 px-4 py-2 text-sm font-bold">
              {product.category}
            </span>

            <h1 className="mt-6 text-5xl font-black">
              {product.name}
            </h1>

            <p className="mt-4 text-3xl font-black text-orange-500">
              ₹{product.price}
            </p>

            <p className="mt-6 text-gray-600">
              {product.description}
            </p>

            {/* Quantity Selector */}
            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={() =>
                  setQuantity((prev) => Math.max(1, prev - 1))
                }
                className="h-12 w-12 rounded-xl bg-slate-800 text-2xl font-bold hover:bg-slate-700"
              >
                -
              </button>
              <div className="flex h-12 w-16 items-center justify-center rounded-xl border border-gray-300 text-xl font-bold">
                {quantity}
              </div>

              <button
                onClick={() =>
                  setQuantity((prev) => prev + 1)
                }
                className="h-12 w-12 rounded-xl bg-gray-100 text-2xl font-bold hover:bg-gray-200"
              >
                +
              </button>
            </div>

            {/* Add To Cart */}
            <button className="mt-6 rounded-xl bg-orange-500 px-8 py-4 font-bold transition hover:bg-orange-600">
              Add {quantity} To Cart
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}