# DialogueArea Component Documentation

## Overview
`DialogueArea.tsx` encapsulates the chat-like scroll area for the search page in the conversational search app.

## Responsibilities
- Loads the correct template based on user input or the `query` query param (using `findDemoSearchMatch`).
- Handles the `reset` query param to force a blank state (used by the sidebar's New Search button).
- Uses refs and effects to keep new dialogue entries visible and to guard against double-processing (e.g., React double-mounts).
- Ensures only one template is loaded per query param, robust against React quirks.

## Usage
- Used in the search page as the main dialogue/chat area.
- Interacts with `EnhancedInput` and `HeaderInput` for template loading.

### Example
```tsx
<DialogueArea headerHeight={64} />
```

## Extension Notes
- To add new template types, extend the dialogue entry type logic and import the new template component.
- For new query param behaviors, add logic to the relevant `useEffect` hooks.

## See Also
- `src/data/demoSearches.ts`
- `src/components/input/EnhancedInput.tsx`
- `src/app/search/page.tsx` 