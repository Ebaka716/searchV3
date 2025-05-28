"use client";
import React from "react";
import BigTemplate from "./BigTemplate";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Typewriter from "@/components/ui/Typewriter";
import { SparkleIcon } from "@/components/icons/SparkleIcon";
import { MessageCircle, Phone, Mail } from "lucide-react";

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
      {
        type: "thirds",
        cards: [
          // Left (main) card: Recommended Live Chat
          <Card key="live-chat" className="col-span-2 relative h-full flex flex-col">
            <span className="absolute top-4 right-4 px-2 py-0.5 text-xs font-semibold bg-green-100 text-green-700 rounded z-10">Recommended</span>
            <CardHeader className="flex items-start gap-2">
              <MessageCircle className="w-5 h-5 text-primary mr-2 mt-1" />
              <div>
                <CardTitle>Live Chat</CardTitle>
                <p className="mt-1 text-xs text-muted-foreground">Estimated wait: <span className="font-semibold text-green-700">under 2 minutes</span></p>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <div className="mb-4">
                <div className="bg-muted rounded-md px-4 py-3 flex flex-col gap-2 mb-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">You are inquiring about:</div>
                    <Button variant="secondary" size="sm">Edit</Button>
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center">
                    <Typewriter text="Debit card delivery being late for account number ••••1234" speed={18} />
                    <span className="ml-1 animate-pulse inline-block align-middle"><SparkleIcon className="w-4 h-4" /></span>
                  </div>
                </div>
              </div>
              <div className="text-center mb-1">
                <div className="text-xs text-muted-foreground">We will route you to the <span className="font-semibold">Cash Management team</span>.</div>
              </div>
              <Button className="w-full" variant="default" disabled={false}>
                Start Chat
              </Button>
            </CardContent>
          </Card>,
          // Right (smaller) card: Other support channels
          <Card key="other-channels" className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>Other Support Channels</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <div className="font-medium flex items-center gap-2"><Phone className="w-4 h-4 text-primary mr-1" />Schedule a Call Back</div>
                  <div className="text-sm mb-2">Next available: <span className="font-bold text-black">Today, 3:30pm</span></div>
                  <Button
                    className="w-full mb-2"
                    variant="outline"
                    
                  >
                    Schedule Call
                  </Button>
                </div>
                <div>
                  <div className="font-medium flex items-center gap-2"><Mail className="w-4 h-4 text-primary mr-1" />Email Us</div>
                  <div className="text-sm mb-2">Average response time: <span className="font-bold text-black">2 business days</span></div>
                  <Button
                    className="w-full"
                    variant="outline"
                    
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ]
      },
      { type: "half", cards: [
        // Left card: Map view with nearby branches
        <Card key="map-view">
          <CardHeader>
            <CardTitle>Find a Branch Near You</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Google Maps iframe embed */}
            <div className="w-full h-40 rounded-md overflow-hidden mb-4 border border-gray-300">
              <iframe
                title="Branch Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.870391040206!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjIiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1717000000000!5m2!1sen!2sus"
              ></iframe>
            </div>
            {/* Nearby branches */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-medium">Downtown Branch</span>
                  <span className="text-xs text-muted-foreground">123 Main St, 0.5 mi</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  
                  className="ml-4"
                >
                  Schedule appointment
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-medium">Uptown Branch</span>
                  <span className="text-xs text-muted-foreground">456 Oak Ave, 1.2 mi</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  
                  className="ml-4"
                >
                  Schedule appointment
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>,
        <Card key="phone">
          <CardHeader>
            <CardTitle>Call Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This card will display the customer service phone number and hours.</p>
          </CardContent>
        </Card>
      ] }
    ]}
  />
);

export default CustomerServiceSmallTemplate; 