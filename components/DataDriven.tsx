import Section from "./ui/Section";

export default function DataDriven() {
  return (
    <Section background="white">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-[44px] font-bold text-gray-900 mb-8" style={{ letterSpacing: '-0.5px' }}>
          Data Driven{' '}
          <span className="relative inline-block px-4">
            <span className="relative z-10 text-white">Results.</span>
            <span
              className="absolute inset-0 -inset-x-1 top-[15%] h-[75%] rounded-sm opacity-90"
              style={{
                backgroundColor: '#5e7986',
                transform: 'skewX(-5deg)'
              }}
            ></span>
          </span>
        </h2>
        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
          Tracking results is crucial to ensuring that the client is getting a
          positive ROI. We can provide up to date analysis with insight into
          month on month performance for all aspects of the digital marketing
          for the business.
        </p>
      </div>
    </Section>
  );
}
