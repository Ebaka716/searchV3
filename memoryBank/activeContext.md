# Active Context

_This document tracks the current work focus, recent changes, next steps, and important decisions._

## Recent Major Changes (June 2024)
- **Sidebar Offset Refactor:** Sidebar now uses a hardcoded 52px top offset for robust SSR and Vercel compatibility. No dynamic headerHeight measurement is used.
- **Expand/Collapse Button:** The sidebar expand/collapse button now always uses the PanelLeftIcon for both states, with no custom SVG or fill logic. Button is centered when collapsed and right-aligned when expanded.
- **HeaderHeight Prop Removed:** All logic and props related to dynamic headerHeight have been removed from AppSidebar and MainLayout.
- **Linter/Build Fixes:** Removed unused imports, props, and type logic. Fixed all linter and build errors related to sidebar and layout.
- **Build/Deploy Workflow:** Confirmed clean builds locally and on Vercel. Merged dev to main after all fixes.
- **Card System Overhaul:** All major UI cards (e.g., TickerOverviewCard, StackedConversationCard) are now modular, compact, and use shadcn/ui components for structure and buttons. ConversationButton is a reusable, compact, shadcn/ui-based button for all stacked/conversation actions. Dialogue entry spacing increased for clarity. Placeholder cards are being replaced by real, styled components in all templates.
- **DividendsCard Integration:** Added a robust, production-quality DividendsCard component to the template system. This card uses shadcn/ui, Recharts, and modular design patterns. It features a stat row with plus-bubble actions, interactive charts (bar, pie, line), and a bottom row of ConversationButton actions for conversational UX. The card is array-driven and replaces placeholder cards in the medium/large templates. All UI is accessible, responsive, and matches the latest design system.

## Current Focus & Next Steps
- Maintain robust, SSR-safe layout patterns for all shared UI (header/sidebar/main).
- Continue to ensure all UI logic is production-safe and deployable without layout shift or SSR bugs.
- Continue replacing all placeholder cards in templates with real, styled, interactive card components like DividendsCard.
- Ensure all new cards/components use shadcn/ui primitives, Recharts for data viz, and ConversationButton for conversational actions.

- Project scaffolded with Next.js and shadcn/ui
- Routing and component folders set up as described
- All work aligns with modular, variant-driven, and collaborative principles

- Header (full/short) and HeaderInput components built and integrated
- Search page scaffolded with short header, ready for sidebar/content
- Sidebar updated: Actions section now has 'New Search' and 'New Research Project' as top-level items with unique icons; History section is grouped by date; all buttons are centered when collapsed; profile and settings order swapped; profile menu uses shadcn/ui DropdownMenu.
- LoadingSpinner component created for modular loading states (used in search and dialogue flow)
- Search page now supports a dialogue array: queries from EnhancedInput are added to a dialogue list, each with loading and result states, rendered above the input (newest at top)
- Research page: right panel (canvas area) is now resizable by dragging from the left, with smooth transition and min/max width. EnhancedInput spacing improved with padding. Layout is more fluid and user-friendly.
- Research page layout refactored: The canvas is now central (70% width on load), and the EnhancedInput/dialogue area is a resizable right panel (30% width on load), similar to Cursor's layout.
- Demo search data (demoSearches) now only includes one example per type (ticker, term), each with small/medium/large context. Placeholder left for question type. This is to simplify template testing and variant switching.
- EnhancedInput now supports context chips for uploaded files. Chips are modular, removable, and display file type icons. File upload is integrated with the dropdown menu using a persistent hidden input to avoid event issues. UI for search/research toggles was polished (no internal border).
- Sidebar 'New Search' and 'New Research Project' buttons now reset the app to the base search and research pages, providing a clean state for new sessions.

---

## Recent Major Changes
- **Dialog/Modal Accessibility**: All non-destructive modals (e.g., Text Strings in header, Service Agents in sidebar) now use shadcn/ui Dialog instead of AlertDialog. Focus management ensures that after closing a modal, focus returns to the triggering button for robust accessibility and keyboard navigation. Dropdown menus are closed before opening modals to prevent Radix focus trap/overlay issues.
- **Robust template loading**: Only one template is loaded per query param, using ref-based guards to prevent double-mount issues.
- **Reset logic**: The `reset` query param (with a timestamp) is used to force a state reset, ensuring the "New Search" button always works, even if already on `/search`.
- **Minimalist UI**: Only the input and dialogue area are visible on the search page, with all template and clear buttons removed for clarity.
- **Modular sidebar**: Sidebar logic is modular, and navigation always uses query params to ensure robust resets and template loading.
- **Documentation**: All architectural and feature documentation is now maintained in structured memory bank files, not in a generic README.

## Next Steps
- Implement scroll/snap-to-top behavior for new dialogue entries in the dialogue flow.
- Ensure the initial query (from URL or first input) appears in the dialogue flow.
- Add persistent dialogue history so that previous sessions/queries are retained across reloads or navigation.
- Continue replacing all placeholder cards in templates with real, styled card components.

- All lint, type, and Next.js Suspense issues resolved (Search page uses Suspense for useSearchParams)
- Dashboard page removed as unused
- Local dev and build are clean 