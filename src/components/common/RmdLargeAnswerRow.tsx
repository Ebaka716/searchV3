import React from "react";
import RmdInfoAnswer from "../answers/RmdInfoAnswer";
import ConversationButton from "@/components/common/ConversationButton";

const handleAddToFloatingInput = (value: string) => {
  window.dispatchEvent(new CustomEvent("add-to-floating-input", { detail: { value } }));
};

const conversationActions = [
  { label: "How do I calculate my RMD?", onClick: () => {} },
  { label: "Do I have to take an RMD", onClick: () => handleAddToFloatingInput("Do I have to take an RMD") },
  { label: "What accounts require RMDs?", onClick: () => {} },
  { label: "What happens if I miss my RMD?", onClick: () => {} },
];

const RmdLargeAnswerRow: React.FC = () => (
  <div className="w-full h-full">
    {/* Transparent card for tan background effect */}
    <div className="bg-transparent shadow-none border-none p-0">
      <RmdInfoAnswer />
      <div className="mt-2 mb-8">
        <div className="text-sm font-semibold text-zinc-700 mb-2">People often ask</div>
        <div className="flex flex-row flex-wrap gap-2 justify-start">
          {conversationActions.map((action, idx) => (
            <ConversationButton key={idx} onClick={action.onClick}>
              {action.label}
            </ConversationButton>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default RmdLargeAnswerRow; 