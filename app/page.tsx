import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#5DBEAA] relative overflow-hidden flex flex-col items-center justify-center">
      {/* Pink decorative arrow shape in bottom left */}
      <div className="absolute bottom-0 left-0 w-96 h-96">
        <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
          <path
            d="M0 400C0 400 200 350 300 250C400 150 350 50 250 100C150 150 50 250 0 400Z"
            fill="#E53E3E"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="text-center z-10 space-y-12">
        {/* Main heading */}
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
          Front-end Developer — چالش
        </h1>

        {/* ArvanCloud logo */}
        <div className="flex justify-center">
          <div className="text-white text-xl font-medium">arvancloud</div>
        </div>

        {/* Let's go button */}
        <div className="pt-8">
          <Link
            href="/register"
            className="inline-flex items-center justify-center bg-white text-[#5DBEAA] px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            Let&apos;s go
          </Link>
        </div>
      </div>
    </div>
  );
}
