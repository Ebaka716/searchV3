# AppSidebar Component Documentation

## Location
- `src/components/sidebar/AppSidebar.tsx`

## Overview
AppSidebar is the main left sidebar for navigation and actions. It provides quick access to actions (New Search, New Research Project), history, profile, and settings. The sidebar is modular, supports collapse/expand, and is designed for easy extension.

## Responsibilities
- Provides quick access to actions (New Search, New Research Project), history, and projects.
- The "New Search" button always navigates to `/search?reset=<timestamp>`, ensuring the search page is reset to a blank state.
- Supports collapse/expand for a compact or detailed view.
- Modular structure for easy extension (actions, history, projects, settings, profile).

## Sections
- **Actions**: Quick access to new search/research.
- **History**: Grouped by date, shows recent activity.
- **Profile & Settings**: User menu, settings, and account actions.

## Usage
- Used as the main sidebar in the app layout (MainLayout) for Home, Search, and Research pages.
- Interacts with the search page via query params for robust state management.
- Modular and can be extended with new sections or actions.

### Example
```tsx
<AppSidebar headerHeight={64} />
```

## Accessibility
- All sidebar buttons and menus are keyboard-accessible and have ARIA labels.
- The 'New Search' and 'New Research Project' buttons reset the app to the base search and research pages, starting a new session with a clean state.

## Extension Notes
- To add new actions or sections, extend the navigation and modular sections.
- For new reset behaviors, update the navigation logic for the "New Search" button.

## See Also
- `src/app/search/page.tsx`
- `src/components/dialogue/DialogueArea.tsx`

## Update (June 2024)
- Sidebar offset is now a hardcoded 52px (not dynamic) for SSR/production reliability.
- No headerHeight prop is used or required.
- Expand/collapse button always uses PanelLeftIcon for both states.
- Button is centered when collapsed, right-aligned when expanded.
- Layout is robust and SSR-safe. 