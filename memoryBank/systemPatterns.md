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
- **RMD Template System (2024):**
  - Three RMD templates: large (general info), medium (eligibility), small (personal history), each triggered by specific queries/aliases.
  - Large/medium templates use a row-based card grid: first row is a full-width answer (tan background, transparent card, source tags, right-aligned sources button), second row is a half layout (left: search results, right: conversation button stack).
  - Source tags are grey circles with numbers, and the sources button is always right-aligned with a count.
  - Conversation buttons are event-driven: clicking a button triggers the appropriate template, using the same event-driven logic as the AAPL template flow.
  - Dialogue area logic maps aliases and button actions to the correct template, supporting robust, modular conversational flows.
  - Smart Suggest answer is a simple, paragraph-style component, not a template. Dialogue area only renders templates, not answer components.
  - All answer components and templates use consistent font sizes, spacing, and source tag patterns. UI is modular, lint/type clean, and production-ready.
- **Unified Card Component Pattern (2024-07):** All major cards now use shadcn/ui Card primitives for structure, with CardTitle set to `text-xl` by default for visual consistency.
- **Event-Driven Notification/Intent Cards (2024-07):** Notification cards in templates use event-driven alias injection (via CustomEvent 'add-to-floating-input') to trigger template transitions, supporting modular, conversational UX. This pattern is now standard in both AAPL and RMD flows.
- **Consistent Iconography (2024-07):** All overview cards use Lucide icons in a gray rounded-xl box, left-aligned above the title, with standardized sizing (w-6 h-6) for visual clarity and brand consistency.
- **Close Account Transaction Card & Mini-App Pattern (2024-07):**
  - The CloseAccountOverviewCard is a floating, transactional card that can be added to the dialogue area as a "mini-app" for account closure flows.
  - The card floats above other cards with a strong shadow, visually indicating an active transaction. When closed, the shadow is removed and the card visually recedes.
  - The X button (top right, outside CardHeader) allows the user to close/remove the card at any time except in the closed state, supporting independent dismissal.
  - The card uses animated border-color (not border-image) to preserve border-radius and provide visual feedback during confirmation.
  - All major actions (e.g., "Show all accounts", conversation buttons) use event-driven UX (CustomEvent 'add-to-floating-input') to inject aliases and trigger template transitions, supporting modular, conversational flows.
  - This pattern enables transactional flows to be added, interacted with, and dismissed within the dialogue area, supporting the "mini-app" concept for future extensibility.
- (Add your system architecture and design patterns here) 