function HamburgerButton({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
}) {
  return (
    <button
      className="md:hidden relative z-50 focus:outline-none group"
      onClick={() => setOpen(!open)}
      aria-label="Toggle Menu"
    >
      <div className="relative w-6 h-6">
        <span
          className={`absolute top-1 left-0 w-full h-0.5 bg-white transition duration-300 ${
            open ? "rotate-45 top-3" : ""
          } group-hover:bg-gray-400`}
        />
        <span
          className={`absolute top-3 left-0 w-full h-0.5 bg-white transition-opacity duration-300 ${
            open ? "opacity-0" : ""
          } group-hover:bg-gray-400`}
        />
        <span
          className={`absolute bottom-1 left-0 w-full h-0.5 bg-white transition duration-300 ${
            open ? "-rotate-45 bottom-3" : ""
          } group-hover:bg-gray-400`}
        />
      </div>
    </button>
  );
}
export default HamburgerButton;
