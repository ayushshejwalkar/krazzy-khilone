"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const banners = [
  {
    image: "/images/anime.jpg",
    title: "ANIME FIGURES",
    // subtitle: "Premium Collectibles & Action Figures",
  },
  {
    image: "/images/hotwheels.png",
    title: "HOT WHEELS",
    // subtitle: "Rare Cars & Collector Editions",
  },
  {
    image: "/images/kpop.png",
    title: "K-POP MERCH",
    // subtitle: "Albums, Photocards & Accessories",
  },
  {
    image: "/images/diecast.png",
    title: "DIE-CAST MODELS",
    // subtitle: "Luxury Cars & Scale Models",
  },
];

export default function Hero() {
  return (
    <section className="w-full">

      {/* Offer Bar */}
      <div className="bg-orange-500 py-3 text-center text-sm font-bold text-white md:text-base">
        🔥 Summer Sale - Up To 30% OFF On Selected Collectibles
      </div>

      {/* Slider */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="h-[500px] md:h-[650px]"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.title}>
            <div className="relative h-full w-full">

              <Image
                src={banner.image}
                alt={banner.title}
                fill
                priority
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">

                {/* <p className="mb-4 text-sm uppercase tracking-[4px] text-orange-400 md:text-lg">
                  KRAZZY KHILONE
                </p> */}

                {/* <div className="mb-4 rounded-full bg-orange-500 px-5 py-2 text-sm font-bold text-white shadow-lg">
                  {banner.badge}
                </div> */}

                <h1 className="bg-gradient-to-r from-white via-orange-200 to-orange-500 bg-clip-text text-5xl font-black text-transparent drop-shadow-2xl md:text-8xl">
                  {banner.title}
                </h1>

                {/* <p className="mt-4 text-lg font-medium text-white/90 md:text-2xl">
                  {banner.subtitle}
                </p> */}

                {/* <p className="mt-4 max-w-2xl text-lg md:text-2xl">
                  {banner.subtitle}
                </p> */}

                <div className="mt-8 flex flex-wrap justify-center gap-4">

                  <button className="rounded-xl border-2 border-orange-500 px-8 py-4 font-bold text-orange-500 transition hover:bg-orange-500 hover:text-white">
                    Shop Now
                  </button>

                  {/* <button className="rounded-xl border border-white px-8 py-4 font-bold transition hover:bg-white hover:text-black">
                    Explore
                  </button> */}

                </div>

                {/* Stats */}
                <div className="mt-12 grid grid-cols-3 gap-8 md:gap-20">
                  {/* 
                  <div>
                    <h3 className="text-3xl font-black text-orange-400">
                      500+
                    </h3>
                    <p>Products</p>
                  </div> */}
                  {/* 
                  <div>
                    <h3 className="text-3xl font-black text-orange-400">
                      1000+
                    </h3>
                    <p>Customers</p>
                  </div> */}
                  {/* 
                  <div>
                    <h3 className="text-3xl font-black text-orange-400">
                      4.9★
                    </h3>
                    <p>Rating</p>
                  </div> */}

                </div>

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}