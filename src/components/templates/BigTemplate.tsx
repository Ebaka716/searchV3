"use client";
import React from "react";
import TemplateContainer from "./TemplateContainer";
import CardGrid from "./CardGrid";

interface BigTemplateRow {
  type: "full" | "half" | "thirds";
  cards: React.ReactNode[];
}

interface BigTemplateProps {
  headerRef?: React.Ref<HTMLDivElement>;
  header?: string;
  preamble?: string;
  thinking?: React.ReactNode;
  rows?: BigTemplateRow[];
}

const BigTemplate: React.FC<BigTemplateProps> = ({
  headerRef,
  header = "Results for your query",
  preamble = "Here are the most relevant results based on your search and context. This preamble explains why you are seeing these results.",
  thinking = (
    <div className="mt-2 text-yellow-700 bg-yellow-50 border border-yellow-200 rounded p-3 text-sm">
      <span className="font-semibold">Thinking:</span> This is a placeholder for the model&apos;s reasoning or process. (Optional)
    </div>
  ),
  rows = [
    { type: "thirds", cards: ["Card 1 (2/3)", "Card 2 (1/3)"] },
    { type: "full", cards: ["Big Card (Full Width)"] },
    { type: "half", cards: ["Card 3 (1/2)", "Card 4 (1/2)"] },
    { type: "full", cards: ["Big Card (Full Width)"] },
  ],
}) => (
  <TemplateContainer
    headerRef={headerRef}
    header={header}
    preamble={preamble}
    thinking={thinking}
  >
    <CardGrid rows={rows} />
  </TemplateContainer>
);

export default BigTemplate; 