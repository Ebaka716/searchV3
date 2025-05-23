# ConversationButton Component

## Location
- `src/components/common/ConversationButton.tsx`

## Overview
ConversationButton is a reusable, compact button component designed for conversational actions in cards and templates. It uses shadcn/ui Button as a base, with custom styling for conversational context.

## Features
- **Conversational Style**: Teal background, white text, rounded corners, and left-aligned content.
- **Accessible**: Keyboard and screen reader accessible.
- **Responsive**: Adapts to parent container and grid.

## Props
- All props from shadcn/ui Button are supported (e.g., `onClick`, `className`, `children`).

## Usage Example
```tsx
import ConversationButton from "@/components/common/ConversationButton";

<ConversationButton onClick={() => ...}>Ask about dividends</ConversationButton>
```

## Integration
- Used in DividendsCard, StackedConversationCard, and any card or template requiring conversational actions.
- Can be used as a drop-in replacement for Button where conversational context is needed.

## Customization
- Update the className or variant for different color schemes or sizes.

## Design Patterns
- **shadcn/ui**: For button primitive.

## Accessibility
- Fully keyboard and screen reader accessible.

## Related Components
- DividendsCard
- TickerOverviewCard
- CandlestickCard
- ClassicSearchResultsCard
- DetailedQuoteCard
- MarketNewsCard
- StackedConversationCard

--- 