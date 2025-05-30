# Active Context

_This document tracks the current work focus, recent changes, next steps, and important decisions._

## [2025-05-23] Customer Service Template Scroll Anchor Bug & Fix
- **Problem:** Customer service (CS) templates in the dialogue area were not scrolling their header/preamble into view correctly, often being hidden behind the fixed main page header. AAPL templates did not have this issue.
- **Root Cause:** In `DialogueArea.tsx`, AAPL templates were passed a `headerRef` prop (for scroll anchoring), but CS templates were not. The scroll logic relies on this ref to anchor the scroll position to the template's main header.
- **Fix:** Updated the rendering of all CS templates to pass `headerRef={...}` exactly as is done for AAPL templates. This ensures the scroll anchor is set on the main template header for both types.
- **Result:** After the fix, both AAPL and CS templates scroll the header and preamble into perfect view, just below the fixed main page header. The user experience is now consistent and robust for all template types.
- **Other:** Merged dev and main branches, resolved all merge conflicts, and pushed all changes to remote. Installed missing dependencies (e.g., `cmdk`).

## Recent Major Changes (June 2024)
- **Row-Based Card Grid Refactor:** Migrated all template layouts (AaplLarge, AaplMedium, AaplSmall, AaplBig, SmallTemplate) to a new row-based card grid system. Each template now declares its card rows declaratively, supporting `full`, `half`, and `thirds` row types for maximum flexibility and maintainability.
- **ClassicSearchResultsCard Improvements:** Refactored ClassicSearchResultsCard to accept a `query` prop (for dynamic headings) and a `results` prop (for custom result sets). All usages now display the current query in the heading, ensuring a responsive, context-aware search experience.
- **EarningsCard & ConversationButton:** Added a robust EarningsCard component, compressed its table for clarity, and standardized all action buttons to use ConversationButton for consistent UX.
- **Build & Lint Clean:** Removed all legacy card/variant props, updated all template usages, and confirmed the app builds cleanly with no linter or type errors.

## Current Focus & Next Steps
- Continue to ensure all new cards/components use shadcn/ui primitives, Recharts for data viz, and ConversationButton for conversational actions.
- Maintain robust, SSR-safe layout patterns for all shared UI (header/sidebar/main).
- Continue replacing all placeholder cards in templates with real, styled, interactive card components.
- Implement scroll/snap-to-top behavior for new dialogue entries in the dialogue flow.
- Ensure the initial query (from URL or first input) appears in the dialogue flow.
- Add persistent dialogue history so that previous sessions/queries are retained across reloads or navigation.

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

## [2024-06-XX] CS Medium Template & Card System Enhancements
- **CS Medium Template:** Implemented a new Customer Service Medium Template for debit card delivery tracking. The template now uses a modular card system.
- **TrackingStepsCard:** Created a reusable TrackingStepsCard component (shadcn/ui) for delivery progress, key dates, and actionable CTAs. Integrated as the first row (full-width) in the CS Medium Template.
- **DebitCardOverviewCard:** Updated and documented the DebitCardOverviewCard for use in the large template, including a blue delay notification banner and event-driven 'Track my card' button.
- **Event-driven UX:** Standardized the use of custom events (add-to-floating-input) for buttons like 'Track my card' and 'Dividends & Earnings', ensuring consistent conversational flow.
- **DemoSearches Aliases:** Expanded aliases in demoSearches.ts to robustly trigger the correct template for card tracking queries.
- **UI/UX Improvements:** Refined card layouts, button alignment, headings, and callouts for clarity and accessibility. All new cards use shadcn/ui primitives.
- **Documentation:** Added comprehensive docs for TrackingStepsCard and DebitCardOverviewCard in /docs.

## [2024-06-XX] FocusedArticleCard (Article Card) Added
- **FocusedArticleCard:** Created a new modular card component for highlighting articles, styled to match modern financial UX patterns. Features a large icon (or image), bold title, description, and article type label. The title underlines on card hover, and the card elevates for interactivity.
- **Integration:** Used as the left card in the second row of the CustomerServiceMediumTemplate. Designed for reuse in other templates or contexts where a focused article highlight is needed.
- **Docs:** See `/src/components/common/FocusedArticleCard.tsx` and new documentation in `/src/docs/FOCUSED_ARTICLE_CARD.md` for usage and props.

---

## Next Steps
- Further refine card content and interactivity based on user feedback.
- Continue modularizing and documenting new card components.
- Expand dynamic data support for delivery status and user info.

# Smart Suggest Panel – Feature Overview & Status

## What is the Smart Suggest Panel?
The Smart Suggest Panel is an interactive, context-aware suggestion panel that appears when the user focuses on the main search input (HeaderInput) or clicks the search icon. It is designed to:
- Provide instant, relevant suggestions based on user input
- Display a default state with popular/recent searches and quotes before typing
- Dynamically update to show three content zones (Answer, Wayfinding, Conversation) as the user types, adapting to input type and length
- Support rapid prototyping of conversational search flows, with logic driven by demo search scenarios and intent detection

## Logic & Implementation
- **Default State:** Shows three cards (Popular Quotes, Popular Searches, Recent Searches) in a single row, using static data for now.
- **Active State:** As the user types, the panel uses matching logic (see `findAllMatchingDemoSearches`, `getSuggestionMatches`) to:
  - Suggest queries and aliases from the demo search array
  - Show resource links and contextually relevant actions
  - Display an "exact match" answer if the input matches a known scenario
- **Content Zones:** The panel is designed to eventually support three distinct content zones (Answer, Wayfinding, Conversation), with display rules based on intent (Symbol, Term, Question) and input length (Short, Medium, Long). See `/assets/documents/ss_panel.txt` for detailed rules.
- **UI/UX:** The panel is full-width, fixed below the header, and uses shadcn/ui primitives for cards, lists, and command menu. It closes on outside click or when a suggestion is selected.

## Current Status
- The panel is implemented as `SmartSuggestPanel.tsx` and integrated into the main layout and header input.
- Default and active states are functional, with dynamic suggestions and resource links.
- The full three-zone logic (Answer, Wayfinding, Conversation) is partially implemented; further refinement is planned to match the detailed rules in `ss_panel.txt`.
- All code is modular, documented, and ready for further extension.

---

## [2024-06-XX] AAPL Template Flow & Notification Bar Improvements
- **AAPL Template Flow:** The AAPL templates now guide users through a staged flow (large → medium → small) using blue notification bars that suggest the next query/alias to try, improving discoverability and UX.
- **Blue Notification Bar:** The blue bar at the bottom of the medium template now matches the style of the DebitCardOverviewCard, using a Lucide Info icon for visual consistency and clarity.
- **Smart Suggest Small Template:** The small AAPL template for "my dividends for apple last month" has been restored and expanded with comprehensive aliases and placeholder resources, ensuring robust matching and guidance for users seeking recent dividend info.
- **Acceptable Strings Modal:** The AAPL small template aliases are now included in the Acceptable Strings modal for easy reference and QA.
- **Merge & Memory Hygiene:** All recent changes from dev have been merged into main, and the memory bank is fully up to date with the latest system patterns, flows, and documentation.

## [2024-06-XX] Speak with Rep Template, RMD Smart Suggest, and UI Consistency
- **Customer Service Small Template (Speak with Rep):** Overhauled with a new, user-centric support channel layout. Live Chat is visually dominant and marked as recommended, with context-aware details and a typewriter effect. Other channels (Schedule a Call Back, Email Us) and branch map are included. All action buttons now use shadcn/ui outline or default variants for consistency and accessibility.
- **Smart Suggest & RMD Matching:** Expanded and improved RMD queries/aliases in `demoSearches.tsx` for better Smart Suggest matching. Logic for intent detection and alias matching is more robust.
- **UI Consistency:** All secondary action buttons across templates now use the shadcn/ui outline variant, matching the style of the medium template's notification button.
- **Branch Hygiene:** Merged main and dev, resolved all conflicts, and pushed updates to remote.
