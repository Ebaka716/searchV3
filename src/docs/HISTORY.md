# History System Documentation

## Overview
The history feature provides users with quick access to their most recent search sessions. It is designed for a conversational search/research app, allowing users to revisit previous queries and their associated dialogue states. The system is intentionally lightweight for rapid prototyping and easy understanding by new contributors.

---

## Purpose
- **User Experience:** Allow users to quickly return to recent searches and see the initial context of each session.
- **Demo Simplicity:** For demo purposes, each history slot only remembers the first query and its initial response/template.
- **Modularity:** The system is designed to be easily extended in the future to support full dialogue restoration or persistent storage.

---

## How It Works

### User Interaction
- The sidebar contains a **History** section with 4 slots.
- When a user starts a new search (via the "New Search" action in the sidebar), the first query entered is saved as a new history slot (at the top).
- If there are already 4 slots, the oldest is removed (FIFO order).
- Clicking a history slot restores the dialogue area to the state of that slot (for the demo, this is just the first query and its initial response/template).
- Empty slots are shown as "(empty)" until filled.

### Technical Implementation
- **State Management:**
  - The history system is managed by a React context: `DialogueHistoryContext` (see `src/context/DialogueHistoryContext.tsx`).
  - The context provides:
    - `history`: An array of up to 4 history entries, each with a `label` (the first query) and a `dialogue` array (the initial dialogue state).
    - `addHistoryEntry(label, dialogue)`: Adds a new slot to history.
    - `restoreHistoryEntry(index)`: Restores the dialogue state for the selected slot.
    - `currentDialogue` and `setCurrentDialogue`: The current dialogue state for the active session.
- **Integration Points:**
  - The context provider wraps the main layout, so all pages and the sidebar have access.
  - The sidebar (`AppSidebar.tsx`) renders the history slots and handles user clicks to restore sessions.
  - The dialogue area (`DialogueArea.tsx`) uses the context to manage and restore dialogue state.
- **Slot Behavior:**
  - Only the first query and its initial response are saved for each slot (for demo simplicity).
  - When a new search is started, a new slot is created and pushed to the top of the list.
  - When a slot is restored, only the saved dialogue for that slot is shown.

---

## Design Decisions
- **Demo-First:** The system is intentionally simple for demo and prototyping. It does not persist history across reloads or store full conversations.
- **FIFO Logic:** The 4-slot limit and FIFO removal keep the UI uncluttered and the logic easy to follow.
- **Extensibility:** The context and slot structure can be extended in the future to support:
  - Full dialogue restoration (not just the first query)
  - Persistent storage (localStorage, backend, etc.)
  - User-specific or session-specific history

---

## Extension Points & Future Work
- **Full Dialogue Tracking:**
  - To track the entire conversation for each slot, update the context to save the full dialogue array as it changes.
  - Restore the full array when a slot is clicked.
- **Persistence:**
  - Save the `history` array to localStorage or a backend to persist across reloads.
- **UI Enhancements:**
  - Show more details in each slot (e.g., timestamp, summary, icons).
  - Allow users to rename or delete slots.
- **Accessibility:**
  - Ensure all sidebar actions and slots are keyboard accessible and screen reader friendly.

---

## File References
- `src/context/DialogueHistoryContext.tsx` — Context and logic for history management.
- `src/components/sidebar/AppSidebar.tsx` — Sidebar UI, including the History section.
- `src/components/dialogue/DialogueArea.tsx` — Dialogue area that interacts with the history context.

---

## Example Usage

**Adding a new history slot:**
- User clicks "New Search" in the sidebar.
- User enters a query (e.g., "What is a Roth IRA?").
- The query and its initial response are saved as a new slot at the top of the history list.

**Restoring a slot:**
- User clicks a slot in the History section.
- The dialogue area is reset to show the saved query and response for that slot.

---

## Contact
For questions or improvements, see the Memory Bank documentation or contact the project maintainers. 