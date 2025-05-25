"use client";
import React from "react";
import BigTemplate from "./BigTemplate";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import TrackingStepsCard from "../common/TrackingStepsCard";

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
        <Card key="track">
          <CardHeader>
            <CardTitle>Track Your Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This card will provide tracking options for your debit card.</p>
          </CardContent>
        </Card>,
        <Card key="help">
          <CardHeader>
            <CardTitle>Need More Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This card will offer escalation options if your card still hasn&apos;t arrived.</p>
          </CardContent>
        </Card>
      ] }
    ]}
  />
);

export default CustomerServiceMediumTemplate; 