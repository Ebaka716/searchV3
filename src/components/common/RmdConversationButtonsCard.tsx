import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ConversationButton from "@/components/common/ConversationButton";

const handleAddToFloatingInput = (value: string) => {
  window.dispatchEvent(new CustomEvent("add-to-floating-input", { detail: { value } }));
};

const conversationActions = [
  { label: "How do I calculate my RMD?", onClick: () => {} },
  { label: "Do I have to take an RMD", onClick: () => handleAddToFloatingInput("Do I have to take an RMD") },
  { label: "What accounts require RMDs?", onClick: () => {} },
  { label: "What happens if I miss my RMD?", onClick: () => {} },
  { label: "When do I need to take my RMD?", onClick: () => {} },
];

const RmdConversationButtonsCard: React.FC = () => (
  <Card className="w-full h-full">
    <CardHeader>
      <CardTitle>Common RMD Questions</CardTitle>
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

export default RmdConversationButtonsCard; 