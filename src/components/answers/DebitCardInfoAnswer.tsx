import React from 'react';
import { Button } from "@/components/ui/button";

const DebitCardInfoAnswer = () => {
  return (
    <div className="h-full pr-4">
      <h4 className="font-semibold text-md mb-3">Debit Card Delivery Overview</h4>
      <p className="text-sm text-gray-700 mb-4">
        Your new debit card is on its way! Most cards arrive within 7–10 business days after ordering.
      </p>
      <div className="rounded-lg bg-slate-50 p-4">
        <h5 className="font-semibold text-gray-800 mb-2 text-base">Delivery Information</h5>
        <div className="space-y-1 text-sm text-gray-700">
          <p><span className="font-medium text-gray-900">Order date:</span> 05-23-2025</p>
          <p><span className="font-medium text-gray-900">Name on card:</span> Clark Kent</p>
          <p><span className="font-medium text-gray-900">Address:</span> 344 Clinton St, Apt 3B, Metropolis, NY 10001</p>
          <p><span className="font-medium text-gray-900">Account:</span> **1234</p>
        </div>
      </div>
      <div className="mt-4 flex space-x-3">
        <Button variant="outline" size="sm">+ Text alerts</Button>
        <Button variant="default" size="sm">Track my card</Button>
      </div>
    </div>
  );
};

export default DebitCardInfoAnswer; 