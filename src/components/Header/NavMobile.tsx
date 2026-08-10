import NavLinks from "./NavLinks";

const NavMobile = () => (
  <nav className="flex md:hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-md">
    <NavLinks />
  </nav>
);

export default NavMobile;
