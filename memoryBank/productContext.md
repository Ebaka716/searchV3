# Product Context

_This document explains why this project exists, the problems it solves, and user experience goals._

- Modular Next.js app for conversational search/research
- Fast variant toggling (A/B testing, menu-driven)
- All flows/components are modular and reusable
- Templates for search/research are array-driven and loaded based on user input or query params
- Prioritize rapid prototyping and iteration
- Dialogue flow: queries from EnhancedInput are added to a dialogue list above the input, each with loading/result state for responsive, conversational UX
- LoadingSpinner component for consistent, modular loading feedback

## Why This Matters
- Users expect a seamless, robust, and user-friendly conversational search experience.
- The app ensures only one template is loaded per query param, and resets are always clean, preventing confusion or duplicate results.
- The sidebar and input logic are designed for clarity and reliability, supporting both new and returning users.
- Minimalist UI: Only the input and dialogue area are visible on the search page, keeping the experience focused and intuitive.
- All modals are now accessible: focus returns to the trigger after closing, Dialog is used for non-destructive modals, and dropdowns are closed before opening modals to prevent focus trap issues or UI lockups.

- Research page: right panel (canvas area) is now resizable by dragging from the left, with smooth transition and min/max width. EnhancedInput spacing improved with padding. Layout is more fluid and user-friendly.
- Product is now fully lint/type clean, uses Suspense for client hooks, and dashboard page was removed as unused
- Local dev/build are clean 