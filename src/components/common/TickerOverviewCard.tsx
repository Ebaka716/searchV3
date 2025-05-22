import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Bell, Filter, Link as LinkIcon, Plus } from "lucide-react";

// You can replace this with a real SVG or icon component for the Apple logo
const AppleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.5 17.5c.1 2.7 2.4 3.6 2.5 3.7-.1.3-.4 1.2-1.1 2.3-.7 1-1.4 2-2.5 2-1.1 0-1.4-.6-2.7-.6s-1.7.6-2.7.6-1.8-.9-2.5-2c-1.7-2.5-3-7.1-1.2-9.1.7-.8 1.8-1.3 2.8-1.3 1.1 0 2 .7 2.7.7.7 0 1.8-.8 3-.7.5 0 1.9.2 2.8 1.4-.1.1-2.3 1.3-2.2 3.8zM20.7 7.2c.5-.6 1.2-1 1.9-1.1.1.7-.2 1.5-.7 2.1-.5.6-1.1 1.1-1.9 1-.1-.7.2-1.5.7-2z" fill="#000"/>
  </svg>
);

interface TickerOverviewCardProps {
  name?: string;
  price?: string;
  change?: string;
  changePct?: string;
  changePositive?: boolean;
  preMarketLabel?: string;
  preMarketPrice?: string;
  preMarketChange?: string;
  preMarketChangePct?: string;
  preMarketNegative?: boolean;
  timestamp?: string;
  onBuy?: () => void;
  onSell?: () => void;
  onAdd?: () => void;
  onAlert?: () => void;
  onFilter?: () => void;
  onLink?: () => void;
}

const TickerOverviewCard: React.FC<TickerOverviewCardProps> = ({
  name = "Apple",
  price = "$211.21",
  change = "+1.07",
  changePct = "+0.51%",
  changePositive = true,
  preMarketLabel = "Pre-market",
  preMarketPrice = "209.4",
  preMarketChange = "-1.81",
  preMarketChangePct = "-0.856967",
  preMarketNegative = true,
  timestamp = "Apr-29-2025 4:00:00 PM ET",
  onBuy,
  onSell,
  onAdd,
  onAlert,
  onFilter,
  onLink,
}) => {
  return (
    <Card className="p-6 min-h-full flex-1 flex flex-col justify-between">
      <div>
        <CardHeader className="p-0 mb-2">
          <div className="flex items-center gap-2">
            <AppleIcon />
            <CardTitle className="text-lg font-bold text-zinc-900">{name}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-0 flex flex-col gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-3xl font-bold text-zinc-900">{price}</span>
            <span className={`text-base font-semibold ${changePositive ? 'text-green-600' : 'text-red-600'}`}>{change} ({changePct})</span>
            <span className="ml-1 text-base text-zinc-700">&#8635;</span>
          </div>
          <div className="flex items-center gap-1 flex-wrap text-sm">
            <span className="text-yellow-500">&#9728;&#65039;</span>
            <span className="underline decoration-dotted cursor-pointer">{preMarketLabel}</span>
            <span className="font-semibold text-zinc-900">{preMarketPrice}</span>
            <span className="text-zinc-500">XNMS</span>
            <span className={`font-semibold ${preMarketNegative ? 'text-red-600' : 'text-green-600'}`}>{preMarketChange} ({preMarketChangePct})</span>
          </div>
          <div className="text-zinc-700 text-xs mt-1">
            As of {timestamp} | Quotes delayed at least 15 min. <span className="font-semibold">Log in</span> for real-time quotes.
          </div>
        </CardContent>
      </div>
      <CardFooter className="p-0 pt-4 flex flex-wrap gap-2">
        <Button onClick={onBuy} className="bg-black text-white font-semibold rounded-lg px-4 py-2 text-sm hover:bg-zinc-800 transition">Buy</Button>
        <Button onClick={onSell} className="bg-black text-white font-semibold rounded-lg px-4 py-2 text-sm hover:bg-zinc-800 transition">Sell</Button>
        <Button onClick={onAdd} variant="outline" className="rounded-lg px-3 py-2 text-sm flex items-center justify-center"><Plus size={16} /></Button>
        <Button onClick={onAlert} variant="outline" className="rounded-lg px-3 py-2 text-sm flex items-center justify-center"><Bell size={16} /></Button>
        <Button onClick={onFilter} variant="outline" className="rounded-lg px-3 py-2 text-sm flex items-center justify-center"><Filter size={16} /></Button>
        <Button onClick={onLink} variant="outline" className="rounded-lg px-3 py-2 text-sm flex items-center justify-center"><LinkIcon size={16} /></Button>
      </CardFooter>
    </Card>
  );
};

export default TickerOverviewCard; 