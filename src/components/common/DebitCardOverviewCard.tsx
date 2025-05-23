import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";

const deliveryStages = [
  "Ordered",
  "Shipped",
  "Out for Delivery",
  "Delivered"
];

const currentStage = 0; // 0-based index, e.g., "Ordered" (green fill stops before 'Shipped')

const DebitCardOverviewCard: React.FC = () => (
  <Card>
    <CardHeader>
      <div className="flex flex-col items-start mb-2 w-full">
        <div className="flex items-center justify-between w-full mb-2">
          <div className="flex items-center justify-center w-12 h-12 bg-zinc-100 rounded-xl border border-zinc-200">
            <CreditCard className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <CardTitle>Debit Card Delivery Overview</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <p className="mb-4 text-zinc-700">
        Your new debit card is on its way! Most cards arrive within 7–10 business days after ordering. Below you can track the typical delivery process and see what to expect.
      </p>
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 flex flex-col items-center">
          <div className="flex items-center w-full justify-between mb-2">
            {deliveryStages.map((stage, idx) => (
              <React.Fragment key={stage}>
                <div className="flex flex-col items-center flex-1 min-w-0">
                  <div
                    className={`w-4 h-4 rounded-full border-2 mb-1 ${idx <= currentStage ? 'bg-green-500 border-green-600' : 'bg-zinc-200 border-zinc-300'}`}
                  />
                  <span className={`text-xs text-center truncate max-w-[80px] ${idx <= currentStage ? 'text-green-700 font-semibold' : 'text-zinc-400'}`}>{stage}</span>
                </div>
                {idx < deliveryStages.length - 1 && (
                  idx === 0 ? (
                    // Half-filled connector after 'Ordered'
                    <div className="flex-1 h-1 mx-1 relative">
                      <div className="absolute left-0 top-0 h-1 w-1/2 bg-green-400 rounded-l" />
                      <div className="absolute right-0 top-0 h-1 w-1/2 bg-zinc-200 rounded-r" />
                    </div>
                  ) : (
                    <div className={`flex-1 h-1 mx-1 ${idx < currentStage ? 'bg-green-400' : 'bg-zinc-200'}`}></div>
                  )
                )}
              </React.Fragment>
            ))}
          </div>
          {/* Below progress bar: delivery information section */}
          <div className="w-full flex flex-col items-start mt-4 space-y-1 text-sm bg-zinc-50 rounded-md p-3 border border-zinc-100">
            <div className="font-semibold text-zinc-700 mb-3">Delivery Information</div>
            <div><span className="font-medium text-zinc-700">Order date:</span> <span className="text-zinc-600">2024-06-20</span></div>
            <div><span className="font-medium text-zinc-700">Name:</span> <span className="text-zinc-600">Clark Kent</span></div>
            <div><span className="font-medium text-zinc-700">Address:</span> <span className="text-zinc-600">344 Clinton St, Apt 3B, Metropolis, NY 10001</span></div>
            <div><span className="font-medium text-zinc-700">Account:</span> <span className="font-bold text-zinc-700">**1234</span></div>
          </div>
        </div>
      </div>
    </CardContent>
    <CardFooter className="flex gap-4 justify-end">
      <Button variant="outline">Track My Card</Button>
      <Button variant="default">Contact Support</Button>
    </CardFooter>
  </Card>
);

export default DebitCardOverviewCard; 