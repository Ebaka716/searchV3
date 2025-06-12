import React from "react";
import BigTemplate from "./BigTemplate";
import RmdMediumAnswer from "../answers/RmdMediumAnswer";
import ClassicSearchResultsCard from "../common/ClassicSearchResultsCard";
import ConversationButton from "../common/ConversationButton";
import { Info } from "lucide-react";

interface RmdMediumTemplateProps {
  headerRef?: React.Ref<HTMLDivElement>;
  query: string;
}

const placeholderResults = [
  {
    title: "RMD Eligibility Rules",
    description: "Find out if you are required to take an RMD this year based on your age and account type.",
    url: "#"
  },
  {
    title: "Which Accounts Require RMDs?",
    description: "A guide to which retirement accounts are subject to RMDs and which are not.",
    url: "#"
  },
  {
    title: "How to Avoid RMD Penalties",
    description: "Tips for making sure you take your RMD on time and avoid IRS penalties.",
    url: "#"
  },
  {
    title: "RMD Deadlines and Key Dates",
    description: "Important deadlines for taking your RMD and what happens if you miss them.",
    url: "#"
  },
  {
    title: "RMD Calculator: Estimate Your Withdrawal",
    description: "Use this online calculator to estimate your annual RMD based on your age and account balance.",
    url: "#"
  }
];

const conversationActions = [
  { label: "Which accounts require RMDs?", onClick: () => {} },
  { label: "What is the RMD penalty?", onClick: () => {} },
  { label: "How do I calculate my RMD?", onClick: () => {} },
];

const smallRmdAlias = "how much was my rmd last year";
const handleSuggestSmallRmd = () => {
  window.dispatchEvent(new CustomEvent("add-to-floating-input", { detail: { value: smallRmdAlias } }));
};

const RmdMediumTemplate: React.FC<RmdMediumTemplateProps> = ({ headerRef, query }) => (
  <BigTemplate
    headerRef={headerRef}
    header={query}
    preamble={
      "Here are the details about your RMD eligibility and requirements."
    }
    rows={[
      {
        type: "full",
        cards: [
          <div key="rmd-medium-answer-row" className="w-full h-full">
            <div className="bg-transparent shadow-none border-none p-0">
              <RmdMediumAnswer />
              <div className="mt-2 mb-8">
                <div className="text-sm font-semibold text-zinc-700 mb-2">People often ask</div>
                <div className="flex flex-row flex-wrap gap-2 justify-start">
                  {conversationActions.map((action, idx) => (
                    <ConversationButton key={idx} onClick={action.onClick}>
                      {action.label}
                    </ConversationButton>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ]
      },
      {
        type: "full",
        cards: [
          <ClassicSearchResultsCard
            key="rmd-medium-classic-search-results"
            query={query}
            results={placeholderResults}
          />
        ]
      },
      {
        type: "full",
        cards: [
          <div key="blue-bar" className="w-full mt-2">
            <div className="flex items-center gap-2 mb-4 p-3 rounded-md bg-blue-100 border border-blue-300 text-blue-900">
              <Info className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium">Want to see how much RMD you took last year? Try asking: </span>
              <button
                className="ml-2 font-mono bg-blue-200 px-2 py-1 rounded hover:bg-blue-300 transition cursor-pointer text-blue-900 text-sm border border-blue-300"
                onClick={handleSuggestSmallRmd}
              >
                {smallRmdAlias}
              </button>
            </div>
          </div>
        ]
      }
    ]}
  />
);

export default RmdMediumTemplate; 