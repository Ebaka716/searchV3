# Template Components

## Overview
Templates are modular components for rendering different types of search/research results. Each template is responsible for displaying a specific answer type in a consistent, styled format.

**Note:** The demoSearches data now only includes one example per type (ticker, term, question), each with small/medium/large context, to simplify template testing and variant switching.

---

## TickerAnswerTemplate
- Location: `src/components/templates/TickerAnswerTemplate.tsx`
- Props: `query: string`, `answer: string`, `size: string`
- Usage: Renders results for ticker symbol queries (e.g., AAPL, MSFT).

## TermAnswerTemplate
- Location: `src/components/templates/TermAnswerTemplate.tsx`
- Props: `query: string`, `answer: string`, `size: string`
- Usage: Renders results for financial term queries (e.g., EBITDA, P/E Ratio).

## QuestionAnswerTemplate
- Location: `src/components/templates/QuestionAnswerTemplate.tsx`
- Props: `query: string`, `answer: string`, `size: string`
- Usage: Renders results for financial question queries (e.g., What is a stock split?).

---

## Integration
- Used in the Search page to display results in the dialogue flow.
- Can be extended for new answer types or result formats. 