"use client";

import Section from "./ui/Section";

export default function AudioQuote() {
  return (
    <Section background="white">
      <div className="max-w-5xl mx-auto">
        {/* Card Container */}
        <div className="relative bg-[#111111] border border-[#2a2a2a] rounded-3xl px-10 py-16 md:px-16 md:py-20 shadow-2xl overflow-hidden">
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
              <span className="text-[#00f0ff] text-5xl font-serif leading-none">"</span>
              <span className="text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed bg-gradient-to-br from-white to-[#a5f3fc] bg-clip-text text-transparent">
                Seam Media Have Been So Helpful And Have Honestly Helped So Much With Getting Us On Our Feet. !
              </span>
              <span className="text-[#00f0ff] text-5xl font-serif leading-none">"</span>
            </div>

            {/* Tech Footer */}
            <div className="flex items-center gap-3 font-mono text-[10px] text-[#005f6b] tracking-widest uppercase">
              <span className="w-1.5 h-1.5 bg-[#00f0ff] rounded-full shadow-[0_0_8px_#00f0ff]" />
              <span>Margison</span>
              <span className="text-[#00f0ff]">|</span>
              <span>Google Reviews</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% {
            transform: scaleY(1);
            opacity: 0.5;
          }
          50% {
            transform: scaleY(1.8);
            opacity: 1;
            background: linear-gradient(to top, #00f0ff, #00c2d1);
          }
        }

        .animate-wave {
          animation: wave 1s ease-in-out infinite;
        }
      `}</style>
    </Section>
  );
}
