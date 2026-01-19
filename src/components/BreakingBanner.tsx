export default function BreakingBanner() {
  return (
    <div className="bg-[#d32f2f] text-white px-3 py-2 md:px-4 md:py-3">
      <div className="max-w-7xl mx-auto flex items-center gap-2">
        <span className="font-bold text-xs md:text-sm flex-shrink-0">BREAKING:</span>
        <p className="text-xs md:text-sm line-clamp-2 md:line-clamp-1">
          Doctors reveal shocking jello trick that helps women over 40 lose stubborn belly fat without dieting or exercise
        </p>
        <button className="ml-auto text-white hover:text-gray-200 hidden md:block flex-shrink-0">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="8"></circle>
          </svg>
        </button>
      </div>
    </div>
  );
}