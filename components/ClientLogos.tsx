import Section from "./ui/Section";

export default function ClientLogos() {
  // These are placeholder names - replace with actual client logo images
  const clients = [
    { name: "Youfoodz", logo: "/images/clients/youfoodz.png" },
    { name: "Coles", logo: "/images/clients/coles.png" },
    { name: "Fujifilm", logo: "/images/clients/fujifilm.png" },
    { name: "Daniel Wellington", logo: "/images/clients/daniel-wellington.png" },
    { name: "Vitasoy", logo: "/images/clients/vitasoy.png" },
    { name: "Rydges", logo: "/images/clients/rydges.png" },
    { name: "Taubmans", logo: "/images/clients/taubmans.png" },
    { name: "First Press Coffee", logo: "/images/clients/first-press.png" },
    { name: "The Atlantic", logo: "/images/clients/atlantic.png" },
    { name: "PT Leo Estate", logo: "/images/clients/pt-leo.png" },
    { name: "Tattoo Skull", logo: "/images/clients/tattoo-skull.png" },
    { name: "Grilla", logo: "/images/clients/grilla.png" },
    { name: "Pullman", logo: "/images/clients/pullman.png" },
    { name: "Grange Roc", logo: "/images/clients/grange-roc.png" },
    { name: "Stone & Wood", logo: "/images/clients/stone-wood.png" },
  ];

  return (
    <Section background="white">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Our clients.
        </h2>
        <p className="text-lg text-gray-600">
          Driving technology for leading brands
        </p>
      </div>

      {/* Logos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
          >
            {/* Placeholder - Replace with actual logo images */}
            <div className="text-center">
              <div className="w-32 h-20 bg-gray-200 rounded flex items-center justify-center mb-2">
                {/* This is a placeholder. Add actual logo images to public/images/clients/ */}
                <span className="text-xs text-gray-500">Logo</span>
              </div>
              <p className="text-sm font-medium text-gray-700">{client.name}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
