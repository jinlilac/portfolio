import { useState, useEffect } from "react";

interface UseTypewriterOptions {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
  loop?: boolean;
}

export const useTypewriter = ({
  words,
  typeSpeed = 100,
  deleteSpeed = 50,
  delaySpeed = 2000,
  loop = true,
}: UseTypewriterOptions) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          // Deleting phase
          setCurrentText((prev) => prev.slice(0, -1));

          if (currentText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prev) =>
              loop
                ? (prev + 1) % words.length
                : Math.min(prev + 1, words.length - 1)
            );
          }
        } else {
          // Typing phase
          if (currentText === currentWord) {
            // Word is complete, start delay before deleting
            if (loop || currentWordIndex < words.length - 1) {
              setTimeout(() => setIsDeleting(true), delaySpeed);
            } else {
              setIsTyping(false);
            }
            return;
          }

          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }
      },
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentWordIndex,
    isDeleting,
    words,
    typeSpeed,
    deleteSpeed,
    delaySpeed,
    loop,
  ]);

  return {
    text: currentText,
    isTyping,
    currentWordIndex,
  };
};
