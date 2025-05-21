# System Patterns

_This document describes the system architecture, key technical decisions, and design patterns in use._

- Modular component/page structure (Header, Content, Sidebars)
- Variant toggling via context/provider and menu
- Array-driven logic for search/research templates
- Each major variant is its own file (no hard forks)
- Clean PR workflow, collaborative dev
- LoadingSpinner component for modular, reusable loading states
- Dialogue array pattern for conversational flows: EnhancedInput adds queries to a dialogue list, each with loading/result state, rendered above input (newest at top)
- Suspense is now used for client hooks like useSearchParams in app pages, per Next.js requirements
- All lint/type issues resolved and dashboard page removed

---

## Key Patterns
- **Template-Driven Search**: Templates are modular React components, loaded based on user input or query params using a shared matching utility.
- **Robust State Management**: Uses refs (e.g., hasHandledQueryParamRef) to ensure query param logic only runs once per mount, preventing double-mount issues.
- **Reset Logic**: The `reset` query param (with a timestamp) is used to force a state reset, ensuring the "New Search" button always works, even if already on `/search`.
- **Minimalist UI**: Only the input and dialogue area are visible on the search page, with all template and clear buttons removed for clarity.
- **Sidebar/Navigation**: Sidebar logic is modular, and navigation always uses query params to ensure robust resets and template loading.
- **Dialog/Modal Accessibility**: All non-destructive modals use shadcn/ui Dialog. Focus is restored to the trigger after closing, and dropdown menus are closed before opening modals to prevent Radix focus trap/overlay issues.

- (Add your system architecture and design patterns here) 