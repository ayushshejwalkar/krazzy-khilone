import Link from "next/link";
import Image from "next/image";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
subsets: ["latin"],
});

const categories = [
{
name: "Anime Figures",
image: "/images/anime.jpg",
slug: "anime",
},
{
name: "Hot Wheels",
image: "/images/hotwheels.png",
slug: "hotwheels",
},
{
name: "Die-Cast Models",
image: "/images/diecast.png",
slug: "diecast",
},
{
name: "K-Pop",
image: "/images/kpop.png",
slug: "kpop",
},
{
name: "Return Gifts",
image: "/images/returngifts.png",
slug: "return-gifts",
},
{
name: "School Accessories",
image: "/images/school.png",
slug: "school",
},
];

export default function Categories() {
return ( <section className="mx-auto max-w-7xl px-6 py-24"> <div className="mb-16 text-center">
<h2
className={`${orbitron.className} text-5xl font-black tracking-wider`}
>
Shop By Category </h2>

    <p className="mt-4 text-lg text-slate-500">
      Explore our most popular collections
    </p>
  </div>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {categories.map((category) => (
      <Link
        key={category.name}
        href={`/categories/${category.slug}`}
        className="group block overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl"
      >
        <div className="relative h-64 overflow-hidden">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>

        <div className="p-6">
          <h3
            className={`${orbitron.className} text-2xl font-bold tracking-wide`}
          >
            {category.name}
          </h3>

          <p className="mt-2 text-slate-500">
            Discover premium collectibles and merchandise.
          </p>

          <button className="mt-5 rounded-lg border-2 border-orange-500 px-5 py-2 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white">
            Explore Collection
          </button>
        </div>
      </Link>
    ))}
  </div>
</section>

);
}
