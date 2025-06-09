import React from "react";
import BigTemplate from "./BigTemplate";
import CloseAccountOverviewCard from "../common/CloseAccountOverviewCard";
import ClassicSearchResultsCard, { ClassicSearchResult } from "../common/ClassicSearchResultsCard";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import ConversationButton from "../common/ConversationButton";

const closeAccountResults: ClassicSearchResult[] = [
  {
    title: "How to Close a Checking Account",
    description: "Step-by-step guide to closing your checking account, including required documents and timelines.",
    url: "#",
  },
  {
    title: "Account Closure Policy",
    description: "Understand our policy for closing accounts, including eligibility and restrictions.",
    url: "#",
  },
  {
    title: "Transferring Funds Before Closure",
    description: "How to transfer your remaining balance before closing your account.",
    url: "#",
  },
  {
    title: "Download Your Final Statement",
    description: "Instructions for downloading your final account statement after closure.",
    url: "#",
  },
  {
    title: "Contacting Support for Account Closure",
    description: "How to get help from our support team if you have questions about closing your account.",
    url: "#",
  },
  {
    title: "What Happens After Account Closure?",
    description: "Learn what to expect after your account is closed, including confirmation and access to records.",
    url: "#",
  },
  {
    title: "Reopening a Closed Account",
    description: "Find out if and how you can reopen an account after it has been closed.",
    url: "#",
  },
];

const closeAccountQuestions = [
  "I don't see the account I want to close",
  "What happens when I close an account?",
  "How do I transfer my balance before closing?",
  "Can I reopen a closed account?",
  "How do I contact support for help?",
];

const CloseAccountConversationButtonsCard: React.FC = () => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle>Related questions</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col items-start space-y-2">
        {closeAccountQuestions.map((label, idx) => (
          <ConversationButton key={idx} onClick={() => {}}>
            {label}
          </ConversationButton>
        ))}
      </div>
    </CardContent>
  </Card>
);

interface CloseAccountLargeTemplateProps {
  headerRef?: React.Ref<HTMLDivElement>;
  query: string;
  setHideInput?: (hide: boolean) => void;
}

const CloseAccountLargeTemplate: React.FC<CloseAccountLargeTemplateProps> = ({ headerRef, query, setHideInput }) => {
  const handleHideInput = setHideInput;
  return (
    <BigTemplate
      headerRef={headerRef}
      header={query}
      preamble={
        "You can only close accounts with a zero balance online. If you have accounts with a balance, you will need to speak to an associate."
      }
      rows={[
        { type: "full", cards: [
          <CloseAccountOverviewCard key="close-account-overview-card" onConfirmingChange={handleHideInput} />
        ] },
        { type: "thirds", cards: [
          <ClassicSearchResultsCard key="close-account-results" query="close account" results={closeAccountResults} />, 
          <CloseAccountConversationButtonsCard key="conversation-buttons" />
        ] }
      ]}
    />
  );
};

export default CloseAccountLargeTemplate; 