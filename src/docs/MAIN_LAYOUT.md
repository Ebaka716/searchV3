# MainLayout Component

## Location
- `src/components/layouts/MainLayout.tsx`

## Overview
MainLayout is the root layout component for all major pages. It provides a consistent structure with a header, optional left sidebar, main content area, and optional right sidebar.

## Props
- `headerVariant: 'full' | 'short'` — Header layout variant.
- `leftSidebar?: React.ReactNode` — Optional left sidebar content.
- `rightSidebar?: React.ReactNode` — Optional right sidebar content.
- `children: React.ReactNode` — Main content.

## Usage
- Used as the top-level layout for Home, Search, and Research pages.
- Supports modular insertion of sidebars and main content.

## Extensibility
- Designed for easy extension and variant switching.
- All layout areas are flexible and responsive.

## Notes
- Research page now uses a central canvas with a resizable right panel for EnhancedInput/dialogue, with the canvas taking 70% of the width on load and the right panel 30%. 

## Notes (April 2024)
- The chat layout now uses a green scrollable center column (max-w-[784px]) with a floating input bar fixed to the bottom center.
- The input bar is dynamically positioned and sized to match the green area, using a React ref and effect.
- This ensures the input is always visible, accessible, and perfectly aligned with the chat feed, regardless of window size.
- The pattern is inspired by modern chat/search UIs (Perplexity, Claude, Cursor, etc.). 

## Update (June 2024)
- No dynamic header height measurement; header is assumed to be 52px tall.
- Sidebar offset is a hardcoded 52px for SSR/production reliability.
- No headerHeight prop is passed to AppSidebar.
- Layout is robust and SSR-safe. 