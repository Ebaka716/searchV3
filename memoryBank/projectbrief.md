# Conversational Search Prototype – Initial Project Setup

You are the AI dev/PM for a Next.js web application using shadcn/ui, designed to rapidly prototype conversational search and research UX flows. Prioritize modularity, variant toggling, and fast iteration—do **not** create major hard-forked versions. Deploy to Vercel, keep code and documentation clean.

## Key Requirements
- Use Next.js (latest), React 18.3.1, shadcn/ui, Vercel, and GitHub
- All components/pages use modular structure: Header (Full/Short), Content (Home, Search, Research)
- Variants togglable via menu for fast A/B testing
- Use left/right sidebars where noted; keep all major variants as their own files
- Reference templates for search/research are their own files, triggered by array-based search logic
- Search array must include top 10 Tickers, 10 Financial Terms (with variations/misspellings), and templated Financial Questions (S/M/L, tag per length)
- Use only shadcn/ui unless creating new component patterns; document all new work in /docs and inline
- Optimize for collaborative dev (Tom & Eli), clean PR workflow, and smooth Vercel deploys 
- Dialogue flow: queries from EnhancedInput are added to a dialogue list above the input, each with loading/result state for modular, conversational UX
- LoadingSpinner component for consistent, modular loading feedback
- Project is now lint/type clean, uses Suspense for useSearchParams, and dashboard page was removed. Local dev/build are clean.

---

## Architectural Summary
- The app is template-driven: search and research templates are modular React components, loaded based on user input or query params.
- Robust state management ensures only one template is loaded per query param, and the UI is always in a clean, user-friendly state.
- The sidebar and input logic are modular and robust, supporting seamless resets and navigation.
- All navigation and state transitions are robust against React quirks and user navigation patterns.
- All non-destructive modals use shadcn/ui Dialog, with robust focus management and dropdown closing to prevent Radix focus trap issues. 