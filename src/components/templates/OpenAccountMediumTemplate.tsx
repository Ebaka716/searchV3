import React from "react";
import BigTemplate from "./BigTemplate";
import RetirementAccountsTableCard from "../common/RetirementAccountsTableCard";

interface OpenAccountMediumTemplateProps {
  headerRef?: React.Ref<HTMLDivElement>;
  query: string;
}

const OpenAccountMediumTemplate: React.FC<OpenAccountMediumTemplateProps> = ({ headerRef, query }) => (
  <BigTemplate
    headerRef={headerRef}
    header={query}
    preamble={"Save for retirment with access to a broad range of investments, exceptional service, planning tools, and free investment guidance."}
    rows={[
      { type: "full", cards: [<RetirementAccountsTableCard key="retirement-accounts-table" />] },
    ]}
  />
);

export default OpenAccountMediumTemplate; 