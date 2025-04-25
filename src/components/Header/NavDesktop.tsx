function NavDesktop({ activeSection }: { activeSection: string }) {
  const links = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "resume", label: "Resume" },
  ];

  return (
    <ul className="hidden md:flex space-x-4 lg:space-x-8 text-base">
      {links.map(({ id, label }) => (
        <li key={id}>
          <a
            href={`#${id}`}
            className={`transition-colors duration-200 ${
              activeSection === id ? "text-cyan-400" : "hover:text-gray-400"
            }`}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavDesktop;
