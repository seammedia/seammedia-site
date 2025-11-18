"use client";

import Section from "./ui/Section";
import Image from "next/image";

export default function ClientLogos() {
  const clients = [
    { name: "Atlantic", logo: "/images/atlantic_logo_ocean_to_plate-1024x137.png" },
    { name: "Coles", logo: "/images/coles.png" },
    { name: "First Press Coffee", logo: "/images/D0xwK-wH_400x400_black.png" },
    { name: "Daniel Wellington", logo: "/images/daniel-wellington-logo_black.png" },
    { name: "Fujifilm", logo: "/images/fujifilm-logo-black-1024x1024.png" },
    { name: "Grange", logo: "/images/Grangeblack.png" },
    { name: "Grilld", logo: "/images/GRILLD-LOGO-CIRCLE-HEALTHYBURGERS-Black_360x80.jpg" },
    { name: "PT Leo Estate", logo: "/images/pt_leo_estate_black-1.png" },
    { name: "Pullman", logo: "/images/pullman.png" },
    { name: "Rydges", logo: "/images/rydges11_black-1024x1024.png" },
    { name: "Taubmans", logo: "/images/Taubmans_Master_GREY_for-web.png" },
    { name: "Tommy Ruff", logo: "/images/Tommy-Ruff-Logo-Black.png" },
    { name: "Vitasoy", logo: "/images/Vitasoy-logoblack-1024x311.png" },
    { name: "Youfoodz", logo: "/images/youfoodz.png" },
  ];

  // Split clients into two rows
  const row1 = clients.slice(0, 7);
  const row2 = clients.slice(7);

  return (
    <Section background="white">
      <section className="text-center mb-16">
        <h2 className="text-[44px] font-bold text-gray-900 mb-8" style={{ letterSpacing: '-0.5px' }}>
          Some of{' '}
          <span className="relative inline-block px-3">
            <span className="relative z-10">our clients</span>
            <span
              className="absolute inset-0 -inset-x-2 top-[40%] h-[60%] rounded-sm opacity-80"
              style={{ backgroundColor: '#5e7986' }}
            ></span>
          </span>
        </h2>
        <p className="text-base font-normal" style={{ color: '#555' }}>
          Driving technology for leading brands
        </p>
      </section>

      {/* Scrolling Logo Marquee */}
      <div className="relative overflow-hidden">
        {/* Row 1 - Scrolling Left */}
        <div className="flex mb-8 overflow-hidden">
          <div className="flex animate-scroll-left hover:pause-animation">
            {/* First set of logos */}
            {row1.map((client, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 mx-8 w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160}
                  height={96}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {row1.map((client, index) => (
              <div
                key={`row1-dup-${index}`}
                className="flex-shrink-0 mx-8 w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160}
                  height={96}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Scrolling Right */}
        <div className="flex overflow-hidden">
          <div className="flex animate-scroll-right hover:pause-animation">
            {/* First set of logos */}
            {row2.map((client, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 mx-8 w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160}
                  height={96}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {row2.map((client, index) => (
              <div
                key={`row2-dup-${index}`}
                className="flex-shrink-0 mx-8 w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160}
                  height={96}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </Section>
  );
}
