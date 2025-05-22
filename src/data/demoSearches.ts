/**
 * demoSearches.ts
 *
 * This file defines the array of demo search templates used throughout the conversational search app.
 *
 * - Each entry represents a search template (e.g., AAPL small/medium/large) and includes metadata for matching user input or query params.
 * - The `findDemoSearchMatch` utility uses this array to match user input or query params to the correct template.
 * - To add a new template, create a new React component and register it here with the appropriate matching fields.
 * - This array drives all template loading logic in the search page and input components.
 *
 * Example usage:
 *   - User types or navigates to `/search?query=AAPL` → `findDemoSearchMatch` finds the matching entry here → correct template is loaded.
 *
 * See also:
 *   - src/components/dialogue/DialogueArea.tsx
 *   - src/components/input/EnhancedInput.tsx
 *   - src/app/search/page.tsx
 */

export type DemoSearch = {
  query: string;
  aliases: string[];
  type: 'ticker' | 'term' | 'question';
  size: 'small' | 'medium' | 'large';
  answer: string;
};

export const demoSearches: DemoSearch[] = [
  // Ticker: Apple/AAPL
  {
    query: "What was Apple's closing price last year?",
    aliases: ["apple closing price last year", "aapl last year close", "apple stock last year"],
    type: "ticker",
    size: "small",
    answer: "Apple Inc. (AAPL) is trading at $175.23 (+1.2%)",
  },
  {
    query: "AAPL",
    aliases: [
      "aapl", "apple", "appl", "aple", "aaple", "aappl", "appel", "applle", "aapll", "applr", "applw", "appl3"
    ],
    type: "ticker",
    size: "large",
    answer: "Apple Inc. (AAPL) closed at $157.65 on December 31st last year. This reflects a strong year for the company, driven by robust iPhone sales and growth in services.",
  },
  {
    query: "Apple stock price",
    aliases: ["apple price", "aapl price", "apple stock"],
    type: "ticker",
    size: "medium",
    answer: "Apple Inc. (AAPL) is currently trading at $175.23, up 1.2% today. The company remains a leader in consumer electronics and services.",
  },

  // Term: RMD
  {
    query: "RMD",
    aliases: ["rmd", "required minimum distribution"],
    type: "term",
    size: "small",
    answer: "RMD stands for Required Minimum Distribution, a mandatory withdrawal from retirement accounts.",
  },
  {
    query: "What is an RMD",
    aliases: ["what is rmd", "explain rmd", "rmd meaning"],
    type: "term",
    size: "medium",
    answer: "An RMD (Required Minimum Distribution) is the minimum amount you must withdraw from your retirement accounts each year after reaching a certain age.",
  },
  {
    query: "What was my RMD from last year?",
    aliases: ["my rmd last year", "rmd last year amount", "required minimum distribution last year"],
    type: "term",
    size: "large",
    answer: "Your RMD for last year depends on your account balance and age. Please consult your financial records or advisor for the exact amount.",
  },

  // Question: Placeholder (to be filled in later)
  // {
  //   query: "",
  //   aliases: [],
  //   type: "question",
  //   size: "small",
  //   answer: "",
  // },
];

export function findDemoSearchMatch(input: string): DemoSearch | undefined {
  const normalized = input.trim().toLowerCase();
  return demoSearches.find(entry =>
    entry.query.toLowerCase() === normalized ||
    entry.aliases.some(alias => alias.toLowerCase() === normalized)
  );
} 