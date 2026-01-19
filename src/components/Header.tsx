export default function Header() {
  const navItems = ['POLITICS', 'U.S. NEWS', 'WORLD', 'LOCAL', 'SPORTS', 'HEALTH', 'BUSINESS', 'SHOPPING', 'TIPLINE', 'CULTURE'];
  const liveItems = ['Trump admin', 'Golden Globes', 'Jerome Powell', 'Iran protests', 'NYC nurses strike', 'Autistic Barbie'];
  return (
    <header className="bg-[#1a1d29] text-white sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-3 md:px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          <div className="flex items-center gap-4 md:gap-8">
            <a href="#" className="flex items-center cursor-pointer">
              <img 
                src="https://v0-gelatintrick.vercel.app/images/screenshot-202026-01-12-20at-2019.png" 
                alt="NBC News" 
                className="h-8 md:h-10 w-auto"
              />
            </a>
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
              {navItems.map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-xs xl:text-sm font-semibold hover:text-gray-300 transition-colors whitespace-nowrap cursor-pointer"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-all rounded-md border shadow-xs bg-transparent border-white text-white hover:bg-white/10 text-xs md:text-sm px-2 md:px-4 h-8 md:h-9 cursor-pointer">
              WATCH
            </button>
            <button className="text-white hover:text-gray-300 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#1a1d29] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-3 md:px-4 py-2">
          <div className="flex items-center gap-3 md:gap-4 overflow-x-scroll scrollbar-hide">
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded flex-shrink-0">LIVE</span>
            {liveItems.map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-xs md:text-sm hover:text-gray-300 transition-colors whitespace-nowrap cursor-pointer"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}