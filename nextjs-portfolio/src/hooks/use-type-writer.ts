"use client";
import { useEffect, useState } from "react";

export function useTypeWriter(text: string, speed: number = 50) {
  const [displayedText, setDisplayedText] = useState(""); // Tracks the animated text
  const [isCompleted, setIsCompleted] = useState(false); // Tracks if animation is complete

  useEffect(() => {
    let index = 0; // Current character index
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index)); // Add one character at a time
        index++;
      } else {
        clearInterval(interval); // Clear the interval when animation is complete
        setIsCompleted(true); // Mark as completed
      }
    }, speed);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [text, speed]);

  return { displayedText, isCompleted }; // Return both the animated text and completion status
}
