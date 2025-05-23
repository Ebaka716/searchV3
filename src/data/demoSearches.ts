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
    aliases: [
      "apple dividends and earnings",
      "aapl dividends and earnings",
      "dividends & earnings for apple",
      "dividends & earnings for aapl",
      "apple earnings and dividends",
      "aapl earnings and dividends",
      "dividends and earnings apple",
      "dividends and earnings aapl",
      "apple dividends earnings",
      "aapl dividends earnings",
      "show me apple dividends and earnings",
      "show aapl dividends and earnings",
      "apple earnings dividends",
      "aapl earnings dividends",
      "dividends plus earnings apple",
      "dividends plus earnings aapl",
      "dividends earnings june 2024 apple",
      "dividends earnings june 2024 aapl"
    ],
    type: "ticker",
    size: "medium",
    answer: "Apple Inc. (AAPL) is currently trading at $175.23, up 1.2% today. The company remains a leader in consumer electronics and services.",
  },
  {
    query: "My dividends for Apple last month",
    aliases: [
      "my dividends for apple last month",
      "apple dividends last month",
      "aapl dividends last month",
      "dividends from apple last month",
      "last month apple dividends",
      "last month aapl dividends",
      "show me my apple dividends for last month",
      "show my aapl dividends last month",
      "apple dividend payments last month",
      "aapl dividend history last month",
      "dividends received from apple last month",
      "dividends paid by aapl last month",
      "recent apple dividends",
      "recent aapl dividends",
      "apple dividends june 2024",
      "aapl dividends june 2024",
      "my apple dividend income last month",
      "my aapl dividend income last month"
    ],
    type: "ticker",
    size: "small",
    answer: "Here are your dividends from Apple (AAPL) over the last month.",
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

  // Customer Service: Debit Card Delivery
  {
    query: "debit card",
    aliases: [
      "debit card delivery",
      "where is my debit card",
      "card delivery"
    ],
    type: "question",
    size: "large",
    answer: "Debit cards are typically delivered within 7-10 business days after approval. If you recently requested a new card, you can check your delivery status in your account dashboard or contact support for more information.",
  },
  {
    query: "my debit card delivery is late",
    aliases: [
      "debit card delivery date passed",
      "my card was supposed to arrive by now",
      "debit card hasn't arrived"
    ],
    type: "question",
    size: "medium",
    answer: "If your debit card delivery date has passed, please verify your shipping address and check for any delivery notifications. You may also track your card status online or request assistance from our support team.",
  },
  {
    query: "talk to a live associate about my debit card",
    aliases: [
      "connect me to support for my missing debit card",
      "I need help from a person about my debit card",
      "speak to customer service about debit card",
      "speak with rep",
      "talk to person"
    ],
    type: "question",
    size: "small",
    answer: "To speak with a live associate about your debit card delivery, please call our customer service line or use the live chat option below. We're here to help you resolve your issue as quickly as possible.",
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