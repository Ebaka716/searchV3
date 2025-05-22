import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import ConversationButton from "./ConversationButton";

export function DetailedQuoteCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Detailed quote</CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="table-sm">
          <TableBody>
            <TableRow>
              <TableCell className="font-medium py-3">Open</TableCell>
              <TableCell className="text-right py-3">176</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium py-3">Previous close</TableCell>
              <TableCell className="text-right py-3">176.75</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium py-3">P/E ratio</TableCell>
              <TableCell className="text-right py-3">28.5</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium py-3">Options</TableCell>
              <TableCell className="text-right py-3">Available</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium py-3">Current dividend/ex-date</TableCell>
              <TableCell className="text-right py-3">0.96 / Aug 10, 2024</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium py-3">Estimated dividend rate/yield</TableCell>
              <TableCell className="text-right py-3">0.96 / 0.55%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium py-3">Sector</TableCell>
              <TableCell className="text-right py-3">Technology</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium py-3">Market cap</TableCell>
              <TableCell className="text-right py-3">2.7T</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 items-start pt-4">
        <ConversationButton>What is P/E ratio?</ConversationButton>
        <ConversationButton>How is market cap calculated?</ConversationButton>
        <ConversationButton>What are options?</ConversationButton>
      </CardFooter>
    </Card>
  );
}

export default DetailedQuoteCard; 