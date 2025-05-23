# CandlestickCard Component

## Location
- `src/components/common/CandlestickCard.tsx`

## Overview
CandlestickCard provides a realistic, interactive candlestick chart for a given ticker, using Recharts and shadcn/ui. It is designed for use in financial dashboards, search/research templates, and any context where price history visualization is needed.

## Features
- **Candlestick Chart**: Interactive, realistic mock data for AAPL (or other tickers).
- **Time Span Controls**: Buttons to switch between 1D, 5D, 1M, 6M, YTD, 1Y.
- **Responsive & Accessible**: Fully responsive chart, keyboard accessible, and screen reader friendly.

## Props
- None (mock data for demo; future versions may accept props for dynamic data).

## Usage Example
```tsx
import { CandlestickCard } from "@/components/common/CandlestickCard";

<CandlestickCard />
```

## Integration
- Used in search/research templates and dashboards for price history visualization.
- Can be placed in any card grid or template.

## Customization
- Update the mock data array for different tickers or time spans.
- Change chart colors or styles in the component.

## Design Patterns
- **shadcn/ui**: For card and button primitives.
- **Recharts**: For candlestick chart visualization.

## Accessibility
- All controls and chart elements are keyboard accessible.
- Color and labels are used for clarity.

## Related Components
- DividendsCard
- TickerOverviewCard
- ClassicSearchResultsCard
- DetailedQuoteCard
- MarketNewsCard
- StackedConversationCard
- ConversationButton

--- 