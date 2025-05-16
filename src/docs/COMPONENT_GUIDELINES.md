# Component Guidelines

## Header Component
- Location: `src/components/header/Header.tsx`
- Variants: `full` (two-row, nav + search), `short` (single row, minimal)
- Props: See code for full prop list (variant, onLogout, onNavSelect, etc.)
- Usage: Used at the top of Home and Search pages for navigation and actions.

## HeaderInput Component
- Location: `src/components/header/HeaderInput.tsx`
- Stateless, controlled by parent
- Props: `onSmartSuggestOpen`, `onOpenResearch`
- Usage: Used in the Header (full variant) and can be reused elsewhere.

## LoadingSpinner Component
- Location: `src/components/common/LoadingSpinner.tsx`
- Usage: Shows a loading spinner and optional text. Used for async loading states (e.g., search results, dialogue flow).
- Props: `text` (optional string)

## Search Page
- Location: `src/app/search/page.tsx`
- Uses the `short` Header variant at the top
- Layout: header, sidebar, main content
- Dialogue flow: When a user submits a query from EnhancedInput, it is added to a dialogue array and rendered above the input. Each entry shows loading, then a matched template or 'no results'. Newest entries appear at the top.
- Now uses a Suspense boundary to support useSearchParams per Next.js requirements.
- All lint and type issues resolved as of latest update.

## Research Page
- Location: `src/app/research/page.tsx`
- Layout: header, sidebar, main content, **resizable right panel (canvas area)**
- The right panel can be resized by dragging from the left edge, with smooth transition and min/max width (320px–800px).
- EnhancedInput is always spaced from both side panels with padding for a clean, user-friendly look.
- Layout is fluid and adapts to user adjustments.

## Home Page
- Location: `src/app/home/page.tsx`
- Uses the `full` Header variant at the top
- Layout: hero section with call-to-action, followed by a row of 3 feature cards (Retirement Planning, Market News, Investment Strategies), then a row of 2 info cards (Personal Finance Tools, Security & Support)
- Responsive and modular, using shadcn/ui for all UI elements
- Designed as a welcoming landing experience for users

## General
- All components use shadcn/ui and lucide-react for styling and icons
- All interactive elements are accessible and keyboard-friendly
- Layouts are responsive and modular 