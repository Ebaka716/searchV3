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