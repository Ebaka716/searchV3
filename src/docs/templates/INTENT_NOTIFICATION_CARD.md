# Intent Notification Card Pattern

## Overview
The intent notification card is a blue, visually distinct card used at the bottom of medium templates (e.g., RMD, AAPL) to suggest the next logical user query. It enhances discoverability and guides users through multi-step conversational flows.

## Features
- **Blue Card:** Uses a blue background, border, and info icon for visual prominence.
- **Suggested Query:** Displays a suggested query as a clickable chip/button.
- **Event-Driven:** Clicking the button dispatches a custom event (add-to-floating-input) with the exact alias needed to trigger the next template.
- **Alias Matching:** The button text matches an alias in the demoSearches array, ensuring reliable template transitions.

## Usage
- Place at the bottom of a template's card grid as a full-width row.
- Use for intent handoff between related templates (e.g., from RMD medium to small).
- Ensure the button text matches a registered alias for robust matching.

## Example
- In the RMD medium template, the card suggests "how much was my rmd last year" and triggers the small template when clicked. 