"use client";
import React from "react";
import BigTemplate from "./BigTemplate";
import TrackingStepsCard from "../common/TrackingStepsCard";
import FocusedArticleCard from "../common/FocusedArticleCard";
import StackedConversationButtonsCardMedium from "../common/StackedConversationButtonsCardMedium";

interface CustomerServiceMediumTemplateProps {
  headerRef?: React.Ref<HTMLDivElement>;
  query: string;
}

const CustomerServiceMediumTemplate: React.FC<CustomerServiceMediumTemplateProps> = ({ headerRef, query }) => (
  <BigTemplate
    headerRef={headerRef}
    header={query}
    preamble={
      "It looks like your debit card delivery date has passed. Here are some steps you can take to check your status and get help if needed."
    }
    rows={[
      { type: "full", cards: [
        <TrackingStepsCard key="tracking-steps" />
      ] },
      { type: "half", cards: [
        <FocusedArticleCard
          key="article"
          title="Provider Change: What to Expect With Your New Debit Card"
          description="Your debit card provider is changing. Learn what this means for your account, how to activate your new card, and what steps to take to ensure uninterrupted access."
          type="Article"
        />,
        <StackedConversationButtonsCardMedium key="questions" />
      ] }
    ]}
  />
);

export default CustomerServiceMediumTemplate; 