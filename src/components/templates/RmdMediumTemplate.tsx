import React from "react";
import BigTemplate from "./BigTemplate";
import RmdMediumAnswer from "../answers/RmdMediumAnswer";
import RmdSearchResultsCard from "../common/RmdSearchResultsCard";
import RmdMediumConversationButtonsCard from "../common/RmdMediumConversationButtonsCard";

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
            </div>
          </div>
        ]
      },
      {
        type: "half",
        cards: [
          <RmdSearchResultsCard
            key="rmd-medium-search-results"
            query={query}
            results={placeholderResults}
          />,
          <RmdMediumConversationButtonsCard key="rmd-medium-convo-buttons" />
        ]
      }
    ]}
  />
);

export default RmdMediumTemplate; 