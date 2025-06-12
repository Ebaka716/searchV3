# OpenAccountBrokerageOverviewCard

A robust, modular card component for the Open Account Small Template (brokerage flow).

## Purpose
- Guides the user through opening a brokerage account with a single, focused card.
- Presents user data, important policy/IRS information, and clear CTAs in a visually consistent, production-ready format.

## Structure
- **Header:** Lucide User icon in gray box, left-aligned above the title "Open a Brokerage Account".
- **User Info Box:** Gray background, border, rounded, with demo data (Clark Kent, address, email, phone, SSN, DOB).
- **Important Documents and Confirmation:**
  - Section heading: "Important documents and confirmation"
  - Clickable doc section: Account Opening Agreements (icon, title, description, hover effect, keyboard accessible)
  - Policy/IRS bullet points, including bolded items for arbitration and IRS consent
- **CTAs:** Two buttons at the bottom: secondary (Close), primary (Open Account)

## Props
- None (uses demo data for now; can be extended for real user data)

## Demo Data
- Name: Clark Kent
- Email: clark.kent@dailyplanet.com
- Address: 344 Clinton St, Apt 3B, Metropolis, NY 10001
- Phone: (212) 555-0193
- SSN: ***-**-1234
- DOB: 06/18/1978

## Policy Section
- All content matches production requirements: clickable doc, full bullet list, bolded items, and clear legal language.

## Integration
- Used in OpenAccountSmallTemplate as a full-width card row.
- Triggered by queries/aliases like "open brokerage account" via demoSearches and DialogueArea logic.
- Follows shadcn/ui and project card/grid patterns.

## Accessibility
- Clickable doc section is keyboard accessible (tabIndex, role, aria-label).
- All text and buttons meet color contrast and focus requirements.

## Best Practices
- Use as a reference for future transactional/confirmation cards.
- Extend with real user data as needed for production. 