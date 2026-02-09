import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import HamburgerButton from "./HamburgerButton";
import useScrollSpy from "../../hooks/useScrollSpy";

function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const activeSection = useScrollSpy(["about", "projects", "resume"]);

  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Detect click outside of the header
  useEffect(() => {
    if (!open) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled ? "bg-gray-800/70 py-2 shadow-md" : "bg-transparent py-4"
      } px-4 sm:px-6 md:px-8 text-white`}
    >
      <div className="flex items-center justify-between py-3">
        <Logo />
        <HamburgerButton open={open} setOpen={setOpen} />
        <NavDesktop activeSection={activeSection} />
      </div>
      <NavMobile open={open} activeSection={activeSection} setOpen={setOpen} />
    </header>
  );
}

export default Header;
