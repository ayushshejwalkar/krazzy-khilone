export default function Footer() {
return ( <footer className="mt-20 bg-black text-white">

  {/* Main Footer */}
  <div className="mx-auto max-w-7xl px-6 py-6 text-center">

    <h2 className="text-4xl font-black">
      <span className="text-white">KRAZZY</span>
      <span className="text-orange-500"> KHILONE</span>
    </h2>

    <p className="mt-4 max-w-2xl text-gray-400 text-center mx-auto">
      Your destination for Anime Figures, Hot Wheels,
      Die-Cast Models, K-Pop Merchandise, Return Gifts
      and School Accessories.
    </p>

    <div className="mt-10 grid gap-8 md:grid-cols-3">

    </div>

    <div className="mt-10 border-t border-white/10 pt-4 text-center text-sm text-gray-500">
      © 2026 Krazzy Khilone. All Rights Reserved.
    </div>
  </div>

  {/* Moving Disclaimer Strip */}
  <div className="overflow-hidden bg-orange-500 py-3">
    <div className="animate-ticker whitespace-nowrap text-sm font-medium text-white">
      KrazzyKhilone is an independent retailer of fan merchandise. We are not affiliated with, endorsed by, or officially connected with Warner Bros., Disney, Marvel, Nintendo, Shueisha, or any other brand owners. All product names are used for identification purposes only.
      &nbsp;&nbsp;&nbsp;&nbsp;
      KrazzyKhilone is an independent retailer of fan merchandise. We are not affiliated with, endorsed by, or officially connected with Warner Bros., Disney, Marvel, Nintendo, Shueisha, or any other brand owners. All product names are used for identification purposes only.
    </div>
  </div>

</footer>

);
}
