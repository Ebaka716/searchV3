import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export interface RmdSearchResult {
  title: string;
  description: string;
  url: string;
}

export function RmdSearchResultsCard({
  query = "your query",
  results = [],
}: {
  query?: string;
  results?: RmdSearchResult[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-semibold">{`Search results for: ${query}`}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {results.map((result, idx) => (
            <div key={idx}>
              <a
                href={result.url}
                className="text-base font-medium underline underline-offset-2 text-blue-700 hover:text-blue-900 transition-colors cursor-pointer"
                tabIndex={0}
              >
                {result.title}
              </a>
              <div className="text-xs text-muted-foreground mt-0.5">
                {result.description}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default RmdSearchResultsCard; 