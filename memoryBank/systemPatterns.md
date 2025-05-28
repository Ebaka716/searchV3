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
- Sidebar offset is a hardcoded 52px (not dynamic) for SSR/production reliability.
- No headerHeight prop or dynamic measurement in layout.
- Expand/collapse button uses PanelLeftIcon for both states.
- Layout patterns are SSR-safe and production-ready.

## Key Patterns
- **Row-Based Card Grid (2024):** All template layouts now use a declarative, row-based card grid system. Each template defines its card rows as an array of objects, each specifying a row type (`full`, `half`, `thirds`) and the cards to render. This enables flexible, maintainable, and easily extensible layouts for all search and research templates.
- **Dynamic Search Results Headings:** ClassicSearchResultsCard now accepts a `query` prop, ensuring all search results cards display a dynamic heading reflecting the current query. It also accepts a `results` prop for custom result sets, supporting tailored search experiences.
- **Template-Driven Search:** Templates are modular React components, loaded based on user input or query params using a shared matching utility.
- **Robust State Management:** Uses refs (e.g., hasHandledQueryParamRef) to ensure query param logic only runs once per mount, preventing double-mount issues.
- **Reset Logic:** The `reset` query param (with a timestamp) is used to force a state reset, ensuring the "New Search" button always works, even if already on `/search`.
- **Minimalist UI:** Only the input and dialogue area are visible on the search page, with all template and clear buttons removed for clarity.
- **Sidebar/Navigation:** Sidebar logic is modular, and navigation always uses query params to ensure robust resets and template loading.
- **Dialog/Modal Accessibility:** All non-destructive modals use shadcn/ui Dialog. Focus is restored to the trigger after closing, and dropdown menus are closed before opening modals to prevent Radix focus trap/overlay issues.

- Research page: right panel (canvas area) is now resizable by dragging from the left, with smooth transition and min/max width. EnhancedInput spacing improved with padding. Layout is more fluid and user-friendly.
- **DividendsCard Pattern:** DividendsCard is a modular, array-driven card component using shadcn/ui and Recharts for robust, interactive financial/stat displays. It features a stat row with plus-bubble actions, interactive bar/pie/line charts, and a bottom row of ConversationButton actions for conversational UX. This pattern is now the standard for all new financial/stat cards.
- **Smart Suggest Panel Pattern (2024):**
  - Modular, context-aware suggestion panel triggered by search input focus or icon click.
  - Default state shows popular/recent searches and quotes in card layout.
  - As user types, panel updates with suggestions, resource links, and (planned) three content zones: Answer, Wayfinding, Conversation.
  - Uses array-driven matching logic for demo search scenarios and intent detection.
  - Designed for rapid prototyping and extensibility; all UI built with shadcn/ui primitives.
  - See `/assets/documents/ss_panel.txt` for detailed display rules and logic.
- (Add your system architecture and design patterns here) 