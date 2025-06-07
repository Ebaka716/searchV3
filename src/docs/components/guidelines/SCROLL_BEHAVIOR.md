# Scroll Behavior in Search Page

## Overview
This document explains the scroll-to-header logic and chat-like behavior implemented in the search page. It covers the use of React refs, the reason for the scroll offset, and how the code ensures that new entries (especially big templates) are always visible just below the fixed main page header.

---

## Chat-like Scroll Behavior
- When a new entry is added to the dialogue (including big templates), the scroll area should behave like a chat app:
  - **Normal entries:** Scroll to the bottom so the newest entry is visible.
  - **Big template entries:** Scroll so the heading of the new big template appears just below the fixed main page header.

---

## Implementation Details

### 1. Refs
- `scrollAreaRef`: Ref for the scrollable area (the green chat/results area).
- `lastBigTemplateHeaderRef`: Ref for the header section of the most recent big template entry.

### 2. Adding Entries
- New entries are added to the end of the dialogue array (chat-like, newest at the bottom).
- When a new big template is added, a ref is attached to its header section.

### 3. Scroll Logic
```js
useEffect(() => {
  // If the last entry is a big template, scroll to its header
  if (dialogue.length > 0 && dialogue[dialogue.length - 1].text === '__BIG_TEMPLATE__') {
    if (lastBigTemplateHeaderRef.current && scrollAreaRef.current) {
      // Get the vertical offset of the header within the scroll area
      const headerOffset = lastBigTemplateHeaderRef.current.offsetTop;
      // Scroll so the header is just below the fixed main page header (64px)
      scrollAreaRef.current.scrollTo({ top: headerOffset - 64, behavior: 'smooth' });
    }
  } else {
    // Otherwise, scroll to bottom as usual (for chat-like UX)
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }
}, [dialogue]);
```

### 4. Why the Scroll Offset?
- The main page header is fixed at the top of the page (height: 64px).
- Without the offset, the heading of a new big template could be hidden behind the fixed header.
- By subtracting 64px from the scroll position, the heading is always fully visible just below the header.

---

## Usage Pattern
- Attach a ref to the element you want to scroll to (e.g., the header of a new entry).
- When a new entry is added, set the scroll area's `scrollTop` to the element's `offsetTop` minus the fixed header height.
- This ensures the element is always visible and not hidden behind any fixed UI.

---

## Example
```js
if (lastBigTemplateHeaderRef.current && scrollAreaRef.current) {
  const headerOffset = lastBigTemplateHeaderRef.current.offsetTop;
  scrollAreaRef.current.scrollTo({ top: headerOffset - 64, behavior: 'smooth' });
}
```

---

## Summary
This approach provides a smooth, user-friendly chat experience where new results are always brought into view, and important headings are never hidden behind the main navigation. 