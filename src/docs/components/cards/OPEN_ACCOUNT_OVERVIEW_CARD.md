# OpenAccountOverviewCard Documentation

## Overview

`OpenAccountOverviewCard` is a robust, modular React component designed for the account opening flow in the conversational search app. It provides users with an interactive, filterable table of account types, allowing multi-selection and a clear call-to-action (CTA) for opening accounts. The component is built with shadcn/ui primitives for consistent design, accessibility, and rapid prototyping.

---

## Purpose
- **Primary use:** Display a list of available account types for users to open, with filtering and multi-select capabilities.
- **Context:** Used as the main content in the `OpenAccountLargeTemplate` and can be integrated into other flows requiring account selection.
- **User goal:** Quickly find, compare, and select one or more account types to open, then proceed with a single CTA.

---

## Layout & Structure
- **Sidebar (Left Panel):**
  - Always visible, with radio button filters (e.g., All Accounts, Most Popular, Checking, Savings, etc.).
  - Uses shadcn/ui `RadioGroup` and `RadioGroupItem` for accessibility and style.
  - Sidebar background color extends to the bottom of the card and matches the card's border-radius.
- **Table Area (Right Panel):**
  - Fixed height (default: 790px) for stable layout regardless of filter selection.
  - Uses shadcn/ui `Table`, `TableHeader`, `TableBody`, `TableRow`, `TableHead`, and `TableCell`.
  - Columns: Select (checkbox), Account Name, Description, Minimum, Fee.
  - Each row has a shadcn/ui `Checkbox` for multi-select.
  - Table content updates based on the selected filter.
- **CTA Button:**
  - "Open Account" button is absolutely positioned at the bottom right of the table area for persistent visibility.
  - Uses shadcn/ui `Button`.
  - Disabled unless at least one account is selected.

---

## Props & Customization
- **No required props** (self-contained for most use cases).
- **Account types and filters** are currently hardcoded for demo purposes but can be made dynamic via props or context.
- **Height** can be adjusted by changing the `style={{ height: '790px' }}` on the table and sidebar containers.
- **CTA behavior** can be customized by replacing the `handleOpenAccount` function.

---

## Usage Example
```tsx
import OpenAccountOverviewCard from '@/components/common/OpenAccountOverviewCard';

function Example() {
  return (
    <div className="max-w-4xl mx-auto">
      <OpenAccountOverviewCard />
    </div>
  );
}
```

---

## UI/UX Patterns & Best Practices
- **shadcn/ui Primitives:** All controls use shadcn/ui for consistent design and accessibility.
- **Fixed Height:** Ensures the card does not grow/shrink when switching filters, providing a stable user experience.
- **Sidebar Rounding:** Sidebar uses `rounded-l-2xl` and the card uses `overflow-hidden` to ensure seamless border-radius.
- **Absolute CTA:** The CTA button is always visible at the bottom right, regardless of table scroll or content.
- **Multi-Select:** Users can select multiple account types before proceeding.
- **Responsiveness:** The card is designed for desktop layouts; further tweaks may be needed for mobile.

---

## Integration Notes
- **Template Usage:** Used in `OpenAccountLargeTemplate` as the main card row.
- **Dialogue Area:** When triggered by a matching query/alias, this card is rendered in the dialogue area as part of the conversational flow.
- **State Management:** Internal state manages selected filter and selected accounts. For advanced use, lift state up or connect to global context.
- **Accessibility:** All controls are keyboard accessible and use proper labels.

---

## Customization Tips
- **Account Data:** Replace the `ACCOUNT_TYPES` and `FILTERS` arrays with dynamic data as needed.
- **CTA Action:** Replace the `handleOpenAccount` function to integrate with your account opening workflow.
- **Styling:** Adjust padding, height, and border-radius via Tailwind classes or inline styles.

---

## Related Components
- `OpenAccountLargeTemplate`
- shadcn/ui: `RadioGroup`, `Checkbox`, `Table`, `Button`, `Card`

---

## Changelog
- **2024-07:** Initial implementation with shadcn/ui, fixed height, sidebar rounding, and absolute CTA.
- **2024-07:** Refactored for robust template integration and accessibility.

---

For further details or to propose improvements, see the source code in `/src/components/common/OpenAccountOverviewCard.tsx` or contact the project maintainers. 