import React, { createContext, useContext, useState, ReactNode } from "react";

// Dialogue entry type (matches DialogueArea)
export type DialogueEntry = { id: number; type: string; text?: string; query?: string };

// History entry type
export interface DialogueHistoryEntry {
  label: string; // The initial query
  dialogue: DialogueEntry[]; // The full dialogue array
}

interface DialogueHistoryContextType {
  history: DialogueHistoryEntry[];
  addHistoryEntry: (label: string, dialogue: DialogueEntry[]) => void;
  restoreHistoryEntry: (index: number) => void;
  currentDialogue: DialogueEntry[];
  setCurrentDialogue: (d: DialogueEntry[]) => void;
}

const DialogueHistoryContext = createContext<DialogueHistoryContextType | undefined>(undefined);

export function useDialogueHistory() {
  const ctx = useContext(DialogueHistoryContext);
  if (!ctx) throw new Error("useDialogueHistory must be used within a DialogueHistoryProvider");
  return ctx;
}

export function DialogueHistoryProvider({ children }: { children: ReactNode }) {
  const [history, setHistory] = useState<DialogueHistoryEntry[]>([]);
  const [currentDialogue, setCurrentDialogue] = useState<DialogueEntry[]>([]);

  // Add a new history entry (FIFO, max 4)
  const addHistoryEntry = (label: string, dialogue: DialogueEntry[]) => {
    setHistory(prev => {
      const newEntry: DialogueHistoryEntry = { label, dialogue };
      const filtered = prev.filter(e => e.label !== label); // Remove duplicates by label
      const updated = [newEntry, ...filtered];
      return updated.slice(0, 4); // Keep max 4
    });
  };

  // Restore a history entry by index
  const restoreHistoryEntry = (index: number) => {
    setCurrentDialogue(history[index]?.dialogue || []);
  };

  return (
    <DialogueHistoryContext.Provider value={{ history, addHistoryEntry, restoreHistoryEntry, currentDialogue, setCurrentDialogue }}>
      {children}
    </DialogueHistoryContext.Provider>
  );
} 