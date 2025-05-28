"use client";
import React from "react";
import BigTemplate from "./BigTemplate";
import DividendsCard from "../common/DividendsCard";
import EarningsCard from "../common/EarningsCard";
import ClassicSearchResultsCard from "../common/ClassicSearchResultsCard";
import { Info } from "lucide-react";

interface AaplMediumTemplateProps {
  headerRef?: React.Ref<HTMLDivElement>;
  query: string;
}

const aaplDividendsEarningsResults = [
  {
    title: "Apple Dividend History & Growth",
    description: "Explore Apple Inc.'s dividend payments, yield trends, and growth over the past decade, including recent increases and payout ratios.",
    url: "#",
  },
  {
    title: "AAPL Q2 2024 Earnings: Analyst Insights",
    description: "Detailed breakdown of Apple's latest quarterly earnings, with a focus on EPS, revenue, and how results compare to Wall Street expectations.",
    url: "#",
  },
  {
    title: "Dividend vs. Earnings: How Sustainable is AAPL's Payout?",
    description: "Analysis of Apple's earnings coverage of its dividend, payout ratio trends, and what it means for future distributions.",
    url: "#",
  },
  {
    title: "AAPL Earnings Calendar & Upcoming Dates",
    description: "Stay up to date on Apple's next earnings report and dividend declaration dates, with consensus analyst forecasts.",
    url: "#",
  },
  {
    title: "How Does Apple's Dividend Yield Compare?",
    description: "Compare AAPL's dividend yield and growth to industry peers and the broader tech sector.",
    url: "#",
  },
];

const AaplMediumTemplate: React.FC<AaplMediumTemplateProps> = ({ headerRef, query }) => (
  <BigTemplate
    headerRef={headerRef}
    header={query}
    preamble={"Here's a summary of Apple's (AAPL) recent dividends and earnings: payout history, growth, and key financial highlights for shareholders."}
    rows={[
      { type: "full", cards: [<DividendsCard key="dividends" />] },
      { type: "full", cards: [<EarningsCard key="earnings" />] },
      { type: "full", cards: [
        <ClassicSearchResultsCard key="classic-search" query={query} results={aaplDividendsEarningsResults} />
      ] },
      { type: "full", cards: [
        <div key="blue-bar" className="w-full mt-2">
          <div className="flex items-center gap-2 mb-4 p-3 rounded-md bg-blue-100 border border-blue-300 text-blue-900">
            <Info className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">Want to see your recent dividend payments? Try asking: <span className="font-mono bg-blue-200 px-1 py-0.5 rounded">my dividends for apple last month</span></span>
          </div>
        </div>
      ] },
    ]}
  />
);

export default AaplMediumTemplate; 