function NavDesktop({ activeSection }: { activeSection: string }) {
  const links = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "resume", label: "Resume" },
  ];

  const handleClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ul className="hidden md:flex space-x-4 lg:space-x-8 text-base">
      {links.map(({ id, label }) => (
        <li key={id}>
          <button
            onClick={() => handleClick(id)}
            className={`transition-colors duration-200 cursor-pointer ${
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

export default NavDesktop;
