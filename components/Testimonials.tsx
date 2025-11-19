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

  return (
    <div className="w-full bg-[#5e7986] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Featured Quote */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
            "Seam Media Have Been So Helpful And Have Honestly Helped So Much
            With Getting Us On Our Feet. !"
          </h2>
        </div>

        {/* Section Title */}
        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-16 text-center">
          What our clients say.
        </h3>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-10 rounded-lg shadow-sm relative border border-white/20"
            >
              {/* Quote Icon */}
              <div className="text-6xl text-white/30 mb-6 font-serif">"</div>

              {/* Quote Text */}
              <p className="text-white mb-8 leading-relaxed">
                {testimonial.quote}
              </p>

              {/* Author */}
              <p className="font-bold text-white">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
