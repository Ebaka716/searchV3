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

- (Add your system architecture and design patterns here) 