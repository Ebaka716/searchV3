import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { SparkleIcon } from "@/components/icons/SparkleIcon";

interface GeneralResultTemplateProps {
  type: 'ticker' | 'term' | 'question';
  title: string;
  preamble?: string;
  thinking?: React.ReactNode;
  results: { id: string; content: React.ReactNode }[];
}

export const GeneralResultTemplate: React.FC<GeneralResultTemplateProps> = ({
  type,
  title,
  preamble,
  thinking,
  results,
}) => {
  // Split results into rows of up to 3 cards each
  const rows = [];
  for (let i = 0; i < results.length; i += 3) {
    rows.push(results.slice(i, i + 3));
  }
  return (
    <div className="rounded-xl border bg-white shadow p-6 w-full">
      <div className="flex items-center mb-4">
        <SparkleIcon className="w-6 h-6 mr-2 text-yellow-400" />
        <h2 className="font-bold text-lg">{title}</h2>
      </div>
      {preamble && <div className="mb-3 text-zinc-600 text-sm">{preamble}</div>}
      {thinking && <div className="mb-4">{thinking}</div>}
      <div className="flex flex-col gap-4">
        {rows.map((row, idx) => (
          <div key={idx} className="flex gap-4">
            {row.map(card => (
              <Card key={card.id} className="flex-1 min-w-0">
                <CardContent>{card.content}</CardContent>
              </Card>
            ))}
            {/* Fill empty space if less than 3 cards */}
            {Array.from({ length: 3 - row.length }).map((_, i) => (
              <div key={i} className="flex-1 min-w-0" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}; 