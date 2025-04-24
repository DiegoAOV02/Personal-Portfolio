import { useState } from "react";
import Logo from "./Logo";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import HamburgerButton from "./HamburgerButton";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50 px-4 sm:px-6 md:px-8">
      <div className="flex items-center justify-between py-3">
        <Logo />
        <HamburgerButton open={open} setOpen={setOpen} />
        <NavDesktop />
      </div>
      <NavMobile open={open} />
    </header>
  );
}

export default Header;
