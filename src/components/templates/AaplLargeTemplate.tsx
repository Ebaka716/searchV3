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
      "A quick overview and key insights for Apple Inc. (AAPL) based on your query."
    }
    cards={[
      <TickerOverviewCard key="ticker-overview" />,
      <StackedConversationCard key="stacked-convo" />,
      <CandlestickCard key="candlestick" />,
      <DetailedQuoteCard key="detailed-quote" />,
      <MarketNewsCard key="market-news" />,
      <ClassicSearchResultsCard key="classic-search-results" />,
    ]}
    cardGridVariant="big-template"
  />
);

export default AaplLargeTemplate; 