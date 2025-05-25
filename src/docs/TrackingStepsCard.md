# TrackingStepsCard Documentation

## Overview
`TrackingStepsCard` is a reusable UI component designed for the Customer Service (CS) Medium Template in the conversational search app. It provides users with a clear, actionable summary of their debit card delivery status, including key dates, progress steps, and support CTAs.

---

## Purpose
- **Communicate delivery progress:** Shows the user where their debit card is in the delivery process.
- **Highlight important dates:** Displays both the order date and expected delivery date.
- **Alert users to delays:** Includes a callout if the package might be late.
- **Guide next actions:** Offers clear CTAs for notifications and support.

---

## UI/UX Details
- **Heading:** `Tracking Information` (top of card)
- **Date Row:**
  - Left: `Ordered on` (date)
  - Center: Arrow icon
  - Right: `Expected delivery` (date)
  - Under expected delivery: Blue badge/callout for delay warning
- **Steps List:**
  - Subheading: `Delivery steps`
  - Each step is shown as a row:
    - Completed steps: Green checkmark icon
    - Current step: Blue arrow icon
    - Step label (bold for current)
- **CTAs (bottom, right-aligned):**
  - `Sign up for notifications` (outline button)
  - `Contact support` (primary button)

---

## Props
- This card is currently self-contained and does not accept props. Dates and steps are hardcoded for demo purposes, but can be made dynamic as needed.

---

## Integration Example
Used in the CS Medium Template as the first (full-width) card:

```tsx
import TrackingStepsCard from "../common/TrackingStepsCard";

<BigTemplate
  ...
  rows={[ 
    { type: "full", cards: [<TrackingStepsCard key="tracking-steps" />] },
    ...
  ]}
/>
```

---

## Customization & Extension
- **Dates:** Can be made dynamic via props or context.
- **Steps:** Can be extended for more granular tracking.
- **CTAs:** Button actions can be wired to notification signup or support flows.
- **Styling:** Uses shadcn/ui components for consistency and accessibility.

---

## Related Components
- `CustomerServiceMediumTemplate`: Uses this card as the main delivery status display.
- `BigTemplate`: The layout container for modular card rows.

---

## Author & History
- Created as part of the CS Medium Template UX improvements (2024-06).
- Designed for clarity, accessibility, and actionable support. 