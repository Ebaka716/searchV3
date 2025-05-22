"use client";
import React from "react";
import BigTemplate from "./BigTemplate";
import TickerOverviewCard from "../common/TickerOverviewCard";
import StackedConversationCard from "../common/StackedConversationCard";
import dynamic from "next/dynamic";
import DetailedQuoteCard from "../common/DetailedQuoteCard";
import MarketNewsCard from "../common/MarketNewsCard";
import ClassicSearchResultsCard from "../common/ClassicSearchResultsCard";

// Dynamically import CandlestickCard with SSR disabled
const CandlestickCard = dynamic(() => import("../common/CandlestickCard"), { ssr: false });

interface AaplLargeTemplateProps {
  headerRef?: React.Ref<HTMLDivElement>;
  query: string;
}

const AaplLargeTemplate: React.FC<AaplLargeTemplateProps> = ({ headerRef, query }) => (
  <BigTemplate
    headerRef={headerRef}
    header={query}
    preamble={
      "Apple Inc. (AAPL) closed at $157.65 on December 31st last year. This reflects a strong year for the company, driven by robust iPhone sales and growth in services."
    }
    cards={[
      <TickerOverviewCard key="ticker-overview" />,
      <StackedConversationCard key="stacked-convo" />,
      <CandlestickCard key="candlestick" />,
      <DetailedQuoteCard key="detailed-quote" />,
      <MarketNewsCard key="market-news" />,
      <ClassicSearchResultsCard key="classic-search-results" />,
      "P/E Ratio: 29.5",
      "Dividend Yield: 0.55%",
      "52-Week Range: $150.00 - $199.62",
      "iPhone Sales: Record high",
      "Services Growth: +20% YoY",
    ]}
    cardGridVariant="big-template"
  />
);

export default AaplLargeTemplate; 