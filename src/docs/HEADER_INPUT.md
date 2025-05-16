# HeaderInput Component

## Location
- `src/components/header/HeaderInput.tsx`

## Overview
HeaderInput is a stateless, controlled input component for search/research entry. It is used within the Header and can be reused in other layouts.

## Props
- `onSmartSuggestOpen: () => void` — Handler for opening smart suggestions.
- `onOpenResearch?: () => void` — Handler for switching to research mode (optional).

## Usage
- Used in the Header (full variant) for search/research entry.
- Can be reused in other layouts or as a standalone input.

## Accessibility & Reusability
- All controls are keyboard-accessible and have ARIA labels.
- Stateless and controlled by parent for maximum flexibility. 