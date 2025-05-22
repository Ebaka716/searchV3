"use client";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ApexOptions } from "apexcharts";

// Choppy, realistic mock candlestick data for AAPL (frequent alternation of red/green)
const series = [
  {
    data: [
      { x: new Date("2024-03-01"), y: [92, 94, 91, 93] }, // up
      { x: new Date("2024-03-02"), y: [93, 94, 92, 92.5] }, // down
      { x: new Date("2024-03-03"), y: [92.5, 95, 92, 94.5] }, // up
      { x: new Date("2024-03-04"), y: [94.5, 95, 93, 93.2] }, // down
      { x: new Date("2024-03-05"), y: [93.2, 96, 93, 95.8] }, // up
      { x: new Date("2024-03-06"), y: [95.8, 97, 95, 96.2] }, // up
      { x: new Date("2024-03-07"), y: [96.2, 97, 95, 95.1] }, // down
      { x: new Date("2024-03-08"), y: [95.1, 96, 94, 95.7] }, // up
      { x: new Date("2024-03-09"), y: [95.7, 97, 95, 96.5] }, // up
      { x: new Date("2024-03-10"), y: [96.5, 97, 95, 95.2] }, // down
      { x: new Date("2024-03-11"), y: [95.2, 96, 94, 95.8] }, // up
      { x: new Date("2024-03-12"), y: [95.8, 97, 95, 96.7] }, // up
      { x: new Date("2024-03-13"), y: [96.7, 98, 96, 97.2] }, // up
      { x: new Date("2024-03-14"), y: [97.2, 98, 96, 96.1] }, // down
      { x: new Date("2024-03-15"), y: [96.1, 97, 95, 96.8] }, // up
      { x: new Date("2024-03-16"), y: [96.8, 98, 96, 97.5] }, // up
      { x: new Date("2024-03-17"), y: [97.5, 98, 96, 96.3] }, // down
      { x: new Date("2024-03-18"), y: [96.3, 97, 95, 96.9] }, // up
      { x: new Date("2024-03-19"), y: [96.9, 98, 96, 97.6] }, // up
      { x: new Date("2024-03-20"), y: [97.6, 98, 96, 96.2] }, // down
      { x: new Date("2024-03-21"), y: [96.2, 97, 95, 96.7] }, // up
      { x: new Date("2024-03-22"), y: [96.7, 98, 96, 97.3] }, // up
      { x: new Date("2024-03-23"), y: [97.3, 98, 96, 96.1] }, // down
      { x: new Date("2024-03-24"), y: [96.1, 97, 95, 96.8] }, // up
      { x: new Date("2024-03-25"), y: [96.8, 98, 96, 97.4] }, // up
      { x: new Date("2024-03-26"), y: [97.4, 98, 96, 96.2] }, // down
      { x: new Date("2024-03-27"), y: [96.2, 97, 95, 96.9] }, // up
      { x: new Date("2024-03-28"), y: [96.9, 98, 96, 97.5] }, // up
      { x: new Date("2024-03-29"), y: [97.5, 98, 96, 96.3] }, // down
      { x: new Date("2024-03-30"), y: [96.3, 97, 95, 96.8] }, // up
      { x: new Date("2024-03-31"), y: [96.8, 98, 96, 97.6] }, // up
      { x: new Date("2024-04-01"), y: [97.6, 98, 96, 96.2] }, // down
      { x: new Date("2024-04-02"), y: [96.2, 97, 95, 96.7] }, // up
      { x: new Date("2024-04-03"), y: [96.7, 98, 96, 97.3] }, // up
      { x: new Date("2024-04-04"), y: [97.3, 98, 96, 96.1] }, // down
      { x: new Date("2024-04-05"), y: [96.1, 97, 95, 96.8] }, // up
      { x: new Date("2024-04-06"), y: [96.8, 98, 96, 97.4] }, // up
      { x: new Date("2024-04-07"), y: [97.4, 98, 96, 96.2] }, // down
      { x: new Date("2024-04-08"), y: [96.2, 97, 95, 96.9] }, // up
      { x: new Date("2024-04-09"), y: [96.9, 98, 96, 97.5] }, // up
      { x: new Date("2024-04-10"), y: [97.5, 98, 96, 96.3] }, // down
      { x: new Date("2024-04-11"), y: [96.3, 97, 95, 96.8] }, // up
      { x: new Date("2024-04-12"), y: [96.8, 98, 96, 97.6] }, // up
      { x: new Date("2024-04-13"), y: [97.6, 98, 96, 96.2] }, // down
      { x: new Date("2024-04-14"), y: [96.2, 97, 95, 96.7] }, // up
      { x: new Date("2024-04-15"), y: [96.7, 98, 96, 97.3] }, // up
      { x: new Date("2024-04-16"), y: [97.3, 98, 96, 96.1] }, // down
      { x: new Date("2024-04-17"), y: [96.1, 97, 95, 96.8] }, // up
      { x: new Date("2024-04-18"), y: [96.8, 98, 96, 97.4] }, // up
      { x: new Date("2024-04-19"), y: [97.4, 98, 96, 96.2] }, // down
      { x: new Date("2024-04-20"), y: [96.2, 97, 95, 96.9] }, // up
      { x: new Date("2024-04-21"), y: [96.9, 98, 96, 97.5] }, // up
      { x: new Date("2024-04-22"), y: [97.5, 98, 96, 96.3] }, // down
      { x: new Date("2024-04-23"), y: [96.3, 97, 95, 96.8] }, // up
      { x: new Date("2024-04-24"), y: [96.8, 98, 96, 97.6] }, // up
      { x: new Date("2024-04-25"), y: [97.6, 98, 96, 96.2] }, // down
      { x: new Date("2024-04-26"), y: [96.2, 97, 95, 96.7] }, // up
      { x: new Date("2024-04-27"), y: [96.7, 98, 96, 97.3] }, // up
      { x: new Date("2024-04-28"), y: [97.3, 98, 96, 96.1] }, // down
      { x: new Date("2024-04-29"), y: [96.1, 97, 95, 96.8] }, // up
    ],
  },
];

const options: ApexOptions = {
  chart: {
    type: "candlestick",
    height: 350,
    toolbar: { show: false },
    animations: { enabled: false },
  },
  xaxis: {
    type: "datetime",
    labels: { show: true },
  },
  yaxis: {
    tooltip: { enabled: true },
    labels: { show: true },
  },
  grid: { show: true },
  plotOptions: {
    candlestick: {
      colors: {
        upward: "#16a34a", // green
        downward: "#ef4444", // red
      },
    },
  },
  tooltip: {
    enabled: true,
  },
};

const timeSpans = ["1D", "5D", "1M", "6M", "YTD", "1Y"];

export function CandlestickCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Default Symbol (AAPL)</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ width: "100%", minHeight: 320 }}>
          <ReactApexChart options={options} series={series} type="candlestick" height={320} />
        </div>
      </CardContent>
      <CardFooter className="flex justify-center gap-2 pt-4">
        {timeSpans.map((span) => (
          <Button key={span} variant="outline" size="sm" className="rounded-md px-4 font-medium">
            {span}
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
}

export default CandlestickCard; 