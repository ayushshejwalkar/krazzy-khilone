import Link from "next/link";

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-white p-10">
      <h1 className="mb-10 text-4xl font-black text-black">
        Admin Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-3">

        <Link
          href="/admin/products"
          className="rounded-3xl border border-orange-200 p-8 shadow-sm transition hover:border-orange-500"
        >
          <h2 className="text-2xl font-bold">
            📦 Products
          </h2>

          <p className="mt-2 text-gray-500">
            Add, edit and delete products
          </p>
        </Link>

        <Link
          href="/admin/events"
          className="rounded-3xl border border-orange-200 p-8 shadow-sm transition hover:border-orange-500"
        >
          <h2 className="text-2xl font-bold">
            🎉 Events
          </h2>

          <p className="mt-2 text-gray-500">
            Manage upcoming events
          </p>
        </Link>

        <Link
          href="/admin/offers"
          className="rounded-3xl border border-orange-200 p-8 shadow-sm transition hover:border-orange-500"
        >
          <h2 className="text-2xl font-bold">
            🏷️ Offers
          </h2>

          <p className="mt-2 text-gray-500">
            Manage discounts and offers
          </p>
        </Link>

      </div>
    </main>
  );
}