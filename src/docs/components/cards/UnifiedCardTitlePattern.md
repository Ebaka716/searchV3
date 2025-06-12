# Unified CardTitle Pattern

## Overview
All `CardTitle` components now use the `text-xl` class by default, ensuring consistent, prominent headings across all cards in the app.

## Rationale
- Improves visual hierarchy and clarity.
- Reduces the need for manual className overrides.
- Ensures a unified look and feel for all card-based UI.

## Usage
No action needed—`CardTitle` is `text-xl` by default:
```tsx
<CardTitle>My Card Heading</CardTitle>
```

## Overriding
If a different size is needed for a specific card, pass a custom className:
```tsx
<CardTitle className="text-lg">Smaller Heading</CardTitle>
``` 