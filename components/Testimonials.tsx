import Section from "./ui/Section";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "The team at Seam Media were fantastic to deal with. They helped my business with SEO and went above and beyond to get us excellent results!",
      author: "Stewart H",
    },
    {
      quote:
        "My partner and I have recently endeavored into starting up our own family business. My partner has recently become a sole trader for cabinetmaking/handyman services. Seam Media have been so helpful and have honestly helped so much with getting us on our feet. They have steered us in the right direction and given us so much information to ensure we will be successful! I honestly just want to say thank you for helping our small family business!",
      author: "Leiarnah M",
    },
  ];

  // Decorative squares for visual interest
  const decorativeSquares: Array<{
    color: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    size: string;
  }> = [
    { color: "#f5b5b5", top: "10%", left: "5%", size: "w-4 h-4" },
    { color: "#f5d45d", top: "15%", left: "10%", size: "w-5 h-5" },
    { color: "#b5a5d5", bottom: "15%", left: "8%", size: "w-6 h-6" },
    { color: "#f5b5b5", bottom: "20%", right: "10%", size: "w-5 h-5" },
    { color: "#f5d45d", top: "12%", right: "15%", size: "w-4 h-4" },
    { color: "#5865f2", top: "25%", right: "8%", size: "w-6 h-6" },
  ];

  return (
    <Section background="white">
      <div className="relative">
        {/* Decorative Squares */}
        {decorativeSquares.map((square, index) => (
          <div
            key={index}
            className={`absolute ${square.size} rounded-sm opacity-60 hidden lg:block`}
            style={{
              backgroundColor: square.color,
              ...(square.top && { top: square.top }),
              ...(square.bottom && { bottom: square.bottom }),
              ...(square.left && { left: square.left }),
              ...(square.right && { right: square.right }),
            }}
          />
        ))}

        {/* Featured Quote */}
        <div className="text-center mb-16 max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            "Seam Media Have Been So Helpful And Have Honestly Helped So Much
            With Getting Us On Our Feet. !"
          </h2>
        </div>

        {/* Section Title */}
        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center relative z-10">
          What our clients say.
        </h3>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-sm relative"
            >
              {/* Quote Icon */}
              <div className="text-6xl text-gray-300 mb-4 font-serif">"</div>

              {/* Quote Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.quote}
              </p>

              {/* Author */}
              <p className="font-bold text-gray-900">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
