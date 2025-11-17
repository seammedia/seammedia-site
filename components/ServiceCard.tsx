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
    <div className="group bg-white p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
      {/* Icon */}
      <div
        className="w-16 h-16 rounded-md mb-4 flex items-center justify-center text-3xl"
        style={{ backgroundColor: iconBgColor }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

      {/* Learn More Link */}
      <Link
        href={link}
        className="inline-flex items-center text-gray-900 font-medium group-hover:text-[#f5b5b5] transition-colors"
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
