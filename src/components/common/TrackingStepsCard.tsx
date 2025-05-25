"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const orderedDate = "May 23, 2025";
const expectedDate = "June 2, 2025";

const steps = [
  { label: "Order received", status: "done" },
  { label: "Old card deactivated", status: "done" },
  { label: "Printing new card", status: "current" },
];

const TrackingStepsCard: React.FC = () => (
  <Card className="w-full">
    <CardHeader className="pb-2">
      <CardTitle className="text-xl font-bold mb-2">Tracking Information</CardTitle>
      <div className="flex items-start gap-3 text-2xl font-bold">
        <div className="flex flex-col items-start">
          <span className="text-xs font-medium text-zinc-500 mb-0.5">Ordered on</span>
          <span>{orderedDate}</span>
        </div>
        <span className="text-xl mt-5">→</span>
        <div className="flex flex-col items-start">
          <span className="text-xs font-medium text-zinc-500 mb-0.5">Expected delivery</span>
          <span>{expectedDate}</span>
          <Badge variant="default" className="bg-blue-100 border-blue-300 text-blue-900 mt-2 px-2 py-0.5 text-xs font-medium w-auto self-start">
            This package might be late
          </Badge>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <div className="mb-2 mt-4 text-xs font-semibold text-zinc-500 uppercase tracking-wide">Delivery steps</div>
      <ul className="space-y-3">
        {steps.map((step, idx) => (
          <li key={idx} className="flex items-center gap-3 text-base">
            {step.status === "done" ? (
              <CheckCircle className="text-green-600 w-5 h-5" />
            ) : step.status === "current" ? (
              <ArrowRight className="text-blue-600 w-5 h-5" />
            ) : null}
            <span className={step.status === "current" ? "font-semibold text-blue-900" : "text-zinc-800"}>{step.label}</span>
          </li>
        ))}
      </ul>
      <div className="flex gap-2 mt-6 justify-end w-full">
        <Button variant="outline">Sign up for notifications</Button>
        <Button variant="default">Contact support</Button>
      </div>
    </CardContent>
  </Card>
);

export default TrackingStepsCard; 