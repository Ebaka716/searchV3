import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import ConversationButton from "./ConversationButton";

const topics = [
  "Chart+",
  "Dividends & Earnings",
  "Sentiment",
  "Analyst Ratings",
  "Statistics",
];

const StackedConversationCard: React.FC = () => {
  return (
    <Card className="p-6">
      <CardHeader className="p-0 mb-2">
        <CardTitle className="text-xl font-semibold text-zinc-900">Research topics</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex flex-col gap-3 items-start">
          {topics.map((topic) =>
            topic === "Dividends & Earnings" ? (
              <ConversationButton
                key={topic}
                onClick={() =>
                  window.dispatchEvent(
                    new CustomEvent('add-to-floating-input', { detail: { value: "apple dividends and earnings" } })
                  )
                }
              >
                {topic}
              </ConversationButton>
            ) : (
              <ConversationButton key={topic}>{topic}</ConversationButton>
            )
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StackedConversationCard; 