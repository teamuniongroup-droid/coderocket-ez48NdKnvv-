export default function BreakingBanner() {
  return (
    <div className="bg-[#d32f2f] text-white py-3 px-4">
      <div className="container mx-auto flex items-center justify-between max-w-[1280px]">
        <div className="flex items-center gap-2">
          <span className="font-bold text-sm">BREAKING:</span>
          <span className="text-sm">
            Doctors reveal shocking jello trick that helps women over 40 lose stubborn belly fat without dieting or exercise
          </span>
        </div>
        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
      </div>
    </div>
  );
}