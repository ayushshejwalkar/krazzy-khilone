import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/product";

export default function FeaturedProducts() {
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
            href={`/products/${product.id}`}
            key={product.id}
            className="group block overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500"
          >
            <div className="relative h-64">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <span className="absolute left-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-sm font-bold">
                {product.category}
              </span>
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold">
                {product.name}
              </h3>

              <p className="mt-2 text-2xl font-black text-orange-500">
                ₹{product.price}
              </p>

              <button className="mt-4 w-full rounded-xl bg-orange-500 py-3 font-semibold transition hover:bg-orange-600">
                View Product
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}