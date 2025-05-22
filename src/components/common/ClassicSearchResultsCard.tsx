import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const results = [
  {
    title: "Apple Q2 2024 Earnings: Key Takeaways",
    description: "A summary of Apple Inc.'s latest quarterly earnings report, including revenue, profit, and product highlights.",
    url: "#",
  },
  {
    title: "AAPL Stock Analysis & Forecast",
    description: "Expert analysis and future outlook for Apple (AAPL) shares based on recent market trends and company performance.",
    url: "#",
  },
  {
    title: "Apple Announces New Product Lineup",
    description: "Coverage of Apple's most recent product announcements and their potential impact on the company's growth.",
    url: "#",
  },
  {
    title: "Dividend History for Apple Inc.",
    description: "A look at Apple's dividend payments, yield, and sustainability over the past decade.",
    url: "#",
  },
  {
    title: "How Does AAPL Compare to Tech Peers?",
    description: "Comparative analysis of Apple versus other major technology companies in terms of valuation, growth, and innovation.",
    url: "#",
  },
  {
    title: "Apple's Services Revenue Hits Record High",
    description: "Insights into the growth of Apple's services segment and what it means for the company's business model.",
    url: "#",
  },
  {
    title: "Should You Buy AAPL Now?",
    description: "Pros and cons of investing in Apple stock at current prices, including analyst recommendations and risk factors.",
    url: "#",
  },
];

export function ClassicSearchResultsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Classic Search Results</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          {results.map((result, idx) => (
            <div key={idx}>
              <a
                href={result.url}
                className="text-blue-700 font-semibold underline underline-offset-2 text-lg hover:text-blue-900 transition-colors cursor-pointer"
                tabIndex={0}
              >
                {result.title}
              </a>
              <div className="text-sm text-muted-foreground mt-1">
                {result.description}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default ClassicSearchResultsCard; 