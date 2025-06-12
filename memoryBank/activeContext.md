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

## [2024-06-XX] RMD Templates, Source Tag Pattern, and Dialogue Area Logic
- **RmdLargeTemplate & RmdMediumTemplate:** Created modular, row-based templates for RMD queries. Both use a first row answer with source tags (grey circles with numbers) and a right-aligned sources button for trust and clarity. The second row features a compact RMD search results card and a conversation button stack (5 for large, 3 for medium), with event-driven logic to trigger template transitions.
- **Dialogue Area Logic:** Updated to support both RMD templates, mapping aliases and button actions to the correct template. Smart Suggest answer for RMD is now a simple paragraph, not a template.
- **System Pattern:** Source tags and sources button are now standard for answer clarity and transparency. All linter/build issues resolved and changes pushed.

## [2024-06-XX] RMD Template System Overhaul & UX Improvements

- **Unified RMD Template Layouts:** All RMD templates (large, medium, small) now use a consistent, modular row-based card grid system for layout and conversational flow.
- **RmdSmallTemplate Added:** Created a new small RMD template for "how much RMD did I take last year" queries, with a clear answer, conversation buttons, and search results.
- **Blue Notification Intent Card:** The RMD medium template now includes a blue notification card at the bottom, styled like the AAPL templates, which suggests the next logical query ("how much was my rmd last year") and triggers the small template when clicked.
- **Alias Matching Fix:** The blue notification button now uses an alias that matches the demoSearches array, ensuring the small template is reliably triggered.
- **UX Polish:** Improved spacing and visual separation between answer sections, conversation buttons, and search results in all RMD templates.
- **Documentation:** To support onboarding and collaboration, new documentation has been added for the RmdSmallTemplate and the intent-driven notification card pattern.

## [2024-07-XX] Card System Consistency, Notification Card UX, and Close Account Flow
- Refactored CloseAccountOverviewCard and DebitCardOverviewCard to use shadcn/ui Card, CardHeader, CardTitle, CardContent, and CardFooter for consistent structure and style.
- All CardTitle components now use `text-xl` globally for visual consistency across all cards.
- Icon size above card titles reduced (w-6 h-6) for better visual balance; all overview cards use Lucide icons in a gray rounded-xl box, left-aligned above the title.
- In AaplMediumTemplate, the blue notification card's suggestion is now clickable and injects the correct alias to the dialogue area, triggering the small Apple template (matches RMD pattern).
- Event-driven notification/intent card pattern is now standard: notification cards in templates use CustomEvent ('add-to-floating-input') to inject aliases and trigger template transitions for seamless conversational flow.
- All changes are committed, merged, and pushed to main.

## [2024-07-XX] Close Account Flow, Transaction Card, and Dialogue Area Patterns
- **Close Account Flow:** Implemented a robust, modular Close Account flow with both large and medium templates, triggered by natural language queries and button actions.
- **Large Template:** Features a CloseAccountOverviewCard with a transactional flow: "Get started" triggers a confirmation state (blue animated border, shadow, disclaimer, confirm/cancel buttons), and confirmation transitions to a success state (green border, "Account Closed" heading, green check, no X button). The card floats above other cards with a strong shadow, visually indicating it is an active transaction. The X button (top right, outside CardHeader) allows the user to close/remove the card at any time except in the closed state.
- **Medium Template:** Lists all accounts (with types and balances), with the first row (Individual Account) eligible for closure. Account list uses up/down/no-change indicators for balances, with specific color assignments (e.g., Roth IRA up/green, Crypto down/red, Cash management black). The preamble clarifies eligibility. The "Show all accounts" button and aliases trigger the medium template; confirmation mode hides the input field.
- **Event-Driven UX:** All major actions (e.g., "Show all accounts", conversation buttons) use CustomEvent ('add-to-floating-input') to inject aliases and trigger template transitions, supporting modular, conversational UX. This pattern is now standard across flows.
- **Floating Transaction Card:** The CloseAccountOverviewCard floats above other cards (with shadow) to indicate an active transaction. When closed, the shadow is removed, and the card visually recedes. This pattern supports the "mini-app" concept: a transactional flow can be added to the dialogue area, interact with the user, and be dismissed independently.
- **Design Decisions:** The card's border-radius is preserved by animating border-color (not border-image). The X button is flush-aligned, and the card's shadow is increased for elevation during confirmation. All UI/UX choices are documented in /src/docs/.
- **Documentation:** Added a new doc in /src/docs/ describing the design decisions and patterns for the Close Account transaction card and mini-app pattern.

## [2024-07-XX] Open Account Small Template (Brokerage) & Card System Enhancements
- **Open Account Small Template:** Added a new template for the brokerage account opening flow, triggered by queries/aliases like "open brokerage account". Uses a single full-width card row for a focused, transactional experience.
- **OpenAccountBrokerageOverviewCard:** Created a robust, modular card for the brokerage flow. Features Clark Kent demo data, a gray user info box, and a detailed "Important documents and confirmation" section with clickable Account Opening Agreements and all required policy/IRS bullet points. Two CTAs at the bottom: secondary (Close) and primary (Open Account).
- **Dialogue & DemoSearches Wiring:** Updated demoSearches.tsx and DialogueArea.tsx to robustly trigger the new template for all relevant aliases. Ensured correct template rendering and event-driven transitions.
- **UI/UX:** Card is now truly full-width, visually consistent, and production-ready. Clickable doc section styled for interactivity. All linter/type errors resolved and build confirmed clean.
- **Docs:** Robust documentation to be added for the new card and template in /docs/components/cards and /docs/templates.

---
