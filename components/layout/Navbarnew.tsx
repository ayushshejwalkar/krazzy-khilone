import { Orbitron } from "next/font/google";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
} from "lucide-react";

const orbitron = Orbitron({
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <h1
          className={`${orbitron.className} text-2xl font-bold tracking-wider`}
        >
          <span className="text-white">KRAZZY</span>
          <span className="text-orange-500"> KHILONE</span>
        </h1>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="transition hover:text-orange-500">
            Home
          </a>
          <a href="#" className="transition hover:text-orange-500">
            Shop
          </a>
          <a href="#" className="transition hover:text-orange-500">
            Categories
          </a>
          <a href="#" className="transition hover:text-orange-500">
            Contact
          </a>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <Search className="cursor-pointer transition hover:text-orange-500" />
          <Heart className="cursor-pointer transition hover:text-orange-500" />
          <ShoppingCart className="cursor-pointer transition hover:text-orange-500" />
          <User className="cursor-pointer transition hover:text-orange-500" />
        </div>
      </div>
    </nav>
  );
}