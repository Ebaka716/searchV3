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

---

## Technical Patterns
- Template-driven architecture: templates are modular React components, loaded via shared matching logic.
- Query and reset param handling: ensures robust state transitions and clean resets.
- Ref-based guards: prevent double-mount/double-processing issues in React Strict Mode.

- (Add your technologies, setup, and constraints here) 