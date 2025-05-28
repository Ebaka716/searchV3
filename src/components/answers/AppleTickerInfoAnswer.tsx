import React from 'react';
import { Button } from '@/components/ui/button';
import { Bell, ListPlus, TrendingUp, TrendingDown, Link as LinkIcon } from 'lucide-react'; // Renamed Link to LinkIcon to avoid conflict
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const AppleTickerInfoAnswer = () => {
  return (
    <div className="h-full flex flex-col text-xs font-sans">
      {/* Header */}
      <div className="text-gray-500 text-[10px] mb-1">
        NasdaqGS - Nasdaq Real Time Price - USD
      </div>

      {/* Company Info */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">Apple Inc. (AAPL)</h3>
        {/* Follow button was removed as per user request */}
      </div>

      {/* Current Price */}
      <div className="mb-2">
        <div className="flex items-end">
          <span className="text-2xl font-bold mr-1">195.27</span>
          <span className="text-red-600 font-semibold text-sm flex items-center">
            <TrendingDown className="w-3 h-3 mr-0.5" /> -6.09 (-3.02%)
          </span>
        </div>
        <div className="text-gray-500 text-[10px]">
          At close: May 23 at 4:00:01 PM EDT
        </div>
      </div>

      {/* Pre-Market Price */}
      <div className="mb-3">
        <div className="flex items-end">
          <span className="text-xl font-bold mr-1">198.74</span>
          <span className="text-green-600 font-semibold text-sm flex items-center">
            <TrendingUp className="w-3 h-3 mr-0.5" /> +3.47 (+1.78%)
          </span>
        </div>
        <div className="text-gray-500 text-[10px]">
          Pre-Market: 9:10:17 AM EDT 
        </div>
      </div>

      {/* Spacer to push actions to bottom */}
      <div className="flex-grow"></div>

      {/* Action Row */}
      <TooltipProvider delayDuration={200}>
        <div className="grid grid-cols-5 gap-1 pt-2 border-t border-gray-200 mt-auto">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" className="text-[10px] px-1 py-0.5 h-auto leading-tight">
                Buy
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Buy AAPL Stock</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" className="text-[10px] px-1 py-0.5 h-auto leading-tight">
                Sell
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Sell AAPL Stock</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" className="text-[10px] px-1 py-0.5 h-auto leading-tight flex items-center justify-center">
                <ListPlus className="w-3.5 h-3.5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to Watchlist</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" className="text-[10px] px-1 py-0.5 h-auto leading-tight flex items-center justify-center">
                <Bell className="w-3.5 h-3.5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Create Alert</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" className="text-[10px] px-1 py-0.5 h-auto leading-tight flex items-center justify-center">
                <LinkIcon className="w-3.5 h-3.5" /> {/* Used LinkIcon */}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>View Options Chain</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </div>
  );
};

export default AppleTickerInfoAnswer; 