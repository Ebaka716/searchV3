# Tech Context

_This document lists the technologies used, development setup, technical constraints, and dependencies._

- Next.js (latest), React 18.3.1, shadcn/ui
- Vercel for deployment, GitHub for version control
- Modular folder/component structure
- Use shadcn/ui for all UI unless a new pattern is required
- - shadcn/ui Dialog is now used for all non-destructive modals, replacing AlertDialog. Radix focus trap issues are handled by closing dropdowns before opening modals.
- Document all new patterns in /docs and inline
- LoadingSpinner component for modular loading states
- Dialogue array logic for conversational flows (EnhancedInput → dialogue list)
- Suspense is now used for useSearchParams in app pages, per Next.js requirements
- All lint/type issues resolved and dashboard page removed
- Local dev and build are clean
- Recharts is now used for all financial/stat charts (bar, pie, line) in cards like DividendsCard.
- DividendsCard is the reference implementation for shadcn/ui + Recharts + ConversationButton integration.
- **Row-Based Card Grid (2024):** All templates now use a declarative, row-based card grid system for layout. This is the new standard for all future template work.
- **Dynamic Search Results Headings:** ClassicSearchResultsCard now accepts a `query` prop for dynamic headings and a `results` prop for custom result sets, supporting tailored search experiences.
- **Smart Suggest Panel:** Modular, context-aware suggestion panel using shadcn/ui primitives. Matching logic is array-driven and extensible. Integrated with HeaderInput and MainLayout for seamless UX. Designed for rapid prototyping and future extension of content zones and resource types.
- **RMD Template System:**
  - Implements three modular templates (large, medium, small) for RMD queries, each loaded via event-driven logic and shared matching utilities.
  - Large/medium templates use a row-based card grid, with answer, search results, and conversation button stack as modular components.
  - Source tags are grey circles with numbers, and the sources button is always right-aligned with a count.
  - Conversation buttons use event-driven logic to trigger template transitions, following the AAPL template pattern.
  - Smart Suggest answer is a simple, paragraph-style component, not a template. Dialogue area only renders templates, not answer components.
  - All answer components and templates are modular, lint/type clean, and production-ready.

---

## Technical Patterns
- Template-driven architecture: templates are modular React components, loaded via shared matching logic.
- Query and reset param handling: ensures robust state transitions and clean resets.
- Ref-based guards: prevent double-mount/double-processing issues in React Strict Mode.

- (Add your technologies, setup, and constraints here)

- All CardTitle components now use `text-xl` by default for consistent card heading sizing.
- Event-driven alias injection for notification/intent cards (using CustomEvent) is now a standard pattern for template navigation.
- All overview cards use Lucide icons in a gray rounded-xl box, left-aligned above the title, with standardized sizing (w-6 h-6). 