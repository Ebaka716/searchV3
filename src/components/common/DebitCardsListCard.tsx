"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";

interface DebitCardInfo {
  name: string;
  number: string;
}

const cards: DebitCardInfo[] = [
  { name: "Checking Account", number: "•••• 1234" },
  { name: "Savings Account", number: "•••• 5678" },
  { name: "Business Account", number: "•••• 9012" },
];

const DebitCardsListCard: React.FC = () => (
  <Card className="w-full h-full">
    <CardHeader>
      <CardTitle>Your Debit Cards</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-3">
        {cards.map((card, idx) => (
          <li key={idx} className="flex items-start justify-between p-2">
            <div className="flex items-start space-x-3">
              <CreditCard className="h-5 w-5 text-muted-foreground mt-1" />
              <div className="flex flex-col">
                <span className="font-medium leading-tight">{card.name}</span>
                <span className="text-sm text-muted-foreground leading-tight">{card.number}</span>
              </div>
            </div>
            <Button variant="secondary" size="sm" className="transition-colors hover:bg-primary hover:text-white">Request New Card</Button>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default DebitCardsListCard; 