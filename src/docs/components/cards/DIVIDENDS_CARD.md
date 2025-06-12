# DividendsCard Component

## Location
- `src/components/common/DividendsCard.tsx`

## Overview
DividendsCard is a robust, production-quality financial card component designed for use in search and research templates. It provides a comprehensive summary of dividend information for a given security (e.g., AAPL), including key dates, amounts, yield, payout ratios, and growth trends. The card is highly interactive, accessible, and visually rich, using shadcn/ui, Recharts, and ConversationButton for a modern, conversational UX.

## Features
- **Stat Row**: Top row displays all key dividend stats (amount, dates, frequency) with plus-bubble actions for quick conversational input.
- **Interactive Charts**: 
  - Bar charts for yield comparison (AAPL vs. market median)
  - Pie charts for payout ratio (previous/current trailing)
  - Line chart for dividend growth (AAPL vs. market median)
- **Conversational Actions**: Bottom row uses ConversationButton for quick, context-aware user actions (e.g., "Dividend History", "Payout Ratio", "Compare Peers").
- **Responsive & Accessible**: Fully responsive grid layout, keyboard accessible, and screen reader friendly.
- **Array-Driven**: Designed to be used in array-driven template layouts (e.g., BigTemplate, CardGrid).

## Props
- None (all data is currently mocked for demo purposes; future versions may accept props for dynamic data).

## Usage Example
```tsx
import DividendsCard from "@/components/common/DividendsCard";

<DividendsCard />
```

## Integration
- Used as a full-width card in the AAPL Medium and Large templates.
- Can be placed in any card grid or template that supports React components.
- Replaces placeholder cards for dividend/stat information.

## Customization
- To update data, modify the mock data arrays at the top of the component.
- To change chart types or styles, edit the Recharts components within the card.
- To add or change conversational actions, update the button labels and onClick logic at the bottom of the card.

## Design Patterns
- **shadcn/ui**: For consistent card, button, and layout primitives.
- **Recharts**: For all chart visualizations (bar, pie, line).
- **ConversationButton**: For all conversational actions, ensuring a unified UX across cards.

## Accessibility
- All buttons and interactive elements are keyboard accessible.
- Charts use color and labels for clarity.
- Plus-bubble actions are accessible and provide tooltips for context.

## Related Components
- TickerOverviewCard
- CandlestickCard
- ClassicSearchResultsCard
- DetailedQuoteCard
- MarketNewsCard
- StackedConversationCard
- ConversationButton

--- 