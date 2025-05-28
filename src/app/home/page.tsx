"use client";
import MainLayout from "@/components/layouts/MainLayout";

export default function HomePage() {
  return (
    <MainLayout headerVariant="full">
      <main 
        className="w-full flex-1 min-h-screen flex flex-col items-center justify-start"
        style={{ background: '#f9f7f5' }}
      >
        {/* Hero Section */}
        <section 
          className="w-full max-w-5xl bg-white rounded-xl shadow flex flex-col md:flex-row gap-8 mt-8 relative overflow-hidden"
          style={{
            backgroundImage: "url('/images/hero-retired-couple.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '400px'
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}></div>
          
          <div className="relative z-10 p-8 flex flex-col md:flex-row gap-8 w-full">
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white drop-shadow-lg">Plan Your Financial Future</h2>
              <p className="mb-4 text-white drop-shadow-md">Explore strategies for retirement, investing, and building wealth in today&apos;s market environment.</p>
              <button className="bg-white text-black px-6 py-2 rounded font-semibold w-fit hover:bg-gray-100 transition-colors">Get Started</button>
            </div>
          </div>
          <div className="flex-1 hidden md:flex" />
        </section>

        {/* First Row: 3 Cards */}
        <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-2">
            <h3 className="font-semibold text-lg mb-2">Retirement Planning</h3>
            <p className="text-zinc-700">Learn how to maximize your 401(k), IRA, and other retirement accounts for long-term growth.</p>
            <a href="#" className="text-xs text-blue-500 mt-2">Explore retirement options</a>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-2">
            <h3 className="font-semibold text-lg mb-2">Market News</h3>
            <p className="text-zinc-700">Stay up to date with the latest trends and insights from global financial markets.</p>
            <a href="#" className="text-xs text-blue-500 mt-2">Read market news</a>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-2">
            <h3 className="font-semibold text-lg mb-2">Investment Strategies</h3>
            <p className="text-zinc-700">Discover diversified investment strategies to help you reach your financial goals.</p>
            <a href="#" className="text-xs text-blue-500 mt-2">See strategies</a>
          </div>
        </section>

        {/* Second Row: 2 Cards */}
        <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-2">
            <h3 className="font-semibold text-lg mb-2">Personal Finance Tools</h3>
            <p className="text-zinc-700">Use calculators and tools to budget, plan, and track your financial progress.</p>
            <a href="#" className="text-xs text-blue-500 mt-2">Try our tools</a>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-2">
            <h3 className="font-semibold text-lg mb-2">Security & Support</h3>
            <p className="text-zinc-700">Get tips on protecting your accounts and access 24/7 customer support.</p>
            <a href="#" className="text-xs text-blue-500 mt-2">Learn more</a>
          </div>
        </section>

        {/* New "What Problem Can We Solve?" Section */}
        <section className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-12 px-4 md:px-0">
          {/* Left Side: Image Placeholder */}
          <div 
            className="h-64 md:h-auto bg-gradient-to-br from-slate-300 to-slate-500 rounded-lg flex items-center justify-center text-2xl font-bold text-slate-700 shadow-lg"
            aria-label="Skyscraper image placeholder"
          >
            {/* In a real scenario, this would be an <img> tag or a div with a background image */}
            {/* For prototype: Styled div */}
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building-2 text-slate-600 opacity-50"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col justify-center py-8 md:py-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-zinc-800">
              What problem can we solve together?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Service Card 1 */}
              <div className="bg-slate-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  {/* Icon Placeholder */}
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-landmark text-blue-600"><line x1="3" x2="3" y1="22" y2="12"/><line x1="21" x2="21" y1="22" y2="12"/><line x1="7" x2="7" y1="22" y2="12"/><line x1="17" x2="17" y1="22" y2="12"/><rect width="18" height="6" x="3" y="6"/><path d="M12 6V3l-6 3l6 3l6-3l-6-3Z"/></svg>
                  </div>
                  <h3 className="font-semibold text-lg text-zinc-700">Asset Management</h3>
                </div>
                <p className="text-sm text-zinc-600 mb-4">We believe investors deserve an expert global partner they can trust to step up and deliver strong outcomes.</p>
                <a href="#" className="text-sm text-blue-600 font-medium hover:underline">Learn more &gt;</a>
              </div>

              {/* Service Card 2 */}
              <div className="bg-slate-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                   {/* Icon Placeholder */}
                   <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase text-green-600"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                  </div>
                  <h3 className="font-semibold text-lg text-zinc-700">Commercial Banking</h3>
                </div>
                <p className="text-sm text-zinc-600 mb-4">We provide credit, financing, treasury and payment solutions to help your business succeed.</p>
                <a href="#" className="text-sm text-green-600 font-medium hover:underline">Learn more &gt;</a>
              </div>

              {/* Service Card 3 (Optional, can add more) */}
              <div className="bg-slate-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                   {/* Icon Placeholder */}
                   <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-candlestick-chart text-purple-600"><path d="M9 5v4"/><rect width="4" height="6" x="7" y="9" rx="1"/><path d="M9 15v2"/><path d="M17 3v2"/><rect width="4" height="8" x="15" y="5" rx="1"/><path d="M17 13v3"/><path d="M3 3v10a2 2 0 0 0 2 2h14"/></svg>
                  </div>
                  <h3 className="font-semibold text-lg text-zinc-700">Investment Banking</h3>
                </div>
                <p className="text-sm text-zinc-600 mb-4">Providing solutions including M&A, capital raising, and risk management for corporations.</p>
                <a href="#" className="text-sm text-purple-600 font-medium hover:underline">Learn more &gt;</a>
              </div>

              {/* Service Card 4 (Optional) */}
              <div className="bg-slate-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                 <div className="flex items-center mb-3">
                    {/* Icon Placeholder */}
                    <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-big text-sky-600"><path d="M3 3v18h18"/><path d="M7 12h3v4H7z"/><path d="M12 7h3v9h-3z"/><path d="M17 14h3v3h-3z"/></svg>
                    </div>
                   <h3 className="font-semibold text-lg text-zinc-700">Markets</h3>
                 </div>
                 <p className="text-sm text-zinc-600 mb-4">Direct access to market leading liquidity, harnessed through class research, tools, and data analytics.</p>
                 <a href="#" className="text-sm text-sky-600 font-medium hover:underline">Learn more &gt;</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
} 