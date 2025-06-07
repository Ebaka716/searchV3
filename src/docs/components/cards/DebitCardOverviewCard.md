# DebitCardOverviewCard Documentation

## Overview
`DebitCardOverviewCard` is a reusable UI component designed to provide users with a summary and progress tracker for their debit card delivery. It is used in customer service templates to give users a clear view of their card's status, delivery timeline, and support options.

---

## Purpose
- **Show delivery progress:** Visual tracker for the stages of debit card delivery (Ordered, Shipped, Out for Delivery, Delivered).
- **Highlight important dates and info:** Displays order date, user name, address, and account info.
- **Alert users to delays:** Shows a blue notification banner if there are expected delays (e.g., provider change).
- **Provide support actions:** Offers CTAs for tracking the card and contacting support.

---

## UI/UX Details
- **Heading:** `Debit Card Delivery Overview` (top of card)
- **Notification Banner:**
  - Blue banner at the top of the card content for important notices (e.g., delivery delays).
- **Delivery Message:**
  - Short message about expected delivery time.
- **Progress Tracker:**
  - Visual progress bar with labeled steps (Ordered, Shipped, Out for Delivery, Delivered).
  - Current stage is highlighted; progress bar can show partial fill for in-progress steps.
- **Delivery Information:**
  - Section with order date, name, address, and account (masked).
- **CTAs (bottom, right-aligned):**
  - `Track my card` (outline button, triggers tracking logic)
  - `Contact Support` (primary button)

---

## Props
- This card is currently self-contained and does not accept props. All data is hardcoded for demo purposes, but can be made dynamic as needed.

---

## Integration Example
Used in customer service templates (e.g., large template):

```tsx
import DebitCardOverviewCard from "../common/DebitCardOverviewCard";

<BigTemplate
  ...
  rows={[ 
    { type: "full", cards: [<DebitCardOverviewCard key="debit-card-overview" />] },
    ...
  ]}
/>
```

---

## Customization & Extension
- **Progress:** Can be made dynamic to reflect real delivery status.
- **Info:** Order details, name, and address can be passed as props.
- **CTAs:** Button actions can be wired to real tracking and support flows.
- **Styling:** Uses shadcn/ui components for consistency and accessibility.

---

## Related Components
- `CustomerServiceLargeTemplate`: Uses this card as the main delivery status display.
- `BigTemplate`: The layout container for modular card rows.

---

## Author & History
- Created as part of the CS Template UX improvements (2024-06).
- Designed for clarity, accessibility, and actionable support. 