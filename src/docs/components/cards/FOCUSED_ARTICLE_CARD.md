# FocusedArticleCard

A modular, reusable card component for highlighting articles or featured content in the app. Designed for use in search/research templates, sidebars, or any context where a focused article preview is needed.

## Purpose
- Highlight an article or featured resource with a prominent icon (or image), bold title, description, and type label.
- Consistent with shadcn/ui card patterns and modern financial UX.

## Props
- `title` (string, required): The article or resource title.
- `description` (string, required): A short summary or description.
- `type` (string, optional): Label for the content type (default: "Article").

## Usage Example
```tsx
<FocusedArticleCard
  title="Provider Change: What to Expect With Your New Debit Card"
  description="Your debit card provider is changing. Learn what this means for your account, how to activate your new card, and what steps to take to ensure uninterrupted access."
  type="Article"
/>
```

## Design & UX
- Uses shadcn/ui Card primitives for structure and spacing.
- Large icon at the top (can be replaced with an image in the future).
- Title is bold and left-aligned, with an underline on card hover (card is also elevated on hover).
- Description is left-aligned and concise.
- Footer displays an article icon and type label.
- Fully responsive and visually consistent with other cards in the system. 