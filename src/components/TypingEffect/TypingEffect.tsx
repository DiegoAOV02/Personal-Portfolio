import { useEffect, useMemo, useState } from "react";

function TypingEffect() {
  const phrases = useMemo(
    () => [
      "IT Engineer",
      "Fullstack Developer",
      "Data Scientist",
      "AI Enthusiast",
    ],
    []
  );

  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (deleting) {
      timeout = setTimeout(() => {
        setText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex === 0) {
          setDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex === currentPhrase.length) {
          setDeleting(true);
        }
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex, phrases]);

  return (
    <div className="text-center text-xl md:text-2xl lg:text-3xl font-mono text-cyan-400 h-12">
      <span>{text}</span>
      <span className="animate-blink ml-1">|</span>
    </div>
  );
}

export default TypingEffect;
