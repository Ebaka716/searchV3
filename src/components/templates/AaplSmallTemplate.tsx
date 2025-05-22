"use client";
import React from "react";
import BigTemplate from "./BigTemplate";
import DividendsLastMonthCard from "../common/DividendsLastMonthCard";

interface AaplSmallTemplateProps {
  headerRef?: React.Ref<HTMLDivElement>;
  query: string;
}

const AaplSmallTemplate: React.FC<AaplSmallTemplateProps> = ({ headerRef, query }) => (
  <BigTemplate
    headerRef={headerRef}
    header={query}
    preamble={"Here's a summary of your recent Apple (AAPL) dividend activity for the last month."}
    rows={[
      { type: "full", cards: [<DividendsLastMonthCard key="dividends-last-month" />] },
    ]}
  />
);

export default AaplSmallTemplate; 