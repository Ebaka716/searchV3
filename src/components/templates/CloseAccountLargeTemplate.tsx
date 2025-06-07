import React from "react";
import BigTemplate from "./BigTemplate";
import CloseAccountOverviewCard from "../common/CloseAccountOverviewCard";

// Placeholder components for the second row
const AccountClosureStepsCard = () => (
  <div className="p-4 bg-white rounded border text-zinc-800">
    <h4 className="font-semibold mb-2">Closure Steps</h4>
    <ul className="list-disc pl-5 text-sm">
      <li>Review closure policy</li>
      <li>Transfer remaining funds</li>
      <li>Download final statement</li>
    </ul>
  </div>
);

const CloseAccountConversationButtonsCard = () => (
  <div className="p-4 bg-white rounded border text-zinc-800">
    <h4 className="font-semibold mb-2">Next Actions</h4>
    <button className="block w-full mb-2 px-3 py-2 bg-blue-100 rounded hover:bg-blue-200 text-blue-900 font-medium">Contact Support</button>
    <button className="block w-full px-3 py-2 bg-blue-100 rounded hover:bg-blue-200 text-blue-900 font-medium">Download Statement</button>
  </div>
);

interface CloseAccountLargeTemplateProps {
  headerRef?: React.Ref<HTMLDivElement>;
  query: string;
}

const CloseAccountLargeTemplate: React.FC<CloseAccountLargeTemplateProps> = ({ headerRef, query }) => (
  <BigTemplate
    headerRef={headerRef}
    header={query}
    preamble={
      "You can only close accounts with a zero balance online. If you have accounts with a balance, you will need to speak to an associate."
    }
    rows={[
      { type: "full", cards: [
        <CloseAccountOverviewCard key="close-account-overview-card" />
      ] },
      { type: "half", cards: [
        <AccountClosureStepsCard key="closure-steps" />, 
        <CloseAccountConversationButtonsCard key="conversation-buttons" />
      ] }
    ]}
  />
);

export default CloseAccountLargeTemplate; 