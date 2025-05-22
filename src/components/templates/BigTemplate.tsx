"use client";
import React from "react";
import TemplateContainer from "./TemplateContainer";
import CardGrid from "./CardGrid";

interface BigTemplateProps {
  headerRef?: React.Ref<HTMLDivElement>;
  header?: React.ReactNode;
  preamble?: React.ReactNode;
  thinking?: React.ReactNode;
  cards?: React.ReactNode[];
  cardGridVariant?: "big-template" | "2x2" | "single-row";
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
  cards = [
    "Card 1 (2/3)",
    "Card 2 (1/3)",
    "Big Card (Full Width)",
    "Card 3 (1/2)",
    "Card 4 (1/2)",
    "Big Card (Full Width)",
  ],
  cardGridVariant = "big-template",
}) => (
  <TemplateContainer
    headerRef={headerRef}
    header={header}
    preamble={preamble}
    thinking={thinking}
  >
    <CardGrid variant={cardGridVariant} cards={cards} />
  </TemplateContainer>
);

export default BigTemplate; 