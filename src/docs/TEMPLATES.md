# Template Components

## Overview
Templates are modular components for rendering different types of search/research results. Each template is responsible for displaying a specific answer type in a consistent, styled format.

**Note:** The demoSearches data now only includes one example per type (ticker, term, question), each with small/medium/large context, to simplify template testing and variant switching.

---

## TickerOverviewCard
- Location: `src/components/common/TickerOverviewCard.tsx`
- Uses shadcn/ui Card, CardHeader, CardTitle, CardContent, CardFooter, and Button components
- Compact, grid-friendly, and visually prominent
- Used as the main card in the AAPL large template and other ticker templates

## StackedConversationCard
- Location: `src/components/common/StackedConversationCard.tsx`
- Uses shadcn/ui Card, CardHeader, CardTitle, CardContent, and ConversationButton components
- Displays a vertical stack of research topic buttons (ConversationButton)
- Used as a secondary card in the AAPL large template and other research templates

## ConversationButton
- Location: `src/components/common/ConversationButton.tsx`
- Reusable, compact, shadcn/ui-based button for all stacked/conversation actions
- Used in StackedConversationCard and other places where pill-style, content-hugging buttons are needed

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
- All placeholder cards are being replaced by real, styled components using shadcn/ui primitives for consistency and accessibility.
- Can be extended for new answer types or result formats. 