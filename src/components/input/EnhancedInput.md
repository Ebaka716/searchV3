# EnhancedInput Component Documentation

## Overview
`EnhancedInput.tsx` provides the main user input for the search page.

## Responsibilities
- Accepts user input and uses `findDemoSearchMatch` to determine if a template should be loaded.
- Clears the input after processing a query param or template load.
- Interacts with `DialogueArea` to trigger template loading and state updates.
- Ensures consistent, robust input handling for both direct user entry and query param-driven flows.

## Usage
- Used in the search page below the dialogue area.
- Shares matching logic with `HeaderInput` for consistency.

### Example
```tsx
<EnhancedInput value={value} onChange={onChange} onSend={onSend} mode={mode} onModeChange={setMode} />
```

## Extension Notes
- To add new context sources, extend the dropdown menu logic.
- For new input modes, add to the Tabs and update the mode handling logic.

## See Also
- `src/data/demoSearches.ts`
- `src/components/dialogue/DialogueArea.tsx`
- `src/app/search/page.tsx` 