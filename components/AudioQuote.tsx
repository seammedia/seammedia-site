import DarkSection from "./home/DarkSection";

export default function AudioQuote() {
  return (
    <DarkSection glow="centre" className="border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* Card Container */}
        <div className="relative bg-[#111111] border border-[#2a2a2a] rounded-3xl px-8 py-14 md:px-16 md:py-20 shadow-[0_0_80px_rgba(0,194,209,0.08)] overflow-hidden">
          {/* Subtle Glow effect */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_rgba(0,240,255,0.03),_transparent_40%)]" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Audio Visualizer */}
            <div className="flex gap-1 h-8 items-center mb-12">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-gradient-to-t from-[#005f6b] to-[#00c2d1] rounded-sm animate-wave"
                  style={{
                    height: `${[10, 15, 20, 12, 25, 18, 22, 14, 10, 15, 20, 12, 25, 18, 10][i]}px`,
                    animationDelay: `${[0, 0.1, 0.2, 0.3, 0.1, 0.4, 0.2, 0, 0.3, 0.1, 0.2, 0.4, 0.1, 0.3, 0][i]}s`,
                  }}
                />
              ))}
            </div>

            {/* Quote */}
            <div className="mb-12">
              <span className="text-[#00f0ff] text-5xl font-serif leading-none">&ldquo;</span>
              <span className="text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed bg-gradient-to-br from-white to-[#a5f3fc] bg-clip-text text-transparent">
                Seam Media have been so helpful and have honestly helped so much with getting us on our feet!
              </span>
              <span className="text-[#00f0ff] text-5xl font-serif leading-none">&rdquo;</span>
            </div>

            {/* Tech Footer */}
            <div className="flex items-center gap-3 font-mono text-[11px] text-[#33aab5] tracking-widest uppercase">
              <span className="w-1.5 h-1.5 bg-[#00f0ff] rounded-full shadow-[0_0_8px_#00f0ff]" />
              <span>Margison</span>
              <span className="text-[#00f0ff]">|</span>
              <span>Google Reviews</span>
            </div>
          </div>
        </div>
      </div>

    </DarkSection>
  );
}
