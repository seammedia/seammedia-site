export default function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center text-white overflow-hidden pb-20 lg:pb-32">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-8 lg:px-16 w-full">
        <div className="max-w-3xl pl-4 lg:pl-8">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 drop-shadow-lg text-white">
            We Build
            <br />
            Brands.
          </h1>

          <div className="space-y-6">
            <p className="text-xl lg:text-2xl drop-shadow-md text-white">
              We not only create brands, we use data to ensure we get results.
              <br />
              Every, single, time.
            </p>

            <p className="text-lg lg:text-xl drop-shadow-md text-white">
              A digital marketing agency with a difference, working with start ups,
              <br />
              small business and large national businesses.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-8 h-8 bg-[#f5d45d] rounded-sm opacity-80 hidden lg:block" />
      <div className="absolute bottom-32 left-20 w-6 h-6 bg-[#b5a5d5] rounded-sm opacity-80 hidden lg:block" />
    </section>
  );
}
