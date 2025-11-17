export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

      {/* Gradient Overlay - Top to Bottom (Black 70% to Transparent) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/30" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-12 w-full py-32 lg:py-40">
        <div className="max-w-4xl">
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            We Build
            <br />
            Brands.
          </h1>

          {/* Subtext */}
          <div className="space-y-6 max-w-2xl">
            <p className="text-lg md:text-xl text-white leading-relaxed">
              We not only create brands, we use data to ensure we get results.
              <br className="hidden md:block" />
              Every, single, time.
            </p>

            <p className="text-base md:text-lg text-white/90 leading-relaxed">
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
