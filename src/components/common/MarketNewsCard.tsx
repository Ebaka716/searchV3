import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const newsItems = [
  {
    headline: "Trump trade war spreads more gloom across businesses worldwide",
    source: "Reuters",
    time: "3:15 PM ET",
    date: "May-22-2025",
  },
  {
    headline: "Wall Street ends higher on tech boost, easing tariff tensions",
    source: "Reuters",
    time: "4:23 PM ET",
    date: "May-22-2025",
  },
  {
    headline: "US labor market holds steady for now; tariffs keep businesses on edge",
    source: "Reuters",
    time: "12:53 PM ET",
    date: "May-22-2025",
  },
  {
    headline: "US durable goods orders soar on aircraft bookings in March",
    source: "Reuters",
    time: "9:11 AM ET",
    date: "May-22-2025",
  },
  {
    headline: "Intel forecasts weak revenue amid trade tensions, shares fall",
    source: "Reuters",
    time: "33 mins ago",
    date: "",
  },
];

export function MarketNewsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Market news</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Select defaultValue="top">
            <SelectTrigger className="w-40 bg-white border border-zinc-200 shadow-sm rounded-lg">
              <SelectValue placeholder="Top news" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="top">Top news</SelectItem>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="markets">Markets</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-4">
          {newsItems.map((item, idx) => (
            <div key={idx}>
              <div className="font-medium text-base leading-snug mb-0.5 hover:underline hover:text-blue-700 cursor-pointer transition-colors">
                {item.headline}
              </div>
              <div className="text-xs text-muted-foreground">
                {item.source} · {item.time}{item.date ? ` · ${item.date}` : ""}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-end border-t pt-4 mt-4 gap-2">
        <Button variant="ghost" size="sm" className="px-2 text-zinc-700 font-medium">1</Button>
        <Button variant="ghost" size="sm" className="px-2 text-zinc-700 font-medium">2</Button>
        <Button variant="ghost" size="sm" className="px-2 text-zinc-700 font-medium">Next</Button>
      </CardFooter>
    </Card>
  );
}

export default MarketNewsCard; 