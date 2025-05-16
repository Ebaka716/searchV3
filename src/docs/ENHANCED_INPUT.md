# EnhancedInput Component

## Location
- `src/components/input/EnhancedInput.tsx`

## Overview
EnhancedInput is a modular, multi-mode input component designed for conversational search and research flows. It supports text entry, voice input (via Web Speech API), contextual actions, and mode switching (search/research).

## Props
- `value: string` — The current input value (controlled).
- `onChange: (e) => void` — Handler for input value changes.
- `onSend: () => void` — Handler for submitting the input (e.g., pressing Enter or clicking send).
- `mode?: 'search' | 'research'` — Current mode (default: 'search').
- `onModeChange?: (mode) => void` — Handler for switching between search and research modes.

## Features
- **Auto-growing textarea** for natural language input.
- **Mode switching** (search/research) with tabbed UI and icons.
- **Contextual menu** (dropdown) for file upload, screenshot, and other actions.
- **Voice input**: Click the mic button to use browser speech recognition (Web Speech API). Button animates while listening.
- **Send button**: Submits the current input.
- **Accessibility**: All controls are keyboard-accessible and have ARIA labels.
- **Responsiveness**: Adapts to container width, with min/max height for textarea.
- **Integration**: Used in both Search and Research pages, and can be dropped into any modular layout.
- **Dialogue flow**: When used in Search, submitted queries are added to a dialogue array for conversational UX.

## Usage Example
```tsx
<EnhancedInput
  value={value}
  onChange={e => setValue(e.target.value)}
  onSend={handleSend}
  mode={mode}
  onModeChange={setMode}
/>
```

## Notes
- Voice input requires a supported browser (Chrome, Edge). Shows an alert if unsupported.
- Contextual menu can be extended for more actions.
- All UI uses shadcn/ui and lucide-react for consistency. 