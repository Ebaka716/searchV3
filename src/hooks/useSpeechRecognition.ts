// TypeScript type definitions for SpeechRecognition API (fallback to any if not available)
type _SpeechRecognition = typeof window extends { webkitSpeechRecognition: infer T } ? T : any;
type _SpeechRecognitionEvent = typeof window extends { webkitSpeechRecognitionEvent: infer T } ? T : any;

import { useRef, useState } from "react";

type SpeechRecognitionResultCallback = (transcript: string) => void;

export function useSpeechRecognition(onResult: SpeechRecognitionResultCallback) {
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef<any>(null);

  const isSupported = typeof window !== "undefined" && (
    "SpeechRecognition" in window || "webkitSpeechRecognition" in window
  );

  const startListening = () => {
    if (!isSupported) return;
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      onResult(transcript);
      setListening(false);
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);

    recognitionRef.current = recognition;
    recognition.start();
    setListening(true);
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setListening(false);
  };

  return { listening, isSupported, startListening, stopListening };
} 