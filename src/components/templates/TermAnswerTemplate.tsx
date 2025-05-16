import React from "react";

interface TermAnswerTemplateProps {
  query: string;
  answer: string;
  size: 'small' | 'medium' | 'large';
}

export const TermAnswerTemplate: React.FC<TermAnswerTemplateProps> = ({ query, answer, size }) => {
  return (
    <div className="rounded-lg border p-4 bg-white shadow">
      <h2 className="font-bold text-lg mb-2">Term: {query}</h2>
      <div className="text-zinc-700 mb-2">{answer}</div>
      <div className="text-xs text-zinc-400">Size: {size}</div>
    </div>
  );
}; 