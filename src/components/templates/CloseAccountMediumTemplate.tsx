import React from "react";
import BigTemplate from "./BigTemplate";
import ClassicSearchResultsCard, { ClassicSearchResult } from "../common/ClassicSearchResultsCard";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import ConversationButton from "../common/ConversationButton";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const accounts = [
  { type: "Individual", number: "••••1234", balance: "$0.00", eligible: true },
  { type: "Roth IRA", number: "••••5678", balance: "$2,450.00", eligible: false },
  { type: "Trust under agreement", number: "••••9012", balance: "$12,297.00", eligible: false },
  { type: "Crypto", number: "••••3456", balance: "$100.00", eligible: false },
  { type: "Cash management", number: "••••7890", balance: "$106.00", eligible: false },
];

const accountChanges = [
  "none",      // Individual
  "up",        // Roth IRA
  "none",      // Trust under agreement
  "down",      // Crypto
  "none",      // Cash management
];

const AccountListCard: React.FC = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Your Accounts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          {accounts.map((acct, idx) => {
            const change = accountChanges[idx];
            let balanceColor = "text-black";
            let icon = null;
            if (change === "up") {
              balanceColor = "text-green-700 font-semibold";
              icon = <ArrowUpRight className="w-4 h-4 text-green-600 mr-1" />;
            } else if (change === "down") {
              balanceColor = "text-red-700 font-semibold";
              icon = <ArrowDownRight className="w-4 h-4 text-red-600 mr-1" />;
            }
            return (
              <div
                key={idx}
                className="flex items-center justify-between bg-zinc-50 border border-zinc-200 rounded-md px-4 py-3 transition hover:bg-zinc-100 cursor-pointer"
              >
                <div className="flex flex-col">
                  <span className="font-medium text-zinc-800">{acct.type} Account</span>
                  <span className="text-sm text-zinc-600">{acct.number}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-medium text-zinc-800">Balance</span>
                  <span className={`flex items-center ${balanceColor}`}>
                    {icon}
                    {acct.balance}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

const closeAccountMediumResults: ClassicSearchResult[] = [
  {
    title: "How to Close a Savings Account",
    description: "Step-by-step guide to closing your savings account, including required documents and timelines.",
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
];

const closeAccountMediumQuestions = [
  "How do I close a specific account?",
  "What if I don't see my account?",
  "Contact support for help",
];

const CloseAccountMediumConversationButtonsCard: React.FC = () => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle>Related questions</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col items-start space-y-2">
        {closeAccountMediumQuestions.map((label, idx) => (
          <ConversationButton key={idx} onClick={() => {}}>
            {label}
          </ConversationButton>
        ))}
      </div>
    </CardContent>
  </Card>
);

interface CloseAccountMediumTemplateProps {
  headerRef?: React.Ref<HTMLDivElement>;
  query: string;
}

const CloseAccountMediumTemplate: React.FC<CloseAccountMediumTemplateProps> = ({ headerRef, query }) => (
  <BigTemplate
    headerRef={headerRef}
    header={query}
    preamble={"You have 5 accounts with Product company, only your individual account is eligible for closure with a zero balance."}
    rows={[
      { type: "full", cards: [<AccountListCard key="account-list-card" />] },
      { type: "thirds", cards: [
        <ClassicSearchResultsCard key="close-account-medium-results" query="account management" results={closeAccountMediumResults} />, 
        <CloseAccountMediumConversationButtonsCard key="conversation-buttons" />
      ] }
    ]}
  />
);

export default CloseAccountMediumTemplate; 