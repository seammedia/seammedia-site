import Section from "./ui/Section";

export default function WhyChooseUs() {
  const features = [
    "Marketing With A Difference.",
    "Available 24/7, We're Here For You!",
    "No Contracts.",
    "A Small Team You Can Trust.",
  ];

  // Decorative squares positioned around the content
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
    { color: "#b5a5d5", bottom: "20%", left: "8%", size: "w-6 h-6" },
    { color: "#f5b5b5", bottom: "25%", right: "12%", size: "w-4 h-4" },
    { color: "#f5d45d", top: "8%", right: "15%", size: "w-8 h-8" },
    { color: "#5865f2", top: "30%", right: "5%", size: "w-5 h-5" },
  ];

  return (
    <Section background="pink">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
        {/* Decorative Squares */}
        {decorativeSquares.map((square, index) => (
          <div
            key={index}
            className={`absolute ${square.size} rounded-sm opacity-70 hidden lg:block`}
            style={{
              backgroundColor: square.color,
              ...(square.top && { top: square.top }),
              ...(square.bottom && { bottom: square.bottom }),
              ...(square.left && { left: square.left }),
              ...(square.right && { right: square.right }),
            }}
          />
        ))}

        {/* Left: Image */}
        <div className="relative z-10">
          <img
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80"
            alt="Strategic planning workspace"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Right: Features List */}
        <div className="space-y-8 relative z-10">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-5">
              <div className="flex-shrink-0 mt-1">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-xl lg:text-2xl font-medium text-white">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
