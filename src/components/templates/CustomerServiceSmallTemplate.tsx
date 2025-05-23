"use client";
import React from "react";
import BigTemplate from "./BigTemplate";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface CustomerServiceSmallTemplateProps {
  headerRef?: React.Ref<HTMLDivElement>;
  query: string;
}

const CustomerServiceSmallTemplate: React.FC<CustomerServiceSmallTemplateProps> = ({ headerRef, query }) => (
  <BigTemplate
    headerRef={headerRef}
    header={query}
    preamble={
      "It looks like you want to speak with a live associate. Here are your options to get direct support right away."
    }
    rows={[
      { type: "full", cards: [
        <Card key="contact">
          <CardHeader>
            <CardTitle>Contact Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p>To speak with a live associate about your debit card delivery, please call our customer service line or use the live chat option below. We&apos;re here to help you resolve your issue as quickly as possible.</p>
          </CardContent>
        </Card>
      ] },
      { type: "half", cards: [
        <Card key="phone">
          <CardHeader>
            <CardTitle>Call Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This card will display the customer service phone number and hours.</p>
          </CardContent>
        </Card>,
        <Card key="chat">
          <CardHeader>
            <CardTitle>Live Chat</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This card will provide a link or button to start a live chat with an associate.</p>
          </CardContent>
        </Card>
      ] }
    ]}
  />
);

export default CustomerServiceSmallTemplate; 