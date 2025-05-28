# Speak with Rep Template (Customer Service Small)

## Overview
The Speak with Rep template is the final step in the customer service flow for debit card delivery issues. It provides users with personalized, actionable options to contact support, ensuring a seamless handoff to a live associate or alternative support channels.

## Purpose
- Guide users who need direct human assistance after self-service and tracking options.
- Present the most relevant, fastest support channel (Live Chat) with context-aware details.
- Offer alternative channels (Schedule a Call Back, Email Us) and in-person options (branch map).
- Ensure all actions are accessible, visually clear, and easy to use.

## User Flow
1. User starts with a broad debit card delivery query.
2. Progresses through tracking and troubleshooting steps.
3. Arrives at the Speak with Rep template when they need to contact support directly.

## Card Layout
### Row 1: Support Channels (thirds layout)
- **Left (main) card: Live Chat**
  - "Recommended" badge (green, top right)
  - Chat icon (top-aligned)
  - Heading: Live Chat
  - Estimated wait time (under heading)
  - Inquiry summary in tan box with edit button and typewriter effect
  - Routing note (centered above CTA)
  - Primary CTA: Start Chat (black button)
- **Right card: Other Support Channels**
  - Schedule a Call Back (phone icon, next available time, outline button)
  - Email Us (mail icon, average response time, outline button)

### Row 2: Find a Branch (half layout)
- **Left card: Map view**
  - Google Maps iframe embed (static location)
  - List of nearby branches (name, address, distance)
  - Each branch has a right-aligned outline button: Schedule appointment
- **Right card: Call Us**
  - Customer service phone number and hours (placeholder)

## Key Props
- `headerRef?`: For scroll anchoring in dialogue area
- `query`: The user's original query, used for context and prefilled info

## UX Notes
- All buttons use shadcn/ui Button with correct variant (outline or default)
- Live Chat is visually dominant and marked as recommended
- Inquiry summary uses a typewriter effect and sparkle icon for a personal touch
- All actions are accessible and have visible hover states
- Map is a static Google Maps iframe for simplicity
- Layout is responsive and visually consistent with other templates

## Extension Points
- Integrate real-time wait times or dynamic branch data
- Make appointment buttons functional (open scheduling modal)
- Add tooltips or help icons for each support channel
- Localize text and support multiple languages

---

_Last updated: 2024-06-XX_ 