import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  iconBgColor: string;
  link: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  iconBgColor,
  link,
}: ServiceCardProps) {
  return (
    <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-transform hover:scale-[1.03] duration-300 flex flex-col h-full">
      {/* Icon - Equal Size and Centered */}
      <div className="flex justify-center mb-6">
        <div
          className="w-16 h-16 mx-auto rounded-lg flex items-center justify-center text-4xl shadow-md"
          style={{ backgroundColor: iconBgColor }}
        >
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
        {title}
      </h3>

      {/* Description */}
      <p className="text-base text-gray-600 leading-relaxed mb-6 flex-grow text-center">
        {description}
      </p>

      {/* Learn More Link */}
      <Link
        href={link}
        className="inline-flex items-center justify-center text-gray-900 font-medium group-hover:text-[#f5b5b5] transition-colors mt-auto"
      >
        Learn More
        <svg
          className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  );
}
