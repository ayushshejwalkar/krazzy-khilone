export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-[150px]" />

      <div className="relative z-10 text-center px-4">
        <p className="mb-4 text-orange-400 uppercase tracking-[4px]">
          Anime • Hot Wheels • K-Pop • Collectibles
        </p>

        <h1 className="text-5xl font-black md:text-8xl">
          COLLECT YOUR
          <br />
          <span className="text-orange-500">
            FAVORITE WORLD
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          Discover anime figures, die-cast models, Hot Wheels,
          K-Pop merchandise, return gifts and school accessories.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-xl bg-orange-500 px-8 py-3 font-bold hover:bg-orange-600 transition">
            Shop Now
          </button>

          <button className="rounded-xl border border-slate-700 px-8 py-3 hover:bg-slate-900 transition">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}