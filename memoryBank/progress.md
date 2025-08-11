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
- **Row-Based Card Grid Refactor (June 2024):** Migrated all template layouts to a new row-based card grid system. Each template now declares its card rows declaratively, supporting `full`, `half`, and `thirds` row types for maximum flexibility and maintainability. ClassicSearchResultsCard now accepts a `query` prop for dynamic headings and a `results` prop for custom result sets. All usages now display the current query in the heading. EarningsCard table compressed, all action buttons standardized to ConversationButton, and all builds confirmed clean.

---

## Recent Progress
- Robust template loading and reset logic implemented: Only one template is loaded per query param, and the reset param always clears state.
- Minimalist UI: Only the input and dialogue area are visible on the search page, with all template and clear buttons removed for clarity.
- Modular sidebar and navigation: Sidebar logic is modular, and navigation always uses query params to ensure robust resets and template loading.
- Documentation: All architectural and feature documentation is now maintained in structured memory bank files, not in a generic README.
- **Dialog/Modal Accessibility**: All non-destructive modals (header, sidebar) now use shadcn/ui Dialog. Focus is restored to the trigger after closing, and dropdown menus are closed before opening modals to prevent Radix focus trap/overlay issues. Build is clean and all changes are committed and pushed.
- **Card System Overhaul:** All major UI cards (e.g., TickerOverviewCard, StackedConversationCard) are now modular, compact, and use shadcn/ui components for structure and buttons. ConversationButton is a reusable, compact, shadcn/ui-based button for all stacked/conversation actions. Dialogue entry spacing increased for clarity. Placeholder cards are being replaced by real, styled components in all templates. All new cards/components use shadcn/ui primitives for consistency and accessibility.
- **Row-Based Card Grid Refactor (June 2024):** Migrated all template layouts to a new row-based card grid system. Each template now declares its card rows declaratively, supporting `full`, `half`, and `thirds` row types for maximum flexibility and maintainability. ClassicSearchResultsCard now accepts a `query` prop for dynamic headings and a `results` prop for custom result sets. All usages now display the current query in the heading. EarningsCard table compressed, all action buttons standardized to ConversationButton, and all builds confirmed clean.

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

## [2024-06-XX] Row-Based Card Grid Refactor & Search Results Improvements
- Migrated all template layouts to a new row-based card grid system. Each template now declares its card rows declaratively, supporting `full`, `half`, and `thirds` row types for maximum flexibility and maintainability.
- Refactored ClassicSearchResultsCard to accept a `query` prop for dynamic headings and a `results` prop for custom result sets. All usages now display the current query in the heading.
- Compressed EarningsCard table, standardized all action buttons to ConversationButton, and confirmed all builds clean.

## [2024-06-XX] Smart Suggest Panel Implementation
- Implemented the Smart Suggest Panel as a context-aware, full-width suggestion panel triggered by the main search input (HeaderInput) or search icon.
- Default state displays three cards: Popular Quotes, Popular Searches, Recent Searches.
- As the user types, the panel dynamically suggests queries, aliases, and resource links using demo search logic.
- Panel is modular, uses shadcn/ui primitives, and closes on outside click or selection.
- Three-zone logic (Answer, Wayfinding, Conversation) is partially implemented; further refinement planned per `ss_panel.txt`.
- Integrated into MainLayout and HeaderInput for seamless UX.
- Next: Complete the three-zone logic, refine intent detection, and expand resource/action suggestions.

## Current Status
- App builds and deploys cleanly on Vercel.
- Layout is robust and SSR-safe.

## [2025-05-23] Customer Service Template Scroll Anchor Bug & Fix
- CS templates in the dialogue area were not scrolling their header/preamble into view correctly, often being hidden behind the fixed main page header. AAPL templates did not have this issue.
- Root cause: In `DialogueArea.tsx`, AAPL templates were passed a `headerRef` prop (for scroll anchoring), but CS templates were not. The scroll logic relies on this ref to anchor the scroll position to the template's main header.
- Fix: Updated the rendering of all CS templates to pass `headerRef={...}` exactly as is done for AAPL templates. This ensures the scroll anchor is set on the main template header for both types.
- Result: After the fix, both AAPL and CS templates scroll the header and preamble into perfect view, just below the fixed main page header. The user experience is now consistent and robust for all template types.
- Other: Merged dev and main branches, resolved all merge conflicts, and pushed all changes to remote. Installed missing dependencies (e.g., `cmdk`).

## [2024-06-XX] AAPL Template Flow, Notification Bar, and Memory Bank Updates
- Enhanced the AAPL template flow to guide users through large → medium → small queries using blue notification bars with Lucide Info icons.
- Restored and expanded the AAPL small template for recent dividends, with comprehensive aliases and resources.
- Updated Acceptable Strings modal to include all small template aliases for QA and discoverability.
- Ensured all changes from dev are merged into main and memory bank is fully up to date.

## [2024-06-XX] Speak with Rep Template, RMD Smart Suggest, and UI Consistency
- Overhauled Customer Service Small Template (Speak with Rep) with new, user-focused support channel layout, map placeholder, and consistent button styling.
- Expanded RMD queries/aliases and improved Smart Suggest matching logic for better user experience.
- All secondary action buttons now use shadcn/ui outline variant for visual and UX consistency.
- Merged main and dev branches, resolved conflicts, and pushed all updates to remote.

## [2024-06-XX] RMD Template System, Dialogue Logic, and UI/UX Overhaul
- Implemented three RMD templates (large, medium, small), each triggered by specific queries/aliases for robust, modular conversational search.
- Large template: full-width answer with tan background, transparent card, source tags, and right-aligned sources button; second row with left search results (7 RMD results) and right conversation button stack (5 RMD topics).
- Medium template: similar structure, with a large "Yes" heading, eligibility answer, 4 source tags, and a sources button; second row with 5 search results and 3 conversation buttons.
- Small template: covers personal RMD history (details in activeContext.md).
- All answer components use consistent font sizes, spacing, and source tag patterns. Source tags are grey circles with numbers, and the sources button is always right-aligned with a count.
- Conversation buttons are event-driven: clicking a button (e.g., "Do I have to take an RMD?") triggers the appropriate template, using the same event-driven logic as the AAPL template flow.
- Smart Suggest answer is now a simple, paragraph-style component, not a template. Dialogue area logic supports both large and medium RMD templates, mapping aliases and button actions to the correct template.
- UI/UX: All answer components and templates are modular, lint/type clean, and production-ready. Dialogue area only renders templates, not answer components. All builds and tests confirmed clean.
- Memory bank and documentation updated to reflect new RMD templates, source tag pattern, and dialogue area logic.

## [2024-06-XX] RMD Template System Complete & UX Improvements
- All RMD templates (large, medium, small) now use a unified, modular layout and conversational pattern.
- Added RmdSmallTemplate for last-year RMD queries, with answer, conversation buttons, and search results.
- Blue notification intent card in RMD medium template now reliably triggers the small template via alias matching.
- Improved spacing and visual clarity across all RMD templates.
- All changes build cleanly and are pushed to main.
- See new documentation in /src/docs/ for RmdSmallTemplate and intent-driven notification card pattern.

## [2024-07-XX] Close Account Flow, Transaction Card, and Mini-App Pattern
- Close Account flow is fully implemented with large and medium templates, robustly triggered by natural language queries and button actions.
- Large template features a transactional CloseAccountOverviewCard: confirmation state (blue animated border, shadow, disclaimer, confirm/cancel), success state (green border, "Account Closed", green check, no X button). Card floats above other cards with shadow for active transaction feel; shadow is removed when closed.
- Medium template lists all accounts with eligibility, balance indicators, and color-coded changes. "Show all accounts" and aliases trigger the medium template. Confirmation mode hides the input field.
- All major actions use event-driven UX (CustomEvent 'add-to-floating-input') to inject aliases and trigger template transitions, supporting modular, conversational flows.
- The floating transaction card (mini-app) pattern allows a transactional flow to be added to the dialogue area, interact with the user, and be dismissed independently (X button, except in closed state).
- All UI/UX choices (border-radius, animated border-color, shadow, X button alignment) are documented in /src/docs/.
- All changes are committed, merged, and pushed to main. Memory bank and documentation are fully up to date.

## [2024-07-XX] Open Account Small Template (Brokerage) & Card System Enhancements
- Added Open Account Small Template for brokerage account flow, triggered by natural language queries and robust alias matching.
- Created OpenAccountBrokerageOverviewCard: full-width, Clark Kent demo data, gray info box, clickable Account Opening Agreements, and all required policy/IRS bullet points. Two CTAs at the bottom.
- Updated demoSearches and DialogueArea to wire up the new template and aliases.
- All linter/type errors resolved and build confirmed clean.
- Documentation to be added for new card and template in /docs/components/cards and /docs/templates.

---

> See also: [src/docs/SMART_SUGGEST_PANEL.md] for comprehensive technical and UX documentation of the Smart Suggest Panel feature.
