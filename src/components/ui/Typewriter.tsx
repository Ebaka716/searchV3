import React, { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number; // ms per character
  onDone?: () => void;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 1, onDone, className }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    if (!text) {
      onDone?.();
      return;
    }
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) {
        clearInterval(interval);
        onDone?.();
      }
    }, speed);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speed]);

  return <span className={className}>{displayed}</span>;
};

export default Typewriter; 