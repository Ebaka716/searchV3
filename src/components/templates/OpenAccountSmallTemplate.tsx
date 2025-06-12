import React from "react";
import BigTemplate from "./BigTemplate";
import OpenAccountBrokerageOverviewCard from "../common/OpenAccountBrokerageOverviewCard";

interface OpenAccountSmallTemplateProps {
  headerRef?: React.Ref<HTMLDivElement>;
  query: string;
}

const OpenAccountSmallTemplate: React.FC<OpenAccountSmallTemplateProps> = ({ headerRef, query }) => (
  <BigTemplate
    headerRef={headerRef}
    header={query}
    preamble={
      "Open a brokerage account in just a few steps. Review your information and terms, then get started below."
    }
    rows={[
      { type: "full", cards: [<OpenAccountBrokerageOverviewCard key="open-account-brokerage-overview-card" />] }
    ]}
  />
);

export default OpenAccountSmallTemplate; 