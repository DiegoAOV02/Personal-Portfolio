import { useEffect, useRef } from "react";

function NavMobile({ open, activeSection, setOpen }: { open: boolean; activeSection: string; setOpen?: (open: boolean) => void; }) {
  const menuRef = useRef<HTMLUListElement>(null);

  const links = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "resume", label: "Resume" },
  ];

  const handleClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      if (setOpen) setOpen(false);
    }
  };

  useEffect(() => {
    if (!open) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        if (setOpen) setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open, setOpen]);

  return (
    <ul
      ref={menuRef}
      className={`md:hidden flex flex-col space-y-2 bg-gray-800 transition-all duration-300 ${
        open ? "max-h-40 py-2 opacity-100" : "max-h-0 overflow-hidden opacity-0"
      }`}
    >
      {links.map(({ id, label }) => (
        <li key={id}>
          <button
            onClick={() => handleClick(id)}
            className={`px-2 text-center w-full transition-colors duration-200 ${
              activeSection === id ? "text-cyan-400" : "hover:text-gray-400"
            }`}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default NavMobile;
