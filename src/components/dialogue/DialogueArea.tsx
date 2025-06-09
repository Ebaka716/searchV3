"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { EnhancedInput } from "@/components/input/EnhancedInput";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import AaplSmallTemplate from "../templates/AaplSmallTemplate";
import AaplMediumTemplate from "../templates/AaplMediumTemplate";
import AaplLargeTemplate from "../templates/AaplLargeTemplate";
import CustomerServiceSmallTemplate from "../templates/CustomerServiceSmallTemplate";
import CustomerServiceMediumTemplate from "../templates/CustomerServiceMediumTemplate";
import CustomerServiceLargeTemplate from "../templates/CustomerServiceLargeTemplate";
import RmdLargeTemplate from "../templates/RmdLargeTemplate";
import RmdMediumTemplate from "../templates/RmdMediumTemplate";
import RmdSmallTemplate from "../templates/RmdSmallTemplate";
import CloseAccountLargeTemplate from "../templates/CloseAccountLargeTemplate";
import CloseAccountMediumTemplate from "../templates/CloseAccountMediumTemplate";
import { findDemoSearchMatch } from "@/data/demoSearches";
import { useDialogueHistory, DialogueEntry } from "@/context/DialogueHistoryContext";

/**
 * DialogueArea.tsx
 *
 * This component encapsulates the chat-like scroll area for the search page.
 *
 * Responsibilities:
 * - Loads the correct template based on user input or the `query` query param (using findDemoSearchMatch).
 * - Handles the `reset` query param to force a blank state (used by the sidebar's New Search button).
 * - Uses refs and effects to keep new dialogue entries visible and to guard against double-processing (e.g., React double-mounts).
 * - Ensures only one template is loaded per query param, robust against React quirks.
 *
 * Usage:
 *   - Used in the search page as the main dialogue/chat area.
 *   - Interacts with EnhancedInput and HeaderInput for template loading.
 *
 * See also:
 *   - src/data/demoSearches.ts
 *   - src/components/input/EnhancedInput.tsx
 *   - src/app/search/page.tsx
 */
export default function DialogueArea({ headerHeight = 0, mode = 'search', onModeChange }: { headerHeight?: number, mode?: 'search' | 'research', onModeChange?: (m: 'search' | 'research') => void }) {
  // All hooks must be called unconditionally at the top
  const [value, setValue] = useState("");
  const dialogueIdRef = useRef(1);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const lastBigTemplateHeaderRef = useRef<HTMLDivElement>(null);
  const lastLoadingRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams(); // Always call, but only use if mode === 'search'
  const hasHandledQueryParamRef = useRef(false);
  const [readyForInput, setReadyForInput] = useState(false);
  const { currentDialogue, setCurrentDialogue, addHistoryEntry } = useDialogueHistory();
  const dialogue = currentDialogue;
  const setDialogue = setCurrentDialogue;
  const latestDialogueRef = useRef(dialogue);
  const [hideInput, setHideInput] = useState(false);
  useEffect(() => {
    latestDialogueRef.current = dialogue;
  }, [dialogue]);

  const getNextDialogueId = useCallback(() => dialogueIdRef.current++, []);

  // On mount or when query param changes, trigger template if query is present and dialogue is empty (search mode only)
  useEffect(() => {
    if (mode !== 'search') return;
    if (!searchParams) return;
    if (hasHandledQueryParamRef.current) return;
    const query = searchParams.get("query") || "";
    if (query && dialogue.length === 0) {
      const trimmed = query.trim();
      const match = findDemoSearchMatch(trimmed);
      if (
        match &&
        match.type === 'ticker' &&
        (match.query.toLowerCase().includes('aapl') ||
          match.aliases.some(alias => alias.toLowerCase().includes('aapl')))
      ) {
        const id = getNextDialogueId();
        setDialogue([...dialogue, { id, type: 'loading' }]);
        setTimeout(() => {
          const updatedDialogue = latestDialogueRef.current.map((entry: DialogueEntry) =>
            entry.id === id
              ? { id, type: `__AAPL_${match.size.toUpperCase()}_TEMPLATE__`, query: trimmed }
              : entry
          );
          setDialogue(updatedDialogue);
          setReadyForInput(true);
          addHistoryEntry(trimmed, [
            { id, type: `__AAPL_${match.size.toUpperCase()}_TEMPLATE__`, query: trimmed }
          ]);
        }, 1200);
        hasHandledQueryParamRef.current = true;
        setValue("");
        return;
      }
      // Customer Service: Debit Card Delivery
      if (
        match &&
        match.type === 'question' &&
        (match.query.toLowerCase().includes('debit card') ||
          match.aliases.some(alias => alias.toLowerCase().includes('debit card')))
      ) {
        const id = getNextDialogueId();
        setDialogue([...dialogue, { id, type: 'loading' }]);
        setTimeout(() => {
          const updatedDialogue = latestDialogueRef.current.map((entry: DialogueEntry) =>
            entry.id === id
              ? { id, type: `__CUSTOMER_SERVICE_${match.size.toUpperCase()}_TEMPLATE__`, query: trimmed }
              : entry
          );
          setDialogue(updatedDialogue);
          setReadyForInput(true);
          addHistoryEntry(trimmed, [
            { id, type: `__CUSTOMER_SERVICE_${match.size.toUpperCase()}_TEMPLATE__`, query: trimmed }
          ]);
        }, 1200);
        hasHandledQueryParamRef.current = true;
        setValue("");
        return;
      }
      // RMD: Required Minimum Distribution
      if (
        match &&
        match.type === 'term' &&
        (match.query.toLowerCase().includes('rmd') ||
          match.aliases.some(alias => alias.toLowerCase().includes('rmd')))
      ) {
        const id = getNextDialogueId();
        setDialogue([...dialogue, { id, type: 'loading' }]);
        setTimeout(() => {
          const updatedDialogue = latestDialogueRef.current.map((entry: DialogueEntry) =>
            entry.id === id
              ? { id, type: `__RMD_${match.size.toUpperCase()}_TEMPLATE__`, query: trimmed }
              : entry
          );
          setDialogue(updatedDialogue);
          setReadyForInput(true);
          addHistoryEntry(trimmed, [
            { id, type: `__RMD_${match.size.toUpperCase()}_TEMPLATE__`, query: trimmed }
          ]);
        }, 1200);
        hasHandledQueryParamRef.current = true;
        setValue("");
        return;
      }
      // Close Account: Medium
      if (
        match &&
        match.type === 'term' &&
        match.size === 'medium' &&
        (match.query.toLowerCase().includes('account') ||
          match.aliases.some(alias => alias.toLowerCase().includes('account')))
      ) {
        const id = getNextDialogueId();
        setDialogue([...dialogue, { id, type: 'loading' }]);
        setTimeout(() => {
          const updatedDialogue = latestDialogueRef.current.map((entry: DialogueEntry) =>
            entry.id === id
              ? { id, type: '__CLOSE_ACCOUNT_MEDIUM_TEMPLATE__', query: trimmed }
              : entry
          );
          setDialogue(updatedDialogue);
          setReadyForInput(true);
          addHistoryEntry(trimmed, [
            { id, type: '__CLOSE_ACCOUNT_MEDIUM_TEMPLATE__', query: trimmed }
          ]);
        }, 1200);
        hasHandledQueryParamRef.current = true;
        setValue("");
        return;
      }
      // Close Account: Large
      if (
        match &&
        match.type === 'term' &&
        (match.query.toLowerCase().includes('close account') ||
          match.aliases.some(alias => alias.toLowerCase().includes('close account')))
      ) {
        const id = getNextDialogueId();
        setDialogue([...dialogue, { id, type: 'loading' }]);
        setTimeout(() => {
          const updatedDialogue = latestDialogueRef.current.map((entry: DialogueEntry) =>
            entry.id === id
              ? { id, type: `__CLOSE_ACCOUNT_LARGE_TEMPLATE__`, query: trimmed }
              : entry
          );
          setDialogue(updatedDialogue);
          setReadyForInput(true);
          addHistoryEntry(trimmed, [
            { id, type: `__CLOSE_ACCOUNT_LARGE_TEMPLATE__`, query: trimmed }
          ]);
        }, 1200);
        hasHandledQueryParamRef.current = true;
        setValue("");
        return;
      }
      // Fallback: add as plain text
      const id = getNextDialogueId();
      setDialogue([...dialogue, { id, type: 'text', text: trimmed }]);
      hasHandledQueryParamRef.current = true;
      setValue("");
      setReadyForInput(true);
      addHistoryEntry(trimmed, [
        { id, type: 'text', text: trimmed }
      ]);
    } else if (!query) {
      setReadyForInput(true);
    }
  }, [searchParams, dialogue, addHistoryEntry, setDialogue, getNextDialogueId, mode]);

  // Reset dialogue and input when the 'reset' query param changes (search mode only)
  const resetParamValue = mode === 'search' && searchParams ? searchParams.get("reset") : undefined;
  useEffect(() => {
    if (mode !== 'search') return;
    if (!resetParamValue) return;
    setDialogue([]);
    setValue("");
    setReadyForInput(true);
    hasHandledQueryParamRef.current = false; // allow query param logic to run again if needed
  }, [resetParamValue, setDialogue, mode]);

  // Handle EnhancedInput send (only user input, never pre-filled)
  const handleSend = useCallback((inputValue?: string) => {
    const trimmed = (inputValue ?? value).trim();
    if (!trimmed) return;
    const match = findDemoSearchMatch(trimmed);
    const currentDialogueSnapshot = latestDialogueRef.current;
    const shouldAddHistory = currentDialogueSnapshot.filter(e => e.type !== 'loading').length === 0;

    if (
      match &&
      match.type === 'ticker' &&
      (match.query.toLowerCase().includes('aapl') ||
        match.aliases.some(alias => alias.toLowerCase().includes('aapl')))
    ) {
      const id = getNextDialogueId();
      setDialogue([...currentDialogueSnapshot, { id, type: 'loading' }]);
      setTimeout(() => {
        const updatedDialogue = latestDialogueRef.current.map((entry: DialogueEntry) =>
          entry.id === id
            ? { id, type: `__AAPL_${match.size.toUpperCase()}_TEMPLATE__`, query: trimmed }
            : entry
        );
        setDialogue(updatedDialogue);
        if (shouldAddHistory) {
          addHistoryEntry(trimmed, [
            { id, type: `__AAPL_${match.size.toUpperCase()}_TEMPLATE__`, query: trimmed }
          ]);
        }
      }, 1200);
      setValue("");
      return;
    }
    // Customer Service: Debit Card Delivery
    if (
      match &&
      match.type === 'question' &&
      (match.query.toLowerCase().includes('debit card') ||
        match.aliases.some(alias => alias.toLowerCase().includes('debit card')))
    ) {
      const id = getNextDialogueId();
      setDialogue([...currentDialogueSnapshot, { id, type: 'loading' }]);
      setTimeout(() => {
        const updatedDialogue = latestDialogueRef.current.map((entry: DialogueEntry) =>
          entry.id === id
            ? { id, type: `__CUSTOMER_SERVICE_${match.size.toUpperCase()}_TEMPLATE__`, query: trimmed }
            : entry
        );
        setDialogue(updatedDialogue);
        if (shouldAddHistory) {
          addHistoryEntry(trimmed, [
            { id, type: `__CUSTOMER_SERVICE_${match.size.toUpperCase()}_TEMPLATE__`, query: trimmed }
          ]);
        }
      }, 1200);
      setValue("");
      return;
    }
    // RMD: Required Minimum Distribution
    if (
      match &&
      match.type === 'term' &&
      (match.query.toLowerCase().includes('rmd') ||
        match.aliases.some(alias => alias.toLowerCase().includes('rmd')))
    ) {
      const id = getNextDialogueId();
      setDialogue([...currentDialogueSnapshot, { id, type: 'loading' }]);
      setTimeout(() => {
        const updatedDialogue = latestDialogueRef.current.map((entry: DialogueEntry) =>
          entry.id === id
            ? { id, type: `__RMD_${match.size.toUpperCase()}_TEMPLATE__`, query: trimmed }
            : entry
        );
        setDialogue(updatedDialogue);
        if (shouldAddHistory) {
          addHistoryEntry(trimmed, [
            { id, type: `__RMD_${match.size.toUpperCase()}_TEMPLATE__`, query: trimmed }
          ]);
        }
      }, 1200);
      setValue("");
      return;
    }
    // Close Account: Medium
    if (
      match &&
      match.type === 'term' &&
      match.size === 'medium' &&
      (match.query.toLowerCase().includes('account') ||
        match.aliases.some(alias => alias.toLowerCase().includes('account')))
    ) {
      const id = getNextDialogueId();
      setDialogue([...currentDialogueSnapshot, { id, type: 'loading' }]);
      setTimeout(() => {
        const updatedDialogue = latestDialogueRef.current.map((entry: DialogueEntry) =>
          entry.id === id
            ? { id, type: '__CLOSE_ACCOUNT_MEDIUM_TEMPLATE__', query: trimmed }
            : entry
        );
        setDialogue(updatedDialogue);
        if (shouldAddHistory) {
          addHistoryEntry(trimmed, [
            { id, type: '__CLOSE_ACCOUNT_MEDIUM_TEMPLATE__', query: trimmed }
          ]);
        }
      }, 1200);
      setValue("");
      return;
    }
    // Close Account: Large
    if (
      match &&
      match.type === 'term' &&
      (match.query.toLowerCase().includes('close account') ||
        match.aliases.some(alias => alias.toLowerCase().includes('close account')))
    ) {
      const id = getNextDialogueId();
      setDialogue([...currentDialogueSnapshot, { id, type: 'loading' }]);
      setTimeout(() => {
        const updatedDialogue = latestDialogueRef.current.map((entry: DialogueEntry) =>
          entry.id === id
            ? { id, type: `__CLOSE_ACCOUNT_LARGE_TEMPLATE__`, query: trimmed }
            : entry
        );
        setDialogue(updatedDialogue);
        if (shouldAddHistory) {
          addHistoryEntry(trimmed, [
            { id, type: `__CLOSE_ACCOUNT_LARGE_TEMPLATE__`, query: trimmed }
          ]);
        }
      }, 1200);
      setValue("");
      return;
    }
    // Fallback: add as plain text
    const id = getNextDialogueId();
    setDialogue([...currentDialogueSnapshot, { id, type: 'text', text: trimmed }]);
    if (shouldAddHistory) {
      addHistoryEntry(trimmed, [
        { id, type: 'text', text: trimmed }
      ]);
    }
    setValue("");
  }, [value, getNextDialogueId, setDialogue, latestDialogueRef, addHistoryEntry]);

  // Scroll behavior for chat/results area
  useEffect(() => {
    if (dialogue.length > 0) {
      // If loading, scroll loading spinner just into view
      if (dialogue[dialogue.length - 1].type === 'loading') {
        if (lastLoadingRef.current && scrollAreaRef.current) {
          const loadingRect = lastLoadingRef.current.getBoundingClientRect();
          const scrollRect = scrollAreaRef.current.getBoundingClientRect();
          const offset = loadingRect.top - scrollRect.top;
          scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollTop + offset, behavior: 'smooth' });
        }
      // If template, scroll header to top
      } else if (lastBigTemplateHeaderRef.current && scrollAreaRef.current) {
        const headerRect = lastBigTemplateHeaderRef.current.getBoundingClientRect();
        const scrollRect = scrollAreaRef.current.getBoundingClientRect();
        const offset = headerRect.top - scrollRect.top;
        scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollTop + offset, behavior: 'smooth' });
      } else if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
      }
    }
  }, [dialogue, headerHeight]);

  // Add a handler that updates mode and navigates
  const handleModeChange = (newMode: 'search' | 'research') => {
    if (onModeChange) {
      onModeChange(newMode);
    }
    // Optionally, handle navigation if needed, or leave to parent
  };

  // Listen for custom event to programmatically add input
  useEffect(() => {
    const handler = (e: Event) => {
      const custom = e as CustomEvent<{ value: string }>;
      if (custom.detail && typeof custom.detail.value === 'string') {
        handleSend(custom.detail.value);
      }
    };
    window.addEventListener('add-to-floating-input', handler as EventListener);
    return () => window.removeEventListener('add-to-floating-input', handler as EventListener);
  }, [handleSend]);

  // In research mode, always set readyForInput to true on mount
  useEffect(() => {
    if (mode === 'research') {
      setReadyForInput(true);
    }
  }, [mode]);

  return (
    <div className={"w-full h-full flex flex-col flex-1 relative"}>
      {/* Scrollable content area */}
      <div
        ref={scrollAreaRef}
        className="overflow-y-auto h-full w-full pb-48 flex-1"
        style={{}}
      >
        <div className="max-w-[984px] mx-auto w-full px-8">
          <div style={{ height: 24 }} />
          {dialogue.length === 0 ? (
            <div className="text-zinc-400 text-center mt-12">No dialogue yet. Start by entering a query below.</div>
          ) : (
            dialogue.map((entry, idx) => (
              entry.type === 'loading' ? (
                <div
                  key={entry.id}
                  ref={idx === dialogue.length - 1 ? lastLoadingRef : undefined}
                  className="flex justify-center py-8"
                >
                  <LoadingSpinner text="Thinking..." />
                </div>
              ) : entry.type === '__AAPL_SMALL_TEMPLATE__' ? (
                <AaplSmallTemplate
                  key={entry.id}
                  headerRef={idx === dialogue.length - 1 ? lastBigTemplateHeaderRef : undefined}
                  query={entry.query ?? ''}
                />
              ) : entry.type === '__AAPL_MEDIUM_TEMPLATE__' ? (
                <AaplMediumTemplate
                  key={entry.id}
                  headerRef={idx === dialogue.length - 1 ? lastBigTemplateHeaderRef : undefined}
                  query={entry.query ?? ''}
                />
              ) : entry.type === '__AAPL_LARGE_TEMPLATE__' ? (
                <AaplLargeTemplate
                  key={entry.id}
                  headerRef={idx === dialogue.length - 1 ? lastBigTemplateHeaderRef : undefined}
                  query={entry.query ?? ''}
                />
              ) : entry.type === '__CUSTOMER_SERVICE_SMALL_TEMPLATE__' ? (
                <CustomerServiceSmallTemplate
                  key={entry.id}
                  headerRef={idx === dialogue.length - 1 ? lastBigTemplateHeaderRef : undefined}
                  query={entry.query ?? ''}
                />
              ) : entry.type === '__CUSTOMER_SERVICE_MEDIUM_TEMPLATE__' ? (
                <CustomerServiceMediumTemplate
                  key={entry.id}
                  headerRef={idx === dialogue.length - 1 ? lastBigTemplateHeaderRef : undefined}
                  query={entry.query ?? ''}
                />
              ) : entry.type === '__CUSTOMER_SERVICE_LARGE_TEMPLATE__' ? (
                <CustomerServiceLargeTemplate
                  key={entry.id}
                  headerRef={idx === dialogue.length - 1 ? lastBigTemplateHeaderRef : undefined}
                  query={entry.query ?? ''}
                />
              ) : entry.type === '__RMD_LARGE_TEMPLATE__' ? (
                <RmdLargeTemplate
                  key={entry.id}
                  headerRef={idx === dialogue.length - 1 ? lastBigTemplateHeaderRef : undefined}
                  query={entry.query ?? ''}
                />
              ) : entry.type === '__RMD_MEDIUM_TEMPLATE__' ? (
                <RmdMediumTemplate
                  key={entry.id}
                  headerRef={idx === dialogue.length - 1 ? lastBigTemplateHeaderRef : undefined}
                  query={entry.query ?? ''}
                />
              ) : entry.type === '__RMD_SMALL_TEMPLATE__' ? (
                <RmdSmallTemplate
                  key={entry.id}
                  headerRef={idx === dialogue.length - 1 ? lastBigTemplateHeaderRef : undefined}
                  query={entry.query ?? ''}
                />
              ) : entry.type === '__CLOSE_ACCOUNT_LARGE_TEMPLATE__' ? (
                <CloseAccountLargeTemplate
                  key={entry.id}
                  headerRef={idx === dialogue.length - 1 ? lastBigTemplateHeaderRef : undefined}
                  query={entry.query ?? ''}
                  setHideInput={setHideInput}
                />
              ) : entry.type === '__CLOSE_ACCOUNT_MEDIUM_TEMPLATE__' ? (
                <CloseAccountMediumTemplate
                  key={entry.id}
                  headerRef={idx === dialogue.length - 1 ? lastBigTemplateHeaderRef : undefined}
                  query={entry.query ?? ''}
                />
              ) : (
                <div
                  key={entry.id}
                  className={
                    entry.text === 'This is a BIG CARD!'
                      ? "p-10 border-4 border-blue-500 bg-blue-100 text-blue-900 rounded-2xl shadow-lg text-2xl font-extrabold flex items-center justify-center mb-8"
                      : "p-4 border-b last:border-b-0 text-zinc-700 bg-white rounded-lg shadow-sm mb-6"
                  }
                >
                  {entry.text}
                </div>
              )
            ))
          )}
        </div>
      </div>
      {/* Input bar: conditional positioning based on mode */}
      {readyForInput && !hideInput && (
        mode === 'search' ? (
          <div className="fixed bottom-0 left-0 w-full z-30 pointer-events-none pb-4">
            <div className="pointer-events-auto w-full max-w-[884px] mx-auto px-8">
              <EnhancedInput
                value={value}
                onChange={e => setValue(e.target.value)}
                onSend={handleSend}
                mode={mode}
                onModeChange={handleModeChange}
              />
            </div>
          </div>
        ) : (
          <div className="absolute left-0 bottom-0 w-full z-10 pointer-events-auto px-8 pb-4 bg-white">
            <EnhancedInput
              value={value}
              onChange={e => setValue(e.target.value)}
              onSend={handleSend}
              mode={mode}
              onModeChange={handleModeChange}
            />
          </div>
        )
      )}
    </div>
  );
} 