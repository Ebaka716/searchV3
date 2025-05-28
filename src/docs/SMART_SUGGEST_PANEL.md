# Smart Suggest Panel – Technical & UX Documentation

## Overview
The Smart Suggest Panel is a modular, context-aware suggestion panel designed to enhance the conversational search experience. It provides instant, relevant suggestions and resources as users interact with the main search input. The panel is a core part of the rapid prototyping workflow for conversational search and research flows.

## Purpose & Goals
- Accelerate user discovery by surfacing relevant queries, resources, and actions
- Support multiple search intents (Symbol, Term, Question) and adapt to input length (Short, Medium, Long)
- Provide a visually clear, accessible, and responsive UI using shadcn/ui primitives
- Serve as a model for future smart suggestion and wayfinding features

## UI States
### 1. Default State
- Triggered when the panel opens and the input is empty
- Displays three cards in a row:
  - **Popular Quotes** (e.g., NVDA, LCID, LLY, AMZN, PG)
  - **Popular Searches** (e.g., Open a brokerage account, Stock trade fees)
  - **Recent Searches** (e.g., How do I fund my new account?)
- All cards are static for now, but designed for future dynamic data

### 2. Active State (User Typing)
- As the user types, the panel:
  - Suggests queries and aliases from the demo search array (see `demoSearches`)
  - Surfaces resource links and contextually relevant actions
  - If the input exactly matches a known scenario, displays an "exact match" answer (e.g., a card or component)
- Uses custom filtering and matching logic for suggestions (see `getSuggestionMatches`, `findAllMatchingDemoSearches`)
- UI is split into two main columns: suggestions/resources (left), exact match answer (right)

### 3. Planned: Three Content Zones
- The panel is designed to support three content zones based on intent and input length:
  - **Answer:** Direct answers, cards, or definitions
  - **Wayfinding:** Links to relevant web or app content
  - **Conversation:** Suggested follow-up questions or actions
- Display rules for each zone are defined in `/assets/documents/ss_panel.txt`
- Current implementation partially supports this; further refinement is planned

## Logic & Matching
- **Intent Detection:** Input is classified as Symbol, Term, or Question based on matching against demo search data and input patterns
- **Input Length:** Short, Medium, Long input lengths trigger different display rules for each content zone
- **Suggestion Matching:**
  - Exact and substring matches against demo search queries and aliases
  - Resource links are deduplicated and grouped by type
  - Suggestions are capped for clarity (e.g., max 5 per group)
  - **RMD queries and aliases have been expanded in demoSearches.tsx for improved Smart Suggest matching. The panel now more robustly detects and suggests RMD-related queries and resources.**
- **Panel Behavior:**
  - Opens on input focus or search icon click
  - Closes on outside click or when a suggestion is selected
  - Focus is managed for accessibility

## Implementation Details
- **Component:** `src/components/input/SmartSuggestPanel.tsx`
- **Integration:**
  - Triggered from `HeaderInput` and `MainLayout`
  - Uses shadcn/ui Command, Card, and related primitives
  - Matching logic in `demoSearches.ts` and local helper functions
- **Extensibility:**
  - Designed for rapid prototyping; all logic is modular and array-driven
  - Easy to extend with new content zones, resource types, or matching rules
- **References:**
  - `/assets/documents/ss_panel.txt` – full display rules and scenarios
  - `demoSearches.ts` – source of canned search scenarios and aliases

## Next Steps
- Complete the three-zone logic for Answer, Wayfinding, Conversation
- Refine intent detection and input length handling
- Expand dynamic resource/action suggestions
- Add analytics for suggestion usage and selection

--- 