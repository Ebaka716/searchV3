# demoSearches Data Documentation

## Overview
This file defines the array of demo search templates used throughout the conversational search app.

## Structure
- Each entry represents a search template (e.g., AAPL small/medium/large) and includes metadata for matching user input or query params.
- The `findDemoSearchMatch` utility uses this array to match user input or query params to the correct template.
- To add a new template, create a new React component and register it here with the appropriate matching fields.
- This array drives all template loading logic in the search page and input components.

## Example Usage
- User types or navigates to `/search?query=AAPL` → `findDemoSearchMatch` finds the matching entry here → correct template is loaded.

## Extension Notes
- Add new templates by extending the array and providing appropriate `query`, `aliases`, `type`, `size`, and `answer` fields.
- Update the matching logic in `findDemoSearchMatch` if new matching rules are needed.

## See Also
- `src/components/dialogue/DialogueArea.tsx`
- `src/components/input/EnhancedInput.tsx`
- `src/app/search/page.tsx` 