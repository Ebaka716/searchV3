"use client";
import React from "react";
import BigTemplate from "./BigTemplate";
import DividendsCard from "../common/DividendsCard";

interface AaplMediumTemplateProps {
  headerRef?: React.Ref<HTMLDivElement>;
  query: string;
}

const AaplMediumTemplate: React.FC<AaplMediumTemplateProps> = ({ headerRef, query }) => (
  <BigTemplate
    headerRef={headerRef}
    header={query}
    preamble={"Apple Inc. (AAPL) is currently trading at $175.23, up 1.2% today. The company remains a leader in consumer electronics and services."}
    cards={[
      null, // 2/3 card (empty, row 1)
      null, // 1/3 card (empty, row 1)
      <DividendsCard key="dividends" />, // full-width row 2
      null, // 1/2 card (empty, row 3)
      null, // 1/2 card (empty, row 3)
      null, // full-width row 4
    ]}
    cardGridVariant="big-template"
  />
);

export default AaplMediumTemplate; 