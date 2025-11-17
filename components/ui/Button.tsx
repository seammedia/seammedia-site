import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const baseStyles = "font-medium rounded-md transition-all duration-200 inline-flex items-center justify-center";

  const variants = {
    primary: "bg-[#f5b5b5] hover:bg-[#e8a5a5] text-white shadow-sm hover:shadow-md",
    secondary: "bg-gray-800 hover:bg-gray-900 text-white shadow-sm hover:shadow-md",
    outline: "border-2 border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
