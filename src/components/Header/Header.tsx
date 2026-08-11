import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-8">
      <div className="w-full px-6 flex items-center justify-center">
        <NavDesktop />
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;
