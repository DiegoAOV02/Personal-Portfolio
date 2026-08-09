import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import NavDesktop from "./NavDesktop";
import HamburgerButton from "./HamburgerButton";
import NavMobile from "./NavMobile";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // NavMobile requires an activeSection string according to the error
  const [activeSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Optional: Logic to update activeSection based on scroll position
      // For now, we'll keep a default to satisfy the TypeScript requirement
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-black/50 backdrop-blur-md border-b border-white/5"
          : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Logo />

        <NavDesktop />

        <div className="hidden md:block">
          <a
            href="https://www.linkedin.com/in/diego-ortizv/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2 border border-white/20 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 font-mono"
          >
            {/* LinkedIn SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-colors duration-300"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span>Let's Connect!</span>
          </a>
        </div>

        {/* Mobile Toggle - Updated Prop Names */}
        <div className="md:hidden">
          <HamburgerButton open={isOpen} setOpen={setIsOpen} />
        </div>
      </div>

      {/* Mobile Menu - Updated Prop Names and added activeSection */}
      <AnimatePresence>
        {isOpen && (
          <NavMobile
            open={isOpen}
            setOpen={setIsOpen}
            activeSection={activeSection}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
