# TickerOverviewCard Component

## Location
- `src/components/common/TickerOverviewCard.tsx`

## Overview
TickerOverviewCard provides a concise, visually rich summary of a stock ticker (e.g., AAPL). It displays the current price, change, pre-market data, and key metadata, using shadcn/ui for structure and style. The card is designed for use in search/research templates and as a dashboard summary.

## Features
- **Price Display**: Shows current price, change, and percent change with color cues.
- **Pre-Market Data**: Includes pre-market price and change.
- **Metadata**: Shows timestamp, exchange, and other relevant info.
- **Iconography**: Uses a custom or SVG icon for the ticker (e.g., Apple logo for AAPL).
- **Responsive & Accessible**: Fully responsive, keyboard accessible, and screen reader friendly.

## Props
- `name` (string): Ticker/company name (default: "Apple")
- `price` (string): Current price (default: "$211.21")
- `change` (string): Price change (default: "+1.07")
- `changePct` (string): Percent change (default: "+0.51%")
- `changePositive` (boolean): Whether the change is positive (default: true)
- `preMarketLabel` (string): Pre-market label (default: "Pre-market")
- `preMarketPrice` (string): Pre-market price (default: "209.4")
- `preMarketChange` (string): Pre-market change (default: "-1.81")
- `preMarketChangePct` (string): Pre-market percent change (default: "-0.856967")
- `preMarketNegative` (boolean): Whether pre-market change is negative (default: true)
- `timestamp` (string): Timestamp for the quote (default: "Apr-29-2025 4:00:00 PM ET")
- `onBuy`, `onSell`, `onAdd`, `onAlert`, `onFilter`, `onLink`: Optional action handlers

## Usage Example
```tsx
import TickerOverviewCard from "@/components/common/TickerOverviewCard";

<TickerOverviewCard name="AAPL" price="$190.12" change="+1.23" />
```

## Integration
- Used in search/research templates as a summary card for tickers.
- Can be placed in any card grid or dashboard.

## Customization
- Update props to change displayed data.
- Replace or customize the icon for different tickers.

## Design Patterns
- **shadcn/ui**: For card, button, and layout primitives.
- **SVG/Icon**: For ticker/company branding.

## Accessibility
- All buttons and interactive elements are keyboard accessible.
- Color cues are paired with text for clarity.

## Related Components
- DividendsCard
- CandlestickCard
- ClassicSearchResultsCard
- DetailedQuoteCard
- MarketNewsCard
- StackedConversationCard
- ConversationButton

--- 