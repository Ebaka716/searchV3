"use client";
import React from "react";
import BigTemplate from "./BigTemplate";

interface AaplSmallTemplateProps {
  headerRef?: React.Ref<HTMLDivElement>;
  query: string;
}

const AaplSmallTemplate: React.FC<AaplSmallTemplateProps> = ({ headerRef, query }) => (
  <BigTemplate
    headerRef={headerRef}
    header={query}
    preamble={"Apple Inc. (AAPL) is trading at $175.23 (+1.2%)"}
    rows={[
      { type: "half", cards: ["Price: $175.23", "Change: +1.2%"] },
      { type: "full", cards: ["Market Cap: $2.8T"] },
    ]}
  />
);

export default AaplSmallTemplate; 