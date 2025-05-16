# Header Component

## Location
- `src/components/header/Header.tsx`

## Overview
Header is a modular, variant-driven component used at the top of all major pages. It supports navigation, profile actions, and integrates the HeaderInput for search/research.

## Variants
- `full`: Two-row layout with navigation, profile, and search input.
- `short`: Single-row, minimal layout for focused views (e.g., Search, Research).

## Props
- `variant: 'full' | 'short'` — Layout variant.
- `onLogout: () => void` — Handler for logout action.
- `onNavSelect?: (navKey: string) => void` — Handler for navigation item selection.
- `onSmartSuggestOpen?: () => void` — Handler for opening smart suggest.
- `selectedTestOption?: string` — For test menu.
- `onSelectTestOption?: (option: string) => void` — For test menu.

## Usage
- Used in MainLayout and at the top of Home, Search, and Research pages.
- Integrates HeaderInput for search/research entry.
- Supports dropdown menus for profile, products, and research navigation.

## Accessibility & Modularity
- All interactive elements are keyboard-accessible and have ARIA labels.
- Designed for easy extension and variant switching. 