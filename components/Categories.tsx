import Image from "next/image";

const categories = [
  {
    name: "Anime Figures",
    image: "/images/anime.jpg",
  },
  {
    name: "Hot Wheels",
    image: "/images/hotwheels.png",
  },
  {
    name: "Die-Cast Models",
    image: "/images/diecast.png",
  },
  {
    name: "K-Pop",
    image: "/images/kpop.png",
  },
  {
    name: "Return Gifts",
    image: "/images/returngifts.png",
  },
  {
    name: "School Accessories",
    image: "/images/school.png",
  },
];

export default function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16 text-center">
        <h2 className="text-5xl font-black">
          Shop By Category
        </h2>

        <p className="mt-4 text-lg text-slate-400">
          Explore our most popular collections
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.name}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-orange-500"
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
              <h3 className="text-2xl font-bold">
                {category.name}
              </h3>

              <p className="mt-2 text-slate-400">
                Discover premium collectibles and merchandise.
              </p>

              <button className="mt-5 rounded-lg bg-orange-500 px-5 py-2 font-semibold transition hover:bg-orange-600">
                Explore Collection
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}