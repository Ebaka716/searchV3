# Progress

_This document tracks what works, what's left to build, current status, known issues, and the evolution of project decisions._

- Project initialized with Next.js, shadcn/ui, modular folders
- Placeholder pages and directories created
- MemoryBank updated with new requirements and context
- Header component (full/short variants) implemented and used on Home and Search pages
- HeaderInput component implemented and integrated
- Search page uses short header, no sidebar (Sidebar component and references removed)
- Sidebar re-implemented: Actions section now has 'New Search' and 'New Research Project' as top-level items with unique icons; History section is grouped by date; all buttons are centered when collapsed; profile and settings order swapped; profile menu uses shadcn/ui DropdownMenu.
- Sidebar 'New Search' and 'New Research Project' buttons now reset to base search/research pages for a clean session start.
- LoadingSpinner component created for modular loading states (used in search and dialogue flow)
- Search page now supports a dialogue array: queries from EnhancedInput are added to a dialogue list, each with loading and result states, rendered above the input (newest at top)
- All lint, type, and Next.js Suspense issues resolved (Search page uses Suspense for useSearchParams)
- Dashboard page removed as unused
- Local dev and build are clean
- Research page: right panel (canvas area) is now resizable by dragging from the left, with smooth transition and min/max width. EnhancedInput spacing improved with padding. Layout is more fluid and user-friendly.
- Demo search data simplified: Only one example per type (ticker, term), each with small/medium/large context. Placeholder left for question type. This reduces clutter and makes template testing/variant switching easier.
- Research page layout updated: Canvas is now central (70% width on load), EnhancedInput/dialogue is a resizable right panel (30% width on load), matching a modern productivity tool layout.
- EnhancedInput now allows file uploads as context chips, integrated with dropdown, with modular removable chips and improved toggle UI. File upload bug with dropdown fixed by using a persistent hidden input.
- **Card System Overhaul:** All major UI cards (e.g., TickerOverviewCard, StackedConversationCard) are now modular, compact, and use shadcn/ui components for structure and buttons. ConversationButton is a reusable, compact, shadcn/ui-based button for all stacked/conversation actions. Dialogue entry spacing increased for clarity. Placeholder cards are being replaced by real, styled components in all templates. All new cards/components use shadcn/ui primitives for consistency and accessibility.
- **DividendsCard Complete:** The new DividendsCard is fully implemented and integrated. It uses shadcn/ui, Recharts, and ConversationButton for a robust, interactive, and accessible financial card. The card features a stat row with plus-bubble actions, interactive bar/pie/line charts, and a conversational button row. It replaces placeholder cards in the medium/large templates and is the new model for all future financial/stat cards.

---

## Recent Progress
- Robust template loading and reset logic implemented: Only one template is loaded per query param, and the reset param always clears state.
- Minimalist UI: Only the input and dialogue area are visible on the search page, with all template and clear buttons removed for clarity.
- Modular sidebar and navigation: Sidebar logic is modular, and navigation always uses query params to ensure robust resets and template loading.
- Documentation: All architectural and feature documentation is now maintained in structured memory bank files, not in a generic README.
- **Dialog/Modal Accessibility**: All non-destructive modals (header, sidebar) now use shadcn/ui Dialog. Focus is restored to the trigger after closing, and dropdown menus are closed before opening modals to prevent Radix focus trap/overlay issues. Build is clean and all changes are committed and pushed.
- **Card System Overhaul:** All major UI cards (e.g., TickerOverviewCard, StackedConversationCard) are now modular, compact, and use shadcn/ui components for structure and buttons. ConversationButton is a reusable, compact, shadcn/ui-based button for all stacked/conversation actions. Dialogue entry spacing increased for clarity. Placeholder cards are being replaced by real, styled components in all templates. All new cards/components use shadcn/ui primitives for consistency and accessibility.

## Outstanding Issues
- Some linter errors about missing modules remain (see project for details).
- Persistent dialogue history (across reloads/navigation) is not yet implemented.

# Progress Log

## [2024-04-29] Chat Layout Refactor & Cleanup
- Refactored the Search page to use a modern chat layout:
  - The main content area (pink) is static, with a green center column for the chat/results feed.
  - The green area is scrollable and fills the main content width (now 784px, up from 672px).
  - The EnhancedInput is fixed to the bottom center of the green area, always visible and never scrolling away.
  - The input bar expands to the full width of the green area and sits above the scrolling content on a higher z-index.
  - Horizontal padding was added to the green area for visual comfort.
- Used a React ref and effect to dynamically position the input bar so it always matches the green area's width and position, even on resize.
- Cleaned up all unused variables, imports, and props to resolve ESLint errors and ensure a clean build locally and on Vercel.
- Successfully tested the production build locally and pushed all changes to GitHub.
- The layout now matches modern chat/search UIs (Perplexity, Claude, Cursor, etc.).

## [2024-06-XX] Sidebar/Layout Refactor & Build Fixes
- Sidebar offset now uses a hardcoded 52px value for SSR/production reliability.
- Expand/collapse button always uses PanelLeftIcon, no custom SVG logic.
- Removed all headerHeight prop logic from AppSidebar and MainLayout.
- Fixed all linter and build errors (unused imports, types, props).
- Confirmed clean local and Vercel builds.
- Merged dev to main after all fixes.

## Current Status
- App builds and deploys cleanly on Vercel.
- Layout is robust and SSR-safe.

--- 