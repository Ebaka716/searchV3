import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

const dividends = [
  { date: "2024-06-03", ticker: "AAPL", amount: "$15.00", account: "Brokerage\n***1234" },
  { date: "2024-06-12", ticker: "AAPL", amount: "$7.25", account: "Retirement\n***5678" },
  { date: "2024-06-20", ticker: "AAPL", amount: "$3.50", account: "Education\n***9012" },
  { date: "2024-06-25", ticker: "AAPL", amount: "$12.10", account: "Brokerage\n***1234" },
  { date: "2024-06-28", ticker: "AAPL", amount: "$9.75", account: "Retirement\n***5678" },
];

const DividendsLastMonthCard: React.FC = () => (
  <Card className="rounded-xl border bg-card">
    <CardHeader className="pb-2">
      <CardTitle className="text-lg font-semibold">
        Dividends from AAPL over the last month
      </CardTitle>
    </CardHeader>
    <CardContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Ticker</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Account</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dividends.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.ticker}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>
                {row.account.split("\n").map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);

export default DividendsLastMonthCard; 