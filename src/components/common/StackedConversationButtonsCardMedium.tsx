"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ConversationButton from "@/components/common/ConversationButton";

const conversationActionsMedium = [
  { label: "When will my debit card arrive?", onClick: () => {} },
  { label: "How do I track my card delivery?", onClick: () => {} },
  { label: "What should I do if my card is lost?", onClick: () => {} },
  { label: "How do I request a replacement card?", onClick: () => {} },
  { label: "Can I use my old card until the new one arrives?", onClick: () => {} },
  { label: "How do I activate my new debit card?", onClick: () => {} },
];

const StackedConversationButtonsCardMedium: React.FC = () => (
  <Card className="w-full h-full">
    <CardHeader>
      <CardTitle>Common questions</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col items-start space-y-2">
        {conversationActionsMedium.map((action, idx) => (
          <ConversationButton key={idx} onClick={action.onClick}>
            {action.label}
          </ConversationButton>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default StackedConversationButtonsCardMedium; 