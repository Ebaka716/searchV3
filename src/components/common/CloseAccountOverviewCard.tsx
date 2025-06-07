import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

const CloseAccountOverviewCard = () => (
  <Card className="border">
    <CardHeader>
      <div className="flex flex-col items-start mb-2 w-full">
        <div className="flex items-center justify-between w-full mb-2">
          <div className="flex items-center justify-center w-12 h-12 bg-zinc-100 rounded-xl border border-zinc-200">
            <LogOut className="w-6 h-6 text-blue-500" />
          </div>
        </div>
        <CardTitle>Close Account Overview</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <div className="text-base text-zinc-800 mb-2">You have 1 account which is eligible:</div>
      <div className="flex items-center justify-between bg-zinc-50 border border-zinc-200 rounded-md px-4 py-3 mb-2">
        <div className="flex flex-col">
          <span className="font-medium text-zinc-800">Account</span>
          <span className="text-sm text-zinc-600">Individual x 3458976</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="font-medium text-zinc-800">Balance</span>
          <span className="text-sm text-green-700 font-semibold">$0.00</span>
        </div>
      </div>
    </CardContent>
    <CardFooter className="flex gap-3 justify-end">
      <Button variant="ghost">Show all accounts</Button>
      <Button variant="default">Get started</Button>
    </CardFooter>
  </Card>
);

export default CloseAccountOverviewCard; 