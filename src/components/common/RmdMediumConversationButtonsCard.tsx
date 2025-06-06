import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ConversationButton from "@/components/common/ConversationButton";

const conversationActions = [
  { label: "Which accounts require RMDs?", onClick: () => {} },
  { label: "What is the RMD penalty?", onClick: () => {} },
  { label: "How do I calculate my RMD?", onClick: () => {} },
];

const RmdMediumConversationButtonsCard: React.FC = () => (
  <Card className="w-full h-full">
    <CardHeader>
      <CardTitle>RMD Eligibility Questions</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col items-start space-y-2">
        {conversationActions.map((action, idx) => (
          <ConversationButton key={idx} onClick={action.onClick}>
            {action.label}
          </ConversationButton>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default RmdMediumConversationButtonsCard; 