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

## Search Page
- Location: `src/app/search/page.tsx`
- Uses the `short` Header variant at the top
- Layout: (currently) only header, but designed to support sidebar and main content

## General
- All components use shadcn/ui and lucide-react for styling and icons
- All interactive elements are accessible and keyboard-friendly
- Layouts are responsive and modular 