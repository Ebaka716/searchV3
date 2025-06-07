# RMD Template System

## Overview
The RMD template system provides a unified, modular framework for handling all RMD-related queries in a conversational search flow. It includes large, medium, and small templates, each with a consistent layout and UX.

## Templates
- **Large:** General RMD info, answer, conversation buttons, and full-width search results.
- **Medium:** Eligibility/requirement info, answer, conversation buttons, search results, and a blue intent notification card for next-step queries.
- **Small:** Last-year RMD amount, answer, conversation buttons, and three RMD-related search suggestions.

## Patterns
- **Row-Based Card Grid:** All templates use a declarative, array-driven row/card system for layout.
- **Intent Notification Card:** Used in medium templates to guide users to the next logical query.
- **Alias Matching:** Ensures that intent buttons reliably trigger the correct template.

## Integration
- All templates are registered in demoSearches and loaded via event-driven or direct user input.
- Ensures a seamless, guided conversational experience for RMD-related queries. 