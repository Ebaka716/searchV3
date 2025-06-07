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

## CustomerServiceLargeTemplate
- Location: `src/components/templates/CustomerServiceLargeTemplate.tsx`
- Used for broad queries about debit card delivery (e.g., "debit card", "card delivery").
- Provides general information about debit card delivery timelines and status.
- Triggered by demoSearches entries of type 'question' and size 'large' related to debit card delivery.

## CustomerServiceMediumTemplate
- Location: `src/components/templates/CustomerServiceMediumTemplate.tsx`
- Used for more refined queries about late or missing debit card delivery (e.g., "my debit card delivery is late").
- Provides focused troubleshooting and next steps if the delivery date has passed.
- Triggered by demoSearches entries of type 'question' and size 'medium' related to debit card delivery.

## CustomerServiceSmallTemplate
- Location: `src/components/templates/CustomerServiceSmallTemplate.tsx`
- Used for specific queries requesting escalation to a live associate (e.g., "talk to a live associate about my debit card", "speak with rep").
- Provides direct contact options for customer support.
- Triggered by demoSearches entries of type 'question' and size 'small' related to debit card delivery.

---

## Integration
- Used in the Search page to display results in the dialogue flow.
- All placeholder cards are being replaced by real, styled components using shadcn/ui primitives for consistency and accessibility.
- Can be extended for new answer types or result formats. 