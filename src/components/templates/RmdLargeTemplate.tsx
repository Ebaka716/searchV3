import React from "react";
import BigTemplate from "./BigTemplate";
import RmdLargeAnswerRow from "../common/RmdLargeAnswerRow";
import RmdSearchResultsCard from "../common/RmdSearchResultsCard";
import RmdConversationButtonsCard from "../common/RmdConversationButtonsCard";

interface RmdLargeTemplateProps {
  headerRef?: React.Ref<HTMLDivElement>;
  query: string;
}

const placeholderResults = [
  {
    title: "How to Calculate Your RMD for 2024",
    description: "Step-by-step guide to calculating your Required Minimum Distribution for this tax year, including IRS tables and examples.",
    url: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-required-minimum-distributions-rmds"
  },
  {
    title: "RMD Rules for IRAs and 401(k)s",
    description: "Understand which accounts require RMDs, key deadlines, and how recent law changes may affect your withdrawals.",
    url: "https://www.fidelity.com/learning-center/personal-finance/retirement/rmd-rules"
  },
  {
    title: "What Happens If You Miss Your RMD?",
    description: "Learn about the IRS penalties for missing your RMD and how to correct a missed distribution.",
    url: "https://www.schwab.com/learn/story/what-happens-if-you-miss-your-rmd"
  },
  {
    title: "RMD Age Requirements: When Do You Start?",
    description: "Find out the current age at which you must begin taking RMDs and how the rules have changed in recent years.",
    url: "https://www.investopedia.com/required-minimum-distribution-rmd-4769890"
  },
  {
    title: "Can I Delay My First RMD?",
    description: "Explore your options for delaying your first RMD and the pros and cons of waiting until April 1 of the following year.",
    url: "https://www.troweprice.com/personal-investing/resources/insights/can-you-delay-your-first-rmd.html"
  },
  {
    title: "RMD Calculator: Estimate Your Withdrawal",
    description: "Use this online calculator to estimate your annual RMD based on your age and account balance.",
    url: "https://www.calculator.net/rmd-calculator.html"
  },
  {
    title: "RMD FAQs: Common Questions Answered",
    description: "Get answers to the most frequently asked questions about RMDs, including spousal rules and inherited accounts.",
    url: "https://www.vanguard.com/retirement-accounts/required-minimum-distributions/faqs"
  }
];

const RmdLargeTemplate: React.FC<RmdLargeTemplateProps> = ({ headerRef, query }) => (
  <BigTemplate
    headerRef={headerRef}
    header={query}
    preamble={
      "Required Minimum Distributions (RMDs) are a key part of retirement planning. Here's what you need to know."
    }
    rows={[
      {
        type: "full",
        cards: [
          <RmdLargeAnswerRow key="rmd-large-answer-row" />
        ]
      },
      {
        type: "half",
        cards: [
          <RmdSearchResultsCard
            key="rmd-search-results"
            query={query}
            results={placeholderResults}
          />,
          <RmdConversationButtonsCard key="rmd-convo-buttons" />
        ]
      }
    ]}
  />
);

export default RmdLargeTemplate; 