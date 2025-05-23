# DetailedQuoteCard Component

## Location
- `src/components/common/DetailedQuoteCard.tsx`

## Overview
DetailedQuoteCard provides a detailed table of quote information for a given ticker, including open, close, P/E ratio, options, dividends, and sector. It is designed for use in search/research templates and dashboards, using shadcn/ui for structure and style.

## Features
- **Quote Table**: Shows key financial stats in a clear, tabular format.
- **Responsive & Accessible**: Fully responsive, keyboard accessible, and screen reader friendly.

## Props
- None (mock data for demo; future versions may accept props for dynamic data).

## Usage Example
```tsx
import { DetailedQuoteCard } from "@/components/common/DetailedQuoteCard";

<DetailedQuoteCard />
```

## Integration
- Used in search/research templates and dashboards for detailed quote information.
- Can be placed in any card grid or template.

## Customization
- Update the mock data array for different stats.
- Change table or card styles in the component.

## Design Patterns
- **shadcn/ui**: For card and table primitives.

## Accessibility
- All table rows and cells are keyboard accessible.
- Table is readable and clear for screen readers.

## Related Components
- DividendsCard
- TickerOverviewCard
- CandlestickCard
- ClassicSearchResultsCard
- MarketNewsCard
- StackedConversationCard
- ConversationButton

--- 