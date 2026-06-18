import { products } from "@/data/product";
import Image from "next/image";
import Link from "next/link";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
subsets: ["latin"],
});

export default async function CategoryPage({
params,
}: {
params: Promise<{ slug: string }>;
}) {
const { slug } = await params;

const categoryProducts = products.filter(
(product) =>
product.category.toLowerCase().replace(/\s+/g, "") ===
slug.toLowerCase()
);

return ( <main className="min-h-screen bg-gray-50"> <div className="mx-auto max-w-7xl px-6 py-12">

    {/* Brand Header */}
    <div className="mb-12 text-center">
      <Link
        href="/"
         className={`${orbitron.className} inline-block text-5xl font-black tracking-widest transition hover:scale-105 md:text-7xl`}
>
          <span className="text-black">KRAZZY</span>
          <span className="text-orange-500"> KHILONE</span>
      </Link>

      <p className="mt-4 uppercase tracking-[6px] text-orange-500">
        Premium Collectibles Store
      </p>
    </div>

    {/* Hero Banner */}
    <div className="mb-12 overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 p-10 text-white shadow-xl">
      <h2 className="text-4xl font-black uppercase md:text-6xl">
        {slug.replace("-", " ")} Collection
      </h2>

      <p className="mt-4 max-w-2xl text-lg text-orange-100">
        Discover premium collectibles, limited editions, hotwheels, die cast cars, anime figures and exclusive merchandise.
      </p>
    </div>

    {/* Stats */}
    <div className="mb-12 grid gap-6 md:grid-cols-3">
      <div className="rounded-2xl bg-white p-6 text-center shadow-md">
        <h3 className="text-4xl font-black text-orange-500">
          {categoryProducts.length}
        </h3>
        <p className="mt-2 text-gray-500">
          Products Available
        </p>
      </div>

      <div className="rounded-2xl bg-white p-6 text-center shadow-md">
        <h3 className="text-4xl font-black text-orange-500">
          100%
        </h3>
        <p className="mt-2 text-gray-500">
          Authentic Products
        </p>
      </div>

      <div className="rounded-2xl bg-white p-6 text-center shadow-md">
        <h3 className="text-4xl font-black text-orange-500">
          24/7
        </h3>
        <p className="mt-2 text-gray-500">
          Customer Support
        </p>
      </div>
    </div>

    {/* Product Grid */}
    {categoryProducts.length === 0 ? (
      <div className="rounded-3xl bg-white p-12 text-center shadow-md">
        <h2 className="text-3xl font-bold">
          No products found
        </h2>

        <p className="mt-3 text-gray-500">
          Products for this category will be added soon.
        </p>
      </div>
    ) : (
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {categoryProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
          >
            <div className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">

              <div className="relative h-72 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute left-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
                  NEW
                </div>
              </div>

              <div className="p-5">
                <h3 className="min-h-[60px] text-lg font-bold text-gray-900">
                  {product.name}
                </h3>

                <p className="mt-3 text-3xl font-black text-orange-500">
                  ₹{product.price}
                </p>

                <button className="mt-4 w-full rounded-xl border-2 border-orange-500 py-3 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white">
                  View Product
                </button>
              </div>

            </div>
          </Link>
        ))}
      </div>
    )}
  </div>
</main>

);
}