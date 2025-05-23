# MarketNewsCard Component

## Location
- `src/components/common/MarketNewsCard.tsx`

## Overview
MarketNewsCard displays a curated list of recent news headlines and summaries for a given ticker or market. It is designed for use in search/research templates and dashboards, using shadcn/ui for structure and style.

## Features
- **News List**: Shows a list of news items with title, summary, and link.
- **Responsive & Accessible**: Fully responsive, keyboard accessible, and screen reader friendly.

## Props
- None (mock data for demo; future versions may accept props for dynamic data).

## Usage Example
```tsx
import MarketNewsCard from "@/components/common/MarketNewsCard";

<MarketNewsCard />
```

## Integration
- Used in search/research templates and dashboards for displaying market news.
- Can be placed in any card grid or template.

## Customization
- Update the mock data array for different news items.
- Change card or list item styles in the component.

## Design Patterns
- **shadcn/ui**: For card and layout primitives.

## Accessibility
- All links and interactive elements are keyboard accessible.
- Titles and summaries are clear and readable.

## Related Components
- DividendsCard
- TickerOverviewCard
- CandlestickCard
- ClassicSearchResultsCard
- DetailedQuoteCard
- StackedConversationCard
- ConversationButton

--- 