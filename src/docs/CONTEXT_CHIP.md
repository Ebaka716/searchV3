# ContextChip Component

## Location
- `src/components/common/ContextChip.tsx`

## Overview
ContextChip is a modular, reusable component for displaying attached files or context items as chips. It is designed to be used above input areas (such as EnhancedInput) to show context files, but can be used anywhere a removable chip is needed.

## Features
- **Black, rounded chip** for a modern, clear look
- **File type icon** (PDF, DOCX, TXT, image, or generic file)
- **File name** (truncated if too long)
- **Removable**: Each chip has an X button to remove it from context
- **Accessible**: Button is keyboard and screen reader accessible
- **Responsive**: Chips wrap to new lines as needed

## Props
- `fileName: string` — The name of the file or context item
- `fileType: 'pdf' | 'docx' | 'txt' | 'image' | 'other'` — Used to select the icon
- `onRemove: () => void` — Handler called when the X button is clicked

## Usage Example
```tsx
<ContextChip
  fileName="report.pdf"
  fileType="pdf"
  onRemove={() => removeFile("report.pdf")}
/>
```

## Integration
- Used in EnhancedInput to display uploaded files as context chips above the textarea
- Can be used in any context where removable, labeled chips are needed

## Customization
- To add more file types or change icons, update the `getFileIcon` function in the component
- To change colors or spacing, edit the Tailwind classes in the component 