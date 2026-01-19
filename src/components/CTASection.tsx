export default function CTASection() {
  return (
    <div className="max-w-4xl mx-auto px-3 md:px-4 pb-8 md:pb-16">
      {/* Main CTA Button */}
      <div className="text-center mb-8 md:mb-12">
        <button className="bg-[#4caf50] hover:bg-[#45a049] text-white text-xl md:text-2xl font-bold py-4 md:py-6 px-8 md:px-12 rounded-lg shadow-2xl transform transition-all hover:scale-105 cursor-pointer animate-pulse">
          🎁 YES! I WANT ACCESS TO THE JELLO TRICK NOW!
        </button>
        <p className="text-gray-600 text-sm md:text-base mt-4">
          ⏰ Special offer expires in: <span className="font-bold text-red-600">14:59</span>
        </p>
      </div>
      {/* Product Details */}
      <div className="bg-gradient-to-br from-[#f8f9fa] to-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-200 mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-900">
          What You'll Get Today:
        </h3>
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3 md:gap-4">
            <div className="w-6 h-6 bg-[#4caf50] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg text-gray-900">The Complete Jello Method Guide</h4>
              <p className="text-gray-600 text-sm md:text-base">Step-by-step instructions to prepare and use the gelatin trick daily</p>
            </div>
          </div>
          <div className="flex items-start gap-3 md:gap-4">
            <div className="w-6 h-6 bg-[#4caf50] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg text-gray-900">7-Day Quickstart Plan</h4>
              <p className="text-gray-600 text-sm md:text-base">Easy-to-follow meal timing and preparation schedule</p>
            </div>
          </div>
          <div className="flex items-start gap-3 md:gap-4">
            <div className="w-6 h-6 bg-[#4caf50] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg text-gray-900">Bonus Recipe Collection</h4>
              <p className="text-gray-600 text-sm md:text-base">15+ delicious gelatin variations to keep it interesting</p>
            </div>
          </div>
          <div className="flex items-start gap-3 md:gap-4">
            <div className="w-6 h-6 bg-[#4caf50] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg text-gray-900">Private Support Group Access</h4>
              <p className="text-gray-600 text-sm md:text-base">Join thousands of women sharing their success stories</p>
            </div>
          </div>
        </div>
        <div className="text-center border-t border-gray-300 pt-6">
          <p className="text-gray-500 text-sm mb-2">Regular Price: <span className="line-through">$97</span></p>
          <p className="text-4xl md:text-5xl font-bold text-[#d32f2f] mb-2">$37</p>
          <p className="text-gray-600 text-sm md:text-base">One-time payment • Instant digital access</p>
        </div>
      </div>
      {/* Second CTA */}
      <div className="text-center mb-8">
        <button className="bg-[#d32f2f] hover:bg-[#b71c1c] text-white text-xl md:text-2xl font-bold py-4 md:py-6 px-8 md:px-12 rounded-lg shadow-2xl transform transition-all hover:scale-105 cursor-pointer w-full md:w-auto">
          GET INSTANT ACCESS NOW →
        </button>
      </div>
      {/* Trust Badges */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-8">
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-[#4caf50]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
          <span className="text-sm md:text-base text-gray-700 font-semibold">Secure Checkout</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-[#4caf50]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
          <span className="text-sm md:text-base text-gray-700 font-semibold">60-Day Guarantee</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-[#4caf50]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
          </svg>
          <span className="text-sm md:text-base text-gray-700 font-semibold">97% Success Rate</span>
        </div>
      </div>
      {/* Money Back Guarantee */}
      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6 md:p-8 text-center">
        <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
          🛡️ Our Iron-Clad 60-Day Money-Back Guarantee
        </h4>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Try the Jello Method risk-free for 60 days. If you don't see results or aren't completely satisfied for ANY reason, 
          simply send us an email and we'll refund every penny. No questions asked. You have nothing to lose except the weight!
        </p>
      </div>
    </div>
  );
}