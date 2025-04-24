function NavMobile({ open }: { open: boolean }) {
  return (
    <ul
      className={`md:hidden flex flex-col space-y-2 bg-gray-800 transition-all duration-300 ${
        open ? "max-h-40 py-2 opacity-100" : "max-h-0 overflow-hidden opacity-0"
      }`}
    >
      <li>
        <a href="#about" className="hover:text-gray-400 px-2">
          About
        </a>
      </li>
      <li>
        <a href="#projects" className="hover:text-gray-400 px-2">
          Projects
        </a>
      </li>
      <li>
        <a href="#blog" className="hover:text-gray-400 px-2">
          Resume
        </a>
      </li>
    </ul>
  );
}
export default NavMobile;
