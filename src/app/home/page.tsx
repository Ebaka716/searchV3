"use client";
import MainLayout from "@/components/layouts/MainLayout";

export default function HomePage() {
  return (
    <MainLayout headerVariant="full">
      <main className="w-full flex flex-col items-center" style={{ background: '#f9f7f5' }}>
        {/* Hero Section */}
        <section className="w-full max-w-5xl bg-white rounded-b-xl shadow p-8 flex flex-col md:flex-row gap-8 mt-0">
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Plan Your Financial Future</h2>
            <p className="mb-4 text-zinc-700">Explore strategies for retirement, investing, and building wealth in today&apos;s market environment.</p>
            <button className="bg-black text-white px-6 py-2 rounded font-semibold w-fit">Get Started</button>
          </div>
          <div className="flex-1 flex items-center justify-center">
            {/* Placeholder for hero image/graphic */}
            <div className="w-64 h-40 bg-gradient-to-br from-blue-200 to-blue-400 rounded-lg flex items-center justify-center text-3xl font-bold text-zinc-700">Finance Hub</div>
          </div>
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
      </main>
    </MainLayout>
  );
} 