import Navbar from "@/components/layout/Navbarnew";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/product/featuredproducts";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
    </main>
  );
}