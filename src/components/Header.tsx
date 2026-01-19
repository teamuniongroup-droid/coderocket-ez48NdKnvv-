export default function Header() {
  const navItems = ['POLITICS', 'U.S. NEWS', 'WORLD', 'LOCAL', 'SPORTS', 'HEALTH', 'BUSINESS', 'SHOPPING', 'TIPLINE', 'CULTURE'];
  const liveItems = ['Trump admin', 'Golden Globes', 'Jerome Powell', 'Iran protests', 'NYC nurses strike', 'Autistic Barbie'];
  return (
    <header className="bg-[#1a1d29] text-white sticky top-0 z-[100]">
      <div className="container mx-auto max-w-[1280px] px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-8">
            <img 
              src="https://v0-gelatintrick.vercel.app/images/screenshot-202026-01-12-20at-2019.png" 
              alt="NBC News" 
              className="h-8"
            />
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-sm font-medium hover:text-gray-300 transition-colors cursor-pointer"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 border border-white rounded hover:bg-white hover:text-[#1a1d29] transition-colors cursor-pointer">
              WATCH
            </button>
            <button className="text-2xl cursor-pointer hover:text-gray-300 transition-colors">☰</button>
          </div>
        </div>
        <div className="flex items-center gap-4 pb-3 border-t border-gray-700 pt-3">
          <span className="bg-[#d32f2f] text-white text-xs font-bold px-2 py-1 rounded">LIVE</span>
          <div className="flex items-center gap-4 overflow-x-auto">
            {liveItems.map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-sm whitespace-nowrap hover:text-gray-300 transition-colors cursor-pointer"
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