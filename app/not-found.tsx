import Link from "next/link";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section background="gray">
      <div className="text-center max-w-2xl mx-auto py-20">
        <h1 className="text-9xl font-bold text-[#f5b5b5] mb-4">404</h1>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link href="/">
          <Button size="lg">Go Back Home</Button>
        </Link>
      </div>
    </Section>
  );
}
