# OpenAccountSmallTemplate

A template for the brokerage account opening flow, designed for focused, single-row transactional experiences.

## Purpose
- Guides the user through opening a brokerage account with a single, full-width card.
- Presents user data, policy/IRS information, and clear CTAs in a visually consistent, production-ready format.

## Structure
- Uses BigTemplate and CardGrid to render a single full-width row.
- Contains OpenAccountBrokerageOverviewCard as the only card in the row.
- Header and preamble are set based on the triggering query.

## Integration
- Triggered by queries/aliases like "open brokerage account" via demoSearches and DialogueArea logic.
- Follows project conventions for template-driven, array-based layouts.

## Best Practices
- Use for focused, single-action flows where user data and policy confirmation are required.
- Extend with additional cards or rows as needed for more complex flows.
- Ensure all content is accessible and visually consistent with other templates. 