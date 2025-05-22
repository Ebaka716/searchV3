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
    return (
      <>
        {/* Row 1: 2/3 and 1/3 cards */}
        <div className="flex w-full gap-6">
          <div className="flex-2 basis-2/3 min-h-[120px]">
            {isRealCard(cards[0]) ? cards[0] : (
              <div className="bg-blue-200 border-4 border-blue-500 rounded-2xl shadow-lg p-10 flex flex-col justify-center items-center text-xl font-extrabold text-blue-900 min-h-[120px]">
                {cards[0]}
              </div>
            )}
          </div>
          <div className="flex-1 basis-1/3 min-h-[120px]">
            {isRealCard(cards[1]) ? cards[1] : (
              <div className="bg-green-200 border-4 border-green-500 rounded-2xl shadow-lg p-10 flex flex-col justify-center items-center text-lg font-bold text-green-900 min-h-[120px]">
                {cards[1]}
              </div>
            )}
          </div>
        </div>
        {/* Row 2: Big card full width */}
        <div className="w-full min-h-[120px]">
          {isRealCard(cards[2]) ? cards[2] : (
            <div className="bg-purple-200 border-4 border-purple-500 rounded-2xl shadow-lg p-10 flex flex-col justify-center items-center text-2xl font-extrabold text-purple-900 min-h-[120px]">
              {cards[2]}
            </div>
          )}
        </div>
        {/* Row 3: Two cards, 1/2 width each */}
        <div className="flex w-full gap-6">
          <div className="flex-1 basis-1/2 min-h-[120px]">
            {isRealCard(cards[3]) ? cards[3] : (
              <div className="bg-yellow-200 border-4 border-yellow-500 rounded-2xl shadow-lg p-10 flex flex-col justify-center items-center text-lg font-bold text-yellow-900 min-h-[120px]">
                {cards[3]}
              </div>
            )}
          </div>
          <div className="flex-1 basis-1/2 min-h-[120px]">
            {isRealCard(cards[4]) ? cards[4] : (
              <div className="bg-pink-200 border-4 border-pink-500 rounded-2xl shadow-lg p-10 flex flex-col justify-center items-center text-lg font-bold text-pink-900 min-h-[120px]">
                {cards[4]}
              </div>
            )}
          </div>
        </div>
        {/* Row 4: Big card full width */}
        <div className="w-full min-h-[120px]">
          {isRealCard(cards[5]) ? cards[5] : (
            <div className="bg-indigo-200 border-4 border-indigo-500 rounded-2xl shadow-lg p-10 flex flex-col justify-center items-center text-2xl font-extrabold text-indigo-900 min-h-[120px]">
              {cards[5]}
            </div>
          )}
        </div>
      </>
    );
  }
  if (variant === "small-template") {
    return (
      <>
        {/* Row 1: Single full-width card */}
        <div className="w-full min-h-[100px]">
          {isRealCard(cards[0]) ? cards[0] : (
            <div className="bg-blue-100 border-4 border-blue-300 rounded-2xl shadow-lg p-10 flex flex-col justify-center items-center text-lg font-bold text-blue-900 min-h-[100px]">
              {cards[0]}
            </div>
          )}
        </div>
        {/* Row 2: Two half-width cards */}
        <div className="flex w-full gap-6 mt-4">
          <div className="flex-1 basis-1/2 min-h-[100px]">
            {isRealCard(cards[1]) ? cards[1] : (
              <div className="bg-green-100 border-4 border-green-300 rounded-2xl shadow-lg p-10 flex flex-col justify-center items-center text-base font-semibold text-green-900 min-h-[100px]">
                {cards[1]}
              </div>
            )}
          </div>
          <div className="flex-1 basis-1/2 min-h-[100px]">
            {isRealCard(cards[2]) ? cards[2] : (
              <div className="bg-yellow-100 border-4 border-yellow-300 rounded-2xl shadow-lg p-10 flex flex-col justify-center items-center text-base font-semibold text-yellow-900 min-h-[100px]">
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
            <div key={idx} className="bg-gray-200 rounded-2xl shadow-lg p-10 flex flex-col justify-center items-center min-h-[120px]">
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
            <div key={idx} className="flex-1 bg-gray-200 rounded-2xl shadow-lg p-10 flex flex-col justify-center items-center min-h-[120px]">
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