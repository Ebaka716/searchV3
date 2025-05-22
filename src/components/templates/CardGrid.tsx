"use client";

import React from "react";

interface CardGridProps {
  variant: "big-template" | "2x2" | "single-row" | "small-template";
  cards: React.ReactNode[];
}

function isRealCard(card: React.ReactNode) {
  // If it's a valid React element, treat as a real card component
  return React.isValidElement(card);
}

const CardGrid: React.FC<CardGridProps> = ({ variant, cards }) => {
  if (variant === "big-template") {
    const hasRow1 = isRealCard(cards[0]) || isRealCard(cards[1]);
    const hasRow2 = isRealCard(cards[2]);
    const hasRow3 = isRealCard(cards[3]) || isRealCard(cards[4]);
    const hasRow4 = isRealCard(cards[5]);
    return (
      <>
        {/* Row 1: 2/3 and 1/3 cards */}
        {hasRow1 && (
          <div className="flex w-full gap-6">
            <div className="flex-2 basis-2/3 min-h-[120px]">
              {isRealCard(cards[0]) ? cards[0] : null}
            </div>
            <div className="flex-1 basis-1/3 min-h-[120px]">
              {isRealCard(cards[1]) ? cards[1] : null}
            </div>
          </div>
        )}
        {/* Row 2: Big card full width */}
        {hasRow2 && (
          <div className="w-full min-h-[120px]">
            {isRealCard(cards[2]) ? cards[2] : null}
          </div>
        )}
        {/* Row 3: Two cards, 1/2 width each */}
        {hasRow3 && (
          <div className="flex w-full gap-6">
            <div className="flex-1 basis-1/2 min-h-[120px]">
              {isRealCard(cards[3]) ? cards[3] : null}
            </div>
            <div className="flex-1 basis-1/2 min-h-[120px]">
              {isRealCard(cards[4]) ? cards[4] : null}
            </div>
          </div>
        )}
        {/* Row 4: Big card full width */}
        {hasRow4 && (
          <div className="w-full min-h-[120px]">
            {isRealCard(cards[5]) ? cards[5] : null}
          </div>
        )}
      </>
    );
  }
  if (variant === "small-template") {
    return (
      <>
        {/* Row 1: Single full-width card */}
        <div className="w-full min-h-[100px]">
          {isRealCard(cards[0]) ? cards[0] : (
            <div className="bg-blue-100 border-4 border-blue-300 rounded-2xl p-10 flex flex-col justify-center items-center text-lg font-bold text-blue-900 min-h-[100px]">
              {cards[0]}
            </div>
          )}
        </div>
        {/* Row 2: Two half-width cards */}
        <div className="flex w-full gap-6 mt-4">
          <div className="flex-1 basis-1/2 min-h-[100px]">
            {isRealCard(cards[1]) ? cards[1] : (
              <div className="bg-green-100 border-4 border-green-300 rounded-2xl p-10 flex flex-col justify-center items-center text-base font-semibold text-green-900 min-h-[100px]">
                {cards[1]}
              </div>
            )}
          </div>
          <div className="flex-1 basis-1/2 min-h-[100px]">
            {isRealCard(cards[2]) ? cards[2] : (
              <div className="bg-yellow-100 border-4 border-yellow-300 rounded-2xl p-10 flex flex-col justify-center items-center text-base font-semibold text-yellow-900 min-h-[100px]">
                {cards[2]}
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
  if (variant === "2x2") {
    return (
      <div className="grid grid-cols-2 gap-6">
        {cards.map((card, idx) =>
          isRealCard(card) ? (
            <React.Fragment key={idx}>{card}</React.Fragment>
          ) : (
            <div key={idx} className="bg-gray-200 rounded-2xl p-10 flex flex-col justify-center items-center min-h-[120px]">
              {card}
            </div>
          )
        )}
      </div>
    );
  }
  if (variant === "single-row") {
    return (
      <div className="flex w-full gap-6">
        {cards.map((card, idx) =>
          isRealCard(card) ? (
            <React.Fragment key={idx}>{card}</React.Fragment>
          ) : (
            <div key={idx} className="flex-1 bg-gray-200 rounded-2xl p-10 flex flex-col justify-center items-center min-h-[120px]">
              {card}
            </div>
          )
        )}
      </div>
    );
  }
  return null;
};

export default CardGrid; 