export default function Hero() {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto max-w-[800px] px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center leading-tight">
          <span className="text-[#d32f2f]">Warning!</span> Never use this{' '}
          <span className="text-[#d32f2f]">"Chili Gelatin"</span> if you don't want to replace your entire wardrobe...
          <br />
          <span className="text-2xl md:text-3xl mt-2 block">Or at least, don't use it the right way!</span>
        </h1>
      </div>
    </div>
  );
}