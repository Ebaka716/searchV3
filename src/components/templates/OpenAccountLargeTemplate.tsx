import React from "react";
import BigTemplate from "./BigTemplate";
import OpenAccountOverviewCard from "../common/OpenAccountOverviewCard";

interface OpenAccountLargeTemplateProps {
  headerRef?: React.Ref<HTMLDivElement>;
  query: string;
}

const OpenAccountLargeTemplate: React.FC<OpenAccountLargeTemplateProps> = ({ headerRef, query }) => (
  <BigTemplate
    headerRef={headerRef}
    header={query}
    preamble={
      "Open a new account in just a few steps. Review your options and get started below."
    }
    rows={[
      { type: "full", cards: [<OpenAccountOverviewCard key="open-account-overview-card" />] }
    ]}
  />
);

export default OpenAccountLargeTemplate; 