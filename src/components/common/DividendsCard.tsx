import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, Tooltip as RechartsTooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar } from "recharts";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import ConversationButton from "./ConversationButton";

const growthData = [
  { year: "2022", AAPL: 8, Market: 6 },
  { year: "2023", AAPL: 6, Market: 5 },
  { year: "2024", AAPL: 4, Market: 4 },
  { year: "2025", AAPL: 3, Market: 4 },
];

const payoutDataPrev = [
  { name: "Payout", value: 15 },
  { name: "Remainder", value: 85 },
];
const payoutDataCurr = [
  { name: "Payout", value: 16 },
  { name: "Remainder", value: 84 },
];
const pieColors = ["#2563eb", "#e5e7eb"];

// Helper to render stat row with plus-bubble
function StatRowPlusBubble({ label, value, sublabel }: { label: string; value: string; sublabel?: string }) {
  return (
    <div className="relative group">
      <div className="font-semibold group-hover:underline cursor-pointer flex flex-col">
        {label}<br/>
        {sublabel && <span className="font-normal text-muted-foreground">{sublabel}</span>}
        <span className="font-bold">{value}</span>
      </div>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <button
            type="button"
            className="absolute top-0 right-0 mt-[-10px] mr-[-10px] hidden group-hover:flex items-center justify-center w-6 h-6 rounded-full bg-teal-600 text-white shadow-lg z-10 transition-all duration-150 hover:bg-teal-700"
            onClick={() => {
              window.dispatchEvent(new CustomEvent('add-to-floating-input', { detail: { value: `${label}: ${value}` } }));
            }}
            aria-label={`Add ${label} to input bar`}
          >
            <span className="text-lg leading-none font-bold">+</span>
          </button>
        </TooltipTrigger>
        <TooltipContent side="top" className="bg-black text-white px-3 py-1.5 text-xs rounded-md">
          Have a question?
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

const DividendsCard = () => {
  return (
    <Card className="rounded-xl border bg-card">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold">Dividends</CardTitle>
        <Button variant="ghost" size="sm" className="text-muted-foreground">More &rarr;</Button>
      </CardHeader>
      <CardContent className="pt-0">
        {/* Stat Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-4 gap-y-2 text-xs border-b pb-3 mb-3 w-full">
          {StatRowPlusBubble({ label: "Dividend Amount", value: "$0.2500", sublabel: "(MOST RECENT)" })}
          {StatRowPlusBubble({ label: "Announcement Date", value: "01/30/2025" })}
          {StatRowPlusBubble({ label: "Ex-Div Date", value: "02/10/2025" })}
          {StatRowPlusBubble({ label: "Record Date", value: "02/10/2025" })}
          {StatRowPlusBubble({ label: "Pay Date", value: "02/13/2025" })}
          {StatRowPlusBubble({ label: "Dividend Frequency", value: "Quarterly" })}
        </div>
        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Strength */}
          <div className="flex flex-col items-start border-r md:pr-4">
            <div className="text-sm font-bold text-muted-foreground mb-1 text-left">Strength</div>
            <div className="text-xs font-normal mb-2 text-left">Dividend Yield</div>
            <div className="w-full flex flex-col gap-2">
              <ResponsiveContainer width="100%" height={24}>
                <BarChart data={[{ name: 'AAPL', value: 0.47 }]}
                  layout="vertical"
                  margin={{ top: 0, right: 10, left: 0, bottom: 0 }}
                  barCategoryGap={0}
                >
                  <XAxis type="number" domain={[0, 3.5]} hide />
                  <YAxis type="category" dataKey="name" hide />
                  <Bar dataKey="value" fill="#2563eb" radius={[4, 4, 4, 4]} barSize={12} />
                  <RechartsTooltip formatter={(v) => `${v}%`} />
                </BarChart>
              </ResponsiveContainer>
              <div className="flex justify-between w-full text-xs">
                <span className="font-semibold text-blue-700">0.47% AAPL</span>
              </div>
              <ResponsiveContainer width="100%" height={24}>
                <BarChart data={[{ name: 'Market Median', value: 3.09 }]}
                  layout="vertical"
                  margin={{ top: 0, right: 10, left: 0, bottom: 0 }}
                  barCategoryGap={0}
                >
                  <XAxis type="number" domain={[0, 3.5]} hide />
                  <YAxis type="category" dataKey="name" hide />
                  <Bar dataKey="value" fill="#a3a3a3" radius={[4, 4, 4, 4]} barSize={12} />
                  <RechartsTooltip formatter={(v) => `${v}%`} />
                </BarChart>
              </ResponsiveContainer>
              <div className="flex justify-between w-full text-xs">
                <span className="font-semibold text-gray-500">3.09% Market Median</span>
              </div>
            </div>
          </div>
          {/* Sustainability */}
          <div className="flex flex-col items-center border-r md:px-4">
            <div className="text-sm font-bold text-muted-foreground mb-1 text-left w-full">Sustainability</div>
            <div className="text-xs font-normal text-left w-full">Dividend Payout Ratio</div>
            <div className="flex gap-4 mt-6">
              <div className="flex flex-col items-center">
                <ResponsiveContainer width={48} height={48}>
                  <PieChart>
                    <Pie data={payoutDataPrev} dataKey="value" innerRadius={16} outerRadius={24} startAngle={90} endAngle={-270} stroke="none">
                      {payoutDataPrev.map((entry, idx) => (
                        <Cell key={`cell-prev-${idx}`} fill={pieColors[idx]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <span className="text-lg font-bold mt-2 mb-2">15%</span>
                <span className="text-xs text-muted-foreground mt-2">Previous Trailing<br/>(12 MONTHS)</span>
              </div>
              <div className="flex flex-col items-center">
                <ResponsiveContainer width={48} height={48}>
                  <PieChart>
                    <Pie data={payoutDataCurr} dataKey="value" innerRadius={16} outerRadius={24} startAngle={90} endAngle={-270} stroke="none">
                      {payoutDataCurr.map((entry, idx) => (
                        <Cell key={`cell-curr-${idx}`} fill={pieColors[idx]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <span className="text-lg font-bold mt-2 mb-2">16%</span>
                <span className="text-xs text-muted-foreground mt-2">Current Trailing<br/>(12 MONTHS)</span>
              </div>
            </div>
          </div>
          {/* Growth */}
          <div className="flex flex-col items-center md:pl-4">
            <div className="text-sm font-bold text-muted-foreground mb-1 text-left w-full">Growth</div>
            <div className="text-xs font-normal text-left w-full">Annualized Dividend (YoY % chg.)</div>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={growthData} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 14, fontWeight: 700, fill: '#222' }} />
                <YAxis domain={[0, 8]} ticks={[8, 6, 4, 2, 0]} tickFormatter={(v) => `${v}%`} axisLine={false} tickLine={false} tick={{ fontSize: 14, fontWeight: 700, fill: '#222' }} />
                <RechartsTooltip formatter={(v) => `${v}%`} />
                <Legend verticalAlign="top" align="left" height={32} iconType="circle" wrapperStyle={{ fontSize: 12, fontWeight: 500 }} />
                <Line type="monotone" dataKey="AAPL" stroke="#2563eb" strokeWidth={3} dot={{ r: 4, fill: '#2563eb', stroke: '#fff', strokeWidth: 2 }} name="AAPL" />
                <Line type="monotone" dataKey="Market" stroke="#d1d5db" strokeWidth={3} dot={{ r: 4, fill: '#d1d5db', stroke: '#fff', strokeWidth: 2 }} name="Market Median" />
              </LineChart>
            </ResponsiveContainer>
            <div className="text-xs text-muted-foreground mt-1">(Annualized as of last ex-date 02/10/2025)</div>
          </div>
        </div>
      </CardContent>
      <div className="flex flex-row gap-3 px-6 pb-4 pt-2">
        {["Dividend History", "Payout Ratio", "Compare Peers"].map((label) => (
          <ConversationButton
            key={label}
            onClick={() => {
              window.dispatchEvent(
                new CustomEvent('add-to-floating-input', { detail: { value: label } })
              );
            }}
            className="transition-all duration-200"
          >
            {label}
          </ConversationButton>
        ))}
      </div>
    </Card>
  );
};

export default DividendsCard; 