function NavDesktop() {
  return (
    <ul className="hidden md:flex space-x-4 lg:space-x-8 text-base">
      <li>
        <a
          href="#about"
          className="hover:text-gray-400 transition-colors duration-200"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className="hover:text-gray-400 transition-colors duration-200"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#blog"
          className="hover:text-gray-400 transition-colors duration-200"
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavDesktop;
