"use client";
import React from "react";
import BigTemplate from "./BigTemplate";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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
        <Card key="info">
          <CardHeader>
            <CardTitle>Debit Card Delivery Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This card will provide general information about debit card delivery timelines and what to expect.</p>
          </CardContent>
        </Card>
      ] },
      { type: "half", cards: [
        <Card key="faq">
          <CardHeader>
            <CardTitle>FAQ</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This card will answer common questions about debit card delivery.</p>
          </CardContent>
        </Card>,
        <Card key="status">
          <CardHeader>
            <CardTitle>Check Delivery Status</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This card will help users check the status of their debit card delivery.</p>
          </CardContent>
        </Card>
      ] }
    ]}
  />
);

export default CustomerServiceLargeTemplate; 