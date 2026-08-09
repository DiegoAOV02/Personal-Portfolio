const NavDesktop = () => {
  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
  ];

  return (
    <nav className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300"
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default NavDesktop;
