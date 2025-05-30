"use client";
import React from "react";
import BigTemplate from "./BigTemplate";
import DebitCardOverviewCard from "../common/DebitCardOverviewCard";
import DebitCardsListCard from "../common/DebitCardsListCard";
import StackedConversationButtonsCard from "../common/StackedConversationButtonsCard";

interface CustomerServiceLargeTemplateProps {
  headerRef?: React.Ref<HTMLDivElement>;
  query: string;
}

const CustomerServiceLargeTemplate: React.FC<CustomerServiceLargeTemplateProps> = ({ headerRef, query }) => (
  <BigTemplate
    headerRef={headerRef}
    header={query}
    preamble={
      "Here's a summary of what to expect with your debit card delivery, including timelines, common questions, and next steps if you need more help."
    }
    rows={[
      { type: "full", cards: [
        <DebitCardOverviewCard key="debit-card-overview" />
      ] },
      { type: "half", cards: [
        <DebitCardsListCard key="debit-cards-list" />, 
        <StackedConversationButtonsCard key="conversation-buttons" />
      ] }
    ]}
  />
);

export default CustomerServiceLargeTemplate; 