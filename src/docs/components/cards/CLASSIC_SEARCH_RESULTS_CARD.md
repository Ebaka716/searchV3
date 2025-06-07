# ClassicSearchResultsCard Component

## Location
- `src/components/common/ClassicSearchResultsCard.tsx`

## Overview
ClassicSearchResultsCard displays a list of classic search results (e.g., news, analysis, links) for a given ticker or term. It is designed for use in search/research templates and dashboards, using shadcn/ui for structure and style.

## Features
- **Results List**: Shows a list of result items with title, description, and link.
- **Responsive & Accessible**: Fully responsive, keyboard accessible, and screen reader friendly.

## Props
- None (mock data for demo; future versions may accept props for dynamic data).

## Usage Example
```tsx
import ClassicSearchResultsCard from "@/components/common/ClassicSearchResultsCard";

<ClassicSearchResultsCard />
```

## Integration
- Used in search/research templates and dashboards for displaying search results.
- Can be placed in any card grid or template.

## Customization
- Update the mock data array for different results.
- Change card or list item styles in the component.

## Design Patterns
- **shadcn/ui**: For card and layout primitives.

## Accessibility
- All links and interactive elements are keyboard accessible.
- Titles and descriptions are clear and readable.

## Related Components
- DividendsCard
- TickerOverviewCard
- CandlestickCard
- DetailedQuoteCard
- MarketNewsCard
- StackedConversationCard
- ConversationButton

--- 