# AAPL Template System

A modular, event-driven template flow for Apple (AAPL) queries, supporting large, medium, and small templates with seamless conversational transitions.

## Template Flow
- **Large Template:** Overview, stats, and search results for AAPL.
- **Medium Template:** Dividends, earnings, and a blue notification card suggesting the next query/alias.
- **Small Template:** Focused answer for recent dividend activity, triggered by specific alias (e.g., "my dividends for apple last month").

## Event-Driven Notification Card Pattern
- The blue notification card in the medium template displays a suggested query/alias.
- When the suggestion is clicked, it dispatches a CustomEvent (`add-to-floating-input`) with the alias as value, injecting it into the dialogue area and triggering the small template.

### Example (from AaplMediumTemplate):
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

## Pattern
- This event-driven notification card pattern is now standard for all templates that suggest next-step queries or actions.
- Ensures discoverability, rapid navigation, and a seamless conversational UX. 