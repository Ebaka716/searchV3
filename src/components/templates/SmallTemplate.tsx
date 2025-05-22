import React from "react";
import TemplateContainer from "./TemplateContainer";
import CardGrid from "./CardGrid";

interface SmallTemplateProps {
  headerRef?: React.Ref<HTMLDivElement>;
  header?: string;
  preamble?: string;
  thinking?: React.ReactNode;
  cards?: React.ReactNode[];
}

const SmallTemplate: React.FC<SmallTemplateProps> = ({
  headerRef,
  header = "Quick Result",
  preamble = "This is a concise summary or answer.",
  thinking = (
    <div className="mt-2 text-yellow-700 bg-yellow-50 border border-yellow-200 rounded p-3 text-sm">
      <span className="font-semibold">Thinking:</span> This is a placeholder for the model&apos;s reasoning or process. (Optional)
    </div>
  ),
  cards = [
    "Main Card (Full Width)",
    "Side Card 1 (1/2)",
    "Side Card 2 (1/2)",
  ],
}) => (
  <TemplateContainer
    headerRef={headerRef}
    header={header}
    preamble={preamble}
    thinking={thinking}
  >
    <CardGrid variant="small-template" cards={cards} />
  </TemplateContainer>
);

export default SmallTemplate; 