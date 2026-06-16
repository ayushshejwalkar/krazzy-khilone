import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function CartPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-5xl">

        <div className="rounded-3xl bg-white p-12 shadow-sm">

          <div className="flex flex-col items-center text-center">

            <div className="mb-6 rounded-full bg-orange-100 p-8">
              <ShoppingCart
                size={80}
                className="text-orange-500"
              />
            </div>

            <h1 className="text-4xl font-black">
              Your Cart is Empty
            </h1>

            <p className="mt-4 max-w-md text-gray-500">
              Looks like you haven't added any collectibles,
              Hot Wheels, anime figures or gifts yet.
            </p>

            <div className="mt-8 flex gap-4">

              <Link
                href="/"
                className="rounded-xl bg-orange-500 px-8 py-3 font-bold text-white transition hover:bg-orange-600"
              >
                Continue Shopping
              </Link>

              <Link
                href="/login"
                className="rounded-xl border border-gray-300 px-8 py-3 font-bold transition hover:bg-gray-100"
              >
                Login
              </Link>

            </div>

          </div>
        </div>

        {/* Recommended Categories */}
        <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">

          <h2 className="mb-6 text-2xl font-black">
            Popular Categories
          </h2>

          <div className="grid gap-4 md:grid-cols-4">

            <div className="rounded-xl border p-5 text-center font-semibold">
              Anime Figures
            </div>

            <div className="rounded-xl border p-5 text-center font-semibold">
              Hot Wheels
            </div>

            <div className="rounded-xl border p-5 text-center font-semibold">
              K-Pop
            </div>

            <div className="rounded-xl border p-5 text-center font-semibold">
              Die-Cast Models
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}