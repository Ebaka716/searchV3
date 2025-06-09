# Close Account Transaction Card & Mini-App Pattern

## Overview
The Close Account transaction card (CloseAccountOverviewCard) is a modular, floating card component designed for transactional flows within the dialogue area. It embodies the "mini-app" pattern, allowing users to initiate, confirm, and complete account closure actions in a conversational, event-driven UI.

## Design Decisions
- **Floating Card:** The card floats above other dialogue area cards with a strong shadow, visually indicating an active transaction. This draws user attention and separates the transaction from passive content.
- **Shadow & Elevation:** During confirmation, the card's shadow is increased for elevation. When the transaction is complete (closed), the shadow is removed, visually receding the card.
- **Animated Border:** The card uses an animated border-color (from dark to light blue) during confirmation, providing visual feedback and preserving the card's border-radius (unlike border-image).
- **X Button:** The X (close) button is flush-aligned at the top right, outside the CardHeader, allowing the user to dismiss the card at any time except in the closed state. This supports independent, non-destructive dismissal of the mini-app.
- **Transactional Flow:**
  - **Get Started:** Triggers confirmation state (blue border, shadow, disclaimer, confirm/cancel buttons).
  - **Confirm:** Transitions to a success state (green border, "Account Closed" heading, green check, no X button).
  - **Cancel:** Returns to overview state.
- **Input Hiding:** When in confirmation mode, the main input field is hidden to focus the user on the transaction.
- **Event-Driven UX:** All major actions (e.g., "Show all accounts", conversation buttons) use CustomEvent ('add-to-floating-input') to inject aliases and trigger template transitions, supporting modular, conversational flows.

## Mini-App Pattern
- The transaction card acts as a "mini-app" within the dialogue area: it can be added, interacted with, and dismissed independently of other cards.
- This pattern enables future extensibility for other transactional or interactive flows (e.g., transfers, support requests) to be added as floating mini-apps.

## Integration with Dialogue Area
- The card is added to the dialogue area via event-driven actions (aliases, buttons).
- It floats above other cards, which have no shadow, reinforcing its active/interactive status.
- The card can be closed with the X button (except in closed state), supporting robust, user-friendly UX.

## Visual & UX Consistency
- All UI/UX choices (border-radius, shadow, X button alignment, animated border) are consistent with the app's design system (shadcn/ui primitives, Lucide icons).
- The card's structure and style match the DebitCardOverviewCard for visual and UX consistency across flows.

---

_Last updated: 2024-07-XX_ 