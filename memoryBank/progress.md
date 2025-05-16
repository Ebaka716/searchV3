# Progress

_This document tracks what works, what's left to build, current status, known issues, and the evolution of project decisions._

- Project initialized with Next.js, shadcn/ui, modular folders
- Placeholder pages and directories created
- MemoryBank updated with new requirements and context
- Next: implement variant context/provider, array-driven search logic, and templates

- Header component (full/short variants) implemented and used on Home and Search pages
- HeaderInput component implemented and integrated
- Search page uses short header, no sidebar (Sidebar component and references removed)
- Documentation updated in /docs

- Sidebar re-implemented: Actions section now has 'New Search' and 'New Research Project' as top-level items with unique icons; History section is grouped by date; all buttons are centered when collapsed; profile and settings order swapped; profile menu uses shadcn/ui DropdownMenu.

- LoadingSpinner component created for modular loading states (used in search and dialogue flow)
- Search page now supports a dialogue array: queries from EnhancedInput are added to a dialogue list, each with loading and result states, rendered above the input (newest at top)

- All lint, type, and Next.js Suspense issues resolved (Search page uses Suspense for useSearchParams)
- Dashboard page removed as unused
- Local dev and build are clean

- (Add your current status, known issues, and progress here) 