# StackedConversationCard Component

## Location
- `src/components/common/StackedConversationCard.tsx`

## Overview
StackedConversationCard is a modular card for displaying a stack of conversational actions or suggestions. It is designed for use in search/research templates and dashboards, using shadcn/ui for structure and style.

## Features
- **Stacked Actions**: Shows a vertical stack of action buttons or suggestions.
- **Responsive & Accessible**: Fully responsive, keyboard accessible, and screen reader friendly.

## Props
- None (mock data for demo; future versions may accept props for dynamic data).

## Usage Example
```tsx
import StackedConversationCard from "@/components/common/StackedConversationCard";

<StackedConversationCard />
```

## Integration
- Used in search/research templates and dashboards for displaying conversational actions.
- Can be placed in any card grid or template.

## Customization
- Update the mock data array for different actions.
- Change card or button styles in the component.

## Design Patterns
- **shadcn/ui**: For card and button primitives.

## Accessibility
- All buttons and interactive elements are keyboard accessible.
- Actions are clear and readable.

## Related Components
- DividendsCard
- TickerOverviewCard
- CandlestickCard
- ClassicSearchResultsCard
- DetailedQuoteCard
- MarketNewsCard
- ConversationButton

--- 