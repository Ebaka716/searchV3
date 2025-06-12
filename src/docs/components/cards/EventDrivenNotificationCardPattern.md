# Event-Driven Notification Card Pattern

## Overview
Notification/intent cards in templates can suggest next-step queries or actions. To make these suggestions interactive, use an event-driven pattern: clicking the suggestion injects the alias into the dialogue area, triggering the appropriate template.

## Implementation
- Use a button or clickable span for the suggestion text.
- On click, dispatch a CustomEvent (`add-to-floating-input`) with the alias as value.
- The dialogue area listens for this event and updates accordingly.

### Example
```tsx
<button
  type="button"
  className="font-mono bg-blue-200 px-1 py-0.5 rounded underline hover:bg-blue-300 transition-colors ml-1 focus:outline-none"
  onClick={() => window.dispatchEvent(
    new CustomEvent('add-to-floating-input', { detail: { value: 'my dividends for apple last month' } })
  )}
>
  my dividends for apple last month
</button>
```

## UX Rationale
- Increases discoverability of next-step actions.
- Enables rapid, seamless navigation between templates.
- Supports a modular, event-driven conversational UX.

## Pattern Status
- Standard in AAPL and RMD template flows.
- Recommended for all future notification/intent cards. 