import Link from "next/link";
import { Orbitron } from "next/font/google";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  ChevronDown,
} from "lucide-react";

const orbitron = Orbitron({
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/">
          <h1
            className={`${orbitron.className} cursor-pointer text-3xl font-black tracking-widest`}
          >
            <span className="text-black">KRAZZY</span>
            <span className="text-orange-500"> KHILONE</span>
          </h1>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="font-medium text-gray-700 transition hover:text-orange-500"
          >
            Home
          </Link>

          <Link
            href="/Events"
            className="font-medium text-gray-700 transition hover:text-orange-500"
          >
            Events
          </Link>

          <div className="group relative">
            <button className="flex items-center gap-1 font-medium text-gray-700 transition hover:text-orange-500">
              Categories
              <ChevronDown size={16} />
            </button>

            <div className="absolute left-0 top-full hidden w-56 rounded-xl border border-gray-200 bg-white py-2 shadow-xl group-hover:block">

              <Link
                href="/categories/anime"
                className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500"
              >
                Anime Figures
              </Link>

              <Link
                href="/categories/hotwheels"
                className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500"
              >
                Hot Wheels
              </Link>

              <Link
                href="/categories/diecast"
                className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500"
              >
                Die-Cast Models
              </Link>

              <Link
                href="/categories/kpop"
                className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500"
              >
                K-Pop
              </Link>

              <Link
                href="/categories/return-gifts"
                className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500"
              >
                Return Gifts
              </Link>

              <Link
                href="/categories/school-accessories"
                className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500"
              >
                School Accessories
              </Link>

            </div>
          </div>

          <div className="group relative">
            <button className="font-medium text-gray-700 transition hover:text-orange-500">
              Contact
            </button>

            <div className="absolute right-0 top-full hidden w-80 rounded-2xl border border-gray-200 bg-white p-5 shadow-xl group-hover:block">

              <h3 className="mb-3 text-lg font-bold text-orange-500">
                Krazzy Khilone
              </h3>

              <div className="space-y-3 text-sm text-gray-700">

                <p>
                  📍 Shop No. XX, Kalamboli,
                  Navi Mumbai, Maharashtra
                </p>

                <p>
                  📞 +91 XXXXX XXXXX
                </p>

                <p>
                  ✉️ contact@krazzykhilone.com
                </p>

                <p>
                  🕒 Mon - Sun: 10:00 AM - 9:00 PM
                </p>

              </div>

              <div className="mt-4 border-t pt-4">

                <Link
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  className="block rounded-xl bg-green-500 py-2 text-center font-semibold text-white transition hover:bg-green-600"
                >
                  WhatsApp Us
                </Link>

              </div>

            </div>
          </div>
        </div>

        {/* Search + Icons */}
        <div className="flex items-center gap-4">

          {/* Search Bar */}
          <div className="hidden items-center rounded-xl border border-gray-300 px-3 py-2 md:flex">
            <Search size={18} className="text-gray-500" />

            <input
              type="text"
              placeholder="Search products..."
              className="ml-2 w-44 bg-transparent text-sm outline-none"
            />
          </div>

          {/* Wishlist */}
          <button className="transition hover:text-orange-500">
            <Heart />
          </button>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative cursor-pointer transition hover:text-orange-500"
          >
            <ShoppingCart />

            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
              0
            </span>
          </Link>

          {/* User */}
          <Link
            href="/login"
            className="transition hover:text-orange-500"
          >
            <User />
          </Link>

        </div>
      </div>
    </nav>
  );
}