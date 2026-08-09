import { motion } from "framer-motion";
import { useLayoutEffect, useState } from "react";

const NAME = "DIEGO.ORTIZ";
// Full type-out takes ~1s and delete takes well under 2s, per spec.
const TYPING_SPEED = 90;
const DELETING_SPEED = 70;

type Phase = "idle" | "typing" | "deleting";

function renderName(text: string) {
  return text.split("").map((char, index) =>
    char === "." ? (
      <span key={index} className="text-cyan-400">
        .
      </span>
    ) : (
      <span key={index}>{char}</span>
    ),
  );
}

function Logo() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [charIndex, setCharIndex] = useState(NAME.length);

  useLayoutEffect(() => {
    if (phase === "typing") {
      if (charIndex >= NAME.length) return;
      const timeout = window.setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, TYPING_SPEED);
      return () => clearTimeout(timeout);
    }

    if (phase === "deleting") {
      if (charIndex <= 0) {
        setPhase("idle");
        setCharIndex(NAME.length);
        return;
      }
      const timeout = window.setTimeout(() => {
        setCharIndex((prev) => prev - 1);
      }, DELETING_SPEED);
      return () => clearTimeout(timeout);
    }
  }, [phase, charIndex]);

  const handleMouseEnter = () => {
    setCharIndex(0);
    setPhase("typing");
  };

  const handleMouseLeave = () => {
    setPhase("deleting");
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isAnimating = phase !== "idle";

  return (
    // The animated text is absolutely positioned over an invisible copy of
    // the full name, so the hit box never resizes as characters are typed
    // or deleted — a resizing box would otherwise fire mouseenter/mouseleave
    // on itself mid-animation and loop the effect forever.
    <motion.a
      href="#"
      aria-label="Diego Ortiz - Back to top"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-flex items-center text-xl font-bold tracking-tighter text-white font-mono cursor-pointer"
    >
      <span className="invisible flex items-center" aria-hidden="true">
        {renderName(NAME)}
        <span className="ml-0.5">|</span>
      </span>
      <span
        className="absolute inset-0 flex items-center"
        aria-hidden="true"
      >
        {renderName(NAME.slice(0, charIndex))}
        {isAnimating && (
          <span className="animate-blink ml-0.5 text-cyan-400">|</span>
        )}
      </span>
    </motion.a>
  );
}

export default Logo;
