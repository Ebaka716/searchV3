# Active Context

_This document tracks the current work focus, recent changes, next steps, and important decisions._

- Project scaffolded with Next.js and shadcn/ui
- Routing and component folders set up as described
- Next steps: create variant context/provider, build out search logic and reference arrays/templates, set up Vercel build/test scripts
- All work aligns with modular, variant-driven, and collaborative principles

- Header (full/short) and HeaderInput components built and integrated
- Search page scaffolded with short header, ready for sidebar/content
- Focus: continue modular layout, sidebar, and dialog/canvas integration
- Docs and memory updated to reflect current state

- Sidebar updated: Actions section now has 'New Search' and 'New Research Project' as top-level items with unique icons; History section is grouped by date; all buttons are centered when collapsed; profile and settings order swapped; profile menu uses shadcn/ui DropdownMenu.

- LoadingSpinner component created for modular loading states (used in search and dialogue flow)
- Search page now supports a dialogue array: queries from EnhancedInput are added to a dialogue list, each with loading and result states, rendered above the input (newest at top)

- (Add your current work focus, recent changes, and next steps here) 

## Next Steps
- Implement scroll/snap-to-top behavior for new dialogue entries in the dialogue flow.
- Ensure the initial query (from URL or first input) appears in the dialogue flow.
- Add persistent dialogue history so that previous sessions/queries are retained across reloads or navigation.

- All lint, type, and Next.js Suspense issues resolved (Search page uses Suspense for useSearchParams)
- Dashboard page removed as unused
- Local dev and build are clean 