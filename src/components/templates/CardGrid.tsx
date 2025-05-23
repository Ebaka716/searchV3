"use client";

import React from "react";

interface CardGridRow {
  type: "full" | "half" | "thirds";
  cards: React.ReactNode[];
}

interface CardGridProps {
  rows: CardGridRow[];
}

function isRealCard(card: React.ReactNode) {
  // If it's a valid React element, treat as a real card component
  return React.isValidElement(card);
}

const CardGrid: React.FC<CardGridProps> = ({ rows }) => {
  return (
    <>
      {rows.map((row, idx) => {
        if (row.type === "full") {
          return (
            <div key={idx} className="w-full min-h-[120px] mb-1">
              {isRealCard(row.cards[0]) ? row.cards[0] : null}
            </div>
          );
        }
        if (row.type === "half") {
          return (
            <div key={idx} className="flex w-full gap-6 mb-1">
              <div className="flex-1 basis-1/2 min-h-[120px]">
                {isRealCard(row.cards[0]) ? row.cards[0] : null}
              </div>
              <div className="flex-1 basis-1/2 min-h-[120px]">
                {isRealCard(row.cards[1]) ? row.cards[1] : null}
              </div>
            </div>
          );
        }
        if (row.type === "thirds") {
          return (
            <div key={idx} className="flex w-full gap-6 mb-1">
              <div className="flex-2 basis-2/3 min-h-[120px]">
                {isRealCard(row.cards[0]) ? row.cards[0] : null}
              </div>
              <div className="flex-1 basis-1/3 min-h-[120px]">
                {isRealCard(row.cards[1]) ? row.cards[1] : null}
              </div>
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default CardGrid; 