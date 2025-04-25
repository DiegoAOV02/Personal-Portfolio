type NavMobileProps = {
  open: boolean;
  activeSection: string;
  setOpen?: (open: boolean) => void; // opcional para cerrar menú tras clic
};

function NavMobile({ open, activeSection, setOpen }: NavMobileProps) {
  const links = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "resume", label: "Resume" },
  ];

  const handleClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      if (setOpen) setOpen(false); // cierra el menú
    }
  };

  return (
    <ul
      className={`md:hidden flex flex-col space-y-2 bg-gray-800 transition-all duration-300 ${
        open ? "max-h-40 py-2 opacity-100" : "max-h-0 overflow-hidden opacity-0"
      }`}
    >
      {links.map(({ id, label }) => (
        <li key={id}>
          <button
            onClick={() => handleClick(id)}
            className={`px-2 text-left w-full transition-colors duration-200 ${
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
