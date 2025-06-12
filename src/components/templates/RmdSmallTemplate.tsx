import React from "react";
import BigTemplate from "./BigTemplate";
import RmdMyLastYearInfoAnswer from "../answers/RmdMyLastYearInfoAnswer";
import ConversationButton from "../common/ConversationButton";
import ClassicSearchResultsCard from "../common/ClassicSearchResultsCard";

interface RmdSmallTemplateProps {
  headerRef?: React.Ref<HTMLDivElement>;
  query: string;
}

const conversationActions = [
  { label: "What is an RMD?", onClick: () => {} },
  { label: "How do I calculate my RMD?", onClick: () => {} },
  { label: "What happens if I miss my RMD?", onClick: () => {} },
];

const placeholderResults = [
  {
    title: "RMD Basics",
    description: "Learn the fundamentals of Required Minimum Distributions and why they matter.",
    url: "#"
  },
  {
    title: "How to Calculate Your RMD",
    description: "Step-by-step guide to calculating your RMD for this tax year.",
    url: "#"
  },
  {
    title: "RMD Penalties and Deadlines",
    description: "What happens if you miss your RMD and how to avoid penalties.",
    url: "#"
  }
];

const RmdSmallTemplate: React.FC<RmdSmallTemplateProps> = ({ headerRef, query }) => (
  <BigTemplate
    headerRef={headerRef}
    header={query}
    preamble={
      "Here is the total amount of RMD you took last year."
    }
    rows={[
      {
        type: "full",
        cards: [
          <div key="rmd-small-answer-row" className="w-full h-full">
            <div className="bg-transparent shadow-none border-none p-0">
              <RmdMyLastYearInfoAnswer />
              <div className="mt-6 mb-8">
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
            key="rmd-small-classic-search-results"
            query={query}
            results={placeholderResults}
          />
        ]
      }
    ]}
  />
);

export default RmdSmallTemplate; 