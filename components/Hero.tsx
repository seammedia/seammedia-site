export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Strong Gradient Overlay for Text Visibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />

      {/* Content Container */}
      <div className="relative z-20 mx-auto max-w-7xl w-full pt-40 pb-32">
        <div className="max-w-3xl px-6 md:pl-12 lg:pl-12">
          {/* Headline - Pure White */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            We Build
            <br />
            Brands.
          </h1>

          {/* Subtext - Pure White */}
          <div className="space-y-6 max-w-2xl mt-6">
            <p className="text-lg text-white/90 leading-relaxed">
              We not only create brands, we use data to ensure we get results.
              <br className="hidden md:block" />
              Every, single, time.
            </p>

            <p className="text-lg text-white/90 leading-relaxed">
              A digital marketing agency with a difference, working with start ups,
              <br className="hidden md:block" />
              small business and large national businesses.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-24 right-10 w-8 h-8 bg-[#f5d45d] rounded-sm opacity-80 hidden lg:block z-10" />
      <div className="absolute bottom-40 left-20 w-6 h-6 bg-[#b5a5d5] rounded-sm opacity-80 hidden lg:block z-10" />
    </section>
  );
}
