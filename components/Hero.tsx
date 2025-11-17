import Link from "next/link";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image - Replace with actual ocean image */}
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
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
          We Build
          <br />
          Brands.
        </h1>

        <div className="max-w-2xl mx-auto space-y-6 mb-8">
          <p className="text-xl lg:text-2xl drop-shadow-md">
            We not only create brands, we use data to ensure we get results. Every, single, time.
          </p>

          <p className="text-lg lg:text-xl drop-shadow-md">
            A digital marketing agency with a difference, working with start ups, small business and large national businesses.
          </p>
        </div>

        <Link href="/contact">
          <Button size="lg" className="shadow-lg hover:shadow-xl">
            Get Started
          </Button>
        </Link>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-8 h-8 bg-[#f5d45d] rounded-sm opacity-80 hidden lg:block" />
      <div className="absolute bottom-32 left-20 w-6 h-6 bg-[#b5a5d5] rounded-sm opacity-80 hidden lg:block" />
    </section>
  );
}
