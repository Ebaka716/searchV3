import React from 'react';
/**
 * demoSearches.tsx
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

// New Type for Resource Items
export type ResourceItem = {
  id: string; 
  label: string;
  iconType: 'document' | 'video' | 'podcast' | 'sitePage';
  link?: string; 
};

export type DemoSearch = {
  query: string;
  aliases: string[];
  type: 'ticker' | 'term' | 'question';
  size: 'small' | 'medium' | 'large';
  resources?: ResourceItem[];
  answer: string | React.ReactNode;
};

// Import the new answer components
import AppleClosingPriceAnswer from '@/components/answers/AppleClosingPriceAnswer';
import RmdInfoAnswer from '@/components/answers/RmdInfoAnswer';
import DebitCardInfoAnswer from '@/components/answers/DebitCardInfoAnswer';
import AppleDividendsAnswer from '@/components/answers/AppleDividendsAnswer';

export const demoSearches: DemoSearch[] = [
  // Ticker: Apple/AAPL
  // Ticker: AAPL Confidence high
  {
    query: "What was Apple's closing price last year?",
    aliases: ["apple closing price last year", "aapl last year close", "apple stock last year", "closing price"],
    type: "ticker",
    size: "small",
    resources: [
      { id: "aapl-small-doc1", label: "Understanding Stock Prices", iconType: "document" },
      { id: "aapl-small-site1", label: "Apple Investor Relations", iconType: "sitePage", link: "#" }
    ],
    answer: <AppleClosingPriceAnswer />
  },
  // Ticker: AAPL Confidence low
  {
    query: "AAPL",
    aliases: [
      "aapl", "apple", "appl", "aple", "aaple", "aappl", "appel", "applle", "aapll", "applr", "applw", "appl3", "aap"
    ],
    type: "ticker",
    size: "large",
    resources: [
      { id: "aapl-large-site-investments", label: "Digging in on AI-related investments", iconType: "sitePage" },
      { id: "aapl-large-site-vid-caps", label: "On the hunt for small- and mid-caps", iconType: "video" },
      { id: "aapl-large-doc-give", label: "Don't give up on tech stocks", iconType: "sitePage", link: "#" },
      { id: "aapl-large-site-ir2", label: "Let the AI revolution begin", iconType: "sitePage", link: "#" },
      { id: "aapl-large-vid-services", label: "Video: Stock ideas for 2025", iconType: "video" },
      { id: "aapl-large-site-ir", label: "Trading FAQs: Getting started", iconType: "sitePage", link: "#" }
    ],
    answer: <AppleClosingPriceAnswer />
  },
  // Ticker: AAPL Confidence medium
  {
    query: "Apple dividends",
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
    resources: [
      { id: "aapl-medium-doc-chart", label: "Interactive Stock Chart Guide", iconType: "document" },
      { id: "aapl-medium-podcast-analysis", label: "Podcast: AAPL Price Analysis", iconType: "podcast" },
      { id: "aapl-medium-site-news", label: "Latest Apple News", iconType: "sitePage", link: "#" },
      { id: "aapl-medium-video-earnings", label: "Earnings Call Highlights", iconType: "video" }
    ],
    answer: <AppleDividendsAnswer />
  },

  // Term: RMD
  {
    query: "RMD",
    aliases: ["rmd", "required minimum distribution"],
    type: "term",
    size: "small",
    resources: [
      { id: "rmd-small-doc-irs", label: "IRS Publication 590-B", iconType: "document" },
      { id: "rmd-small-site-faq", label: "RMD FAQs", iconType: "sitePage" }
    ],
    answer: <RmdInfoAnswer />
  },
  {
    query: "What is an RMD",
    aliases: ["what is rmd", "explain rmd", "rmd meaning"],
    type: "term",
    size: "medium",
    resources: [
      { id: "rmd-medium-video-explain", label: "Video: Understanding RMDs", iconType: "video" },
      { id: "rmd-medium-podcast-details", label: "Podcast: Deep Dive into RMDs", iconType: "podcast" }
    ],
    answer: "An RMD (Required Minimum Distribution) is the minimum amount you must withdraw from your retirement accounts each year after reaching a certain age."
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
    answer: <DebitCardInfoAnswer />
  },
  {
    query: "my debit card delivery is late",
    aliases: [
      "track my card",
      "where is my debit card",
      "where is my card",
      "card delivery status",
      "check card delivery",
      "card shipping status",
      "is my card shipped",
      "has my card shipped",
      "when will my card arrive",
      "debit card tracking",
      "find my debit card",
      "delivery status for my card",
      "card order status",
      "card in the mail",
      "card not arrived",
      "card delayed",
      "waiting for debit card"
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
  //   type: "transaction",
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