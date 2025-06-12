# CloseAccountOverviewCard

A modular, shadcn/ui-based card component for the Close Account flow. Matches the structure and style of DebitCardOverviewCard for visual and UX consistency.

## Structure
- Uses shadcn/ui `Card`, `CardHeader`, `CardTitle`, `CardContent`, and `CardFooter` primitives.
- Icon: Lucide `LogOut` icon, size w-6 h-6, in a gray (`bg-zinc-100`) rounded-xl box, left-aligned above the title.
- Title: Uses `CardTitle` (now `text-xl` by default).
- Content: Shows eligible account info and requirements.
- Actions: Two shadcn/ui `Button` components for "Get started" and "Show all accounts".

## Usage
```tsx
import CloseAccountOverviewCard from '@/components/common/CloseAccountOverviewCard';

<CloseAccountOverviewCard />
```

## Props
- None (currently static, but can be extended for dynamic account info or actions).

## Pattern
- Follows the unified card component pattern: all major cards use shadcn/ui primitives, standardized iconography, and event-driven UX where applicable. 